import React, { useEffect, useReducer } from 'react';

export const initialState = {
    users: [],
    filteredUsers: [],
    searchTerm: '',
    loading: false,
    error: null,
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_USERS_SUCCESS':
            return { ...state, loading: false, users: action.payload, filteredUsers: action.payload };
        case 'FETCH_USERS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'SET_SEARCH_TERM':
            const newSearchTerm = action.payload;
            const filtered = state.users.filter(user =>
                user.title.toLowerCase().includes(newSearchTerm.toLowerCase()) || 
                user.body.toLowerCase().includes(newSearchTerm.toLowerCase()) || 
                user.userId === Number(newSearchTerm)
            );
            return { ...state, searchTerm: newSearchTerm, filteredUsers: filtered };
        default:
            return state;
    }
};

function UserList() {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        const fetchUsers = async () => {
            dispatch({ type: 'FETCH_USERS_REQUEST' });
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
            } catch (error) {
                dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
            }
        };
        fetchUsers();
    }, []);

    const handleSearchChange = (event) => {
         dispatch({ type: 'SET_SEARCH_TERM', payload: event.target.value });
    };

    return (<>
        <div>
            <input
                type="text"
                placeholder="Search users..."
                value={state.searchTerm}
                onChange={handleSearchChange}
            />
        </div>
        {!state.loading && !state.error && <div className="user-details">
            <table className="users-table">
                <tr>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>

                {state.filteredUsers.map((user) => {
                    return <>
                        <tr key={user.id}>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    </>
                })}

            </table>
        </div>}
        {state.error && <h1 style={{ textAlign: 'center' }}>{state.error}</h1>}
        {state.loading && <div>Loading products...</div>}
        <div>

        </div>
    </>
    );
}

export default UserList;