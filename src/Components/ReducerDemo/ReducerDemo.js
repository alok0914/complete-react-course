import AuthContext from '../Context/AuthContext';
import './ReducerDemo.css';
import { useReducer, useContext } from 'react';

function reducer(currentState, action) {


    switch (action) {
        case 'decrement':
            return { count: currentState.count - 1 };

        case 'increment':
            return { count: currentState.count + 1 };

        default:
            return currentState
    }

}

function ReducerDemo() {
    const context = useContext(AuthContext);
    console.log(context.isLoggedIn);
    const [state, dispatcher] = useReducer(reducer, { count: 0 })

    function decrement() {
        dispatcher('decrement');
    }

    function increment() {
        dispatcher('increment');
    }

    return <>
        <div className="container">
            <button onClick={decrement}>-</button>
            {context.isLoggedIn && <span>{state.count}</span>}
            <button onClick={increment}>+</button>
            <span>asaxaxas{context.isLoggedIn}</span>

        </div>
    </>
}

export default ReducerDemo;