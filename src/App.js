import React, { useState, useEffect, useRef } from 'react';
import './app.css';
import CreateProducts from './Components/CreateProducts/CreateProducts';
import ProductList from './Components/ProductList/ProductList';
import FilterProduct from './Components/FilterProduct/FilterProduct';
import Modal from './Components/Modals/Modal';
import Button from "./Components/ProductList/Button";
import RefDemo from './Components/RefsDemo';
import ReducerDemo from './Components/ReducerDemo/ReducerDemo';
import AuthContext from './Components/Context/AuthContext';
import Input from './Components/Input/Input';
import ClassComponent from './Components/ClassBased/ClassComponent';

let products = [
    {
        pID: 1,
        pName: 'Fresh Milk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 12,
        stock: 2
    },
    {
        pID: 2,
        pName: 'Cottage Cheese',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10,
        stock: 5
    },
    {
        pID: 3,
        pName: 'Brocoli',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15,
        stock: 5
    },
    {
        pID: 4,
        pName: 'oranges',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/oranges.png",
        price: 20,
        stock: 5
    },
    {
        pID: 5,
        pName: 'Olive oil',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14,
        stock: 10
    }
]

function App() {

    const [showModal, updateShowModal] = useState(false);

    const [filterValue, updateFilterValue] = useState('all');
    function onFilterChange(filter) {
        updateFilterValue(filter);
    }

    const [newProductList, updateNewProduct] = useState(products);

    function createProduct(product) {
        product.pID = newProductList.length + 1;
        updateNewProduct([product, ...newProductList])
    }

    let filterProductList = newProductList.filter((product) => {
        if (filterValue === 'available') {
            return product.isAvailable === true;
        } else if (filterValue === 'unavailable') {
            return product.isAvailable === false;
        } else {
            return product;
        }

    })

    function displayModal() {
        updateShowModal(true);
    }

    function hideModal() {
        updateShowModal(false);
    }

    // Product form, list, filter example
    // return (<div className='row'>
    //     <div className='col-lg-8 mx-auto'>
    //         <Button eventHandler={displayModal}>Show Modal</Button>
    //         <Modal showModal={showModal} hideModal={hideModal}></Modal>
    //         <CreateProducts createProduct={createProduct}></CreateProducts>
    //         <FilterProduct onFilterChange={onFilterChange}></FilterProduct>
    //         <ProductList newProductList={filterProductList}></ProductList>
    //     </div>
    // </div>)

    // Ref example
    // return <>
    //     <RefDemo></RefDemo>
    // </>

    // Side-Effect/useEffect example
    // const [resourceType, setResourceType] = useState('Home')
    // useEffect(() => {}, [])
    // return <>
    //     <button onClick={() => { setResourceType('Home') }}>HOME</button>
    //     <button onClick={() => { setResourceType('About') }}>ABOUT</button>
    //     <button onClick={() => { setResourceType('Contact') }}>CONTACT</button>
    //     <h2>{resourceType}</h2>
    // </>

    // useReducer example
    //  return <>
    //     <ReducerDemo></ReducerDemo>
    //  </>

    //useContext Example   
    //   const [isLoggedIn, updateLoginIn] = useState(true);
    //     return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
    //         <ReducerDemo></ReducerDemo>
    //     </AuthContext.Provider>
    //useImperative Example
    // const [email, emailStateHandler] = useState('');
    // const emailRef = useRef('');
    // function onEmailChangeHandler(event) {
    //     console.log('dcsc', emailRef.current.value)
    //     emailStateHandler(event.target.value);
    // }
    // function onEmailBlueHandler(event) {
    //     return true;

    // }

    // return <Input
    //     ref={emailRef}
    //     type='email'
    //     id='email'
    //     value={email}
    //     onChangeHandler={onEmailChangeHandler}
    //     onBlurHandler={onEmailBlueHandler}
    // >
    //     E-Mail:
    // </Input>
    // Class Component Example
    return <>
    <ClassComponent>Setting children prop from App Component</ClassComponent>
    </>
}

export default App;