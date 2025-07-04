import React, { useState } from "react";

function ProductForm(props) {

    let [name, updateName] = useState('');
    let [price, updatePrice] = useState('');
    let [description, updateDescription] = useState('');
    let [isAvailable, updateIsAvailable] = useState(false);
    let [image, updateImage] = useState('');

    // let [userInput, updateUserInput] = useState({
    //     name: '',
    //     price: '',
    //     description: '',
    //     isAvailable: '',
    //     image: '',
    // })

    function nameInputHandler(event) {
        updateName(event.target.value)
        //updateUserInput((prevState) => { return { ...prevState, name: event.target.value } });
    }

    function priceInputHandler(event) {
        updatePrice(event.target.value)
        // updateUserInput((prevState) => { return { ...prevState, price: event.target.value } });
    }

    function descriptionInputHandler(event) {
        updateDescription(event.target.value)
        // updateUserInput((prevState) => { return { ...prevState, description: event.target.value } });
    }

    function isAvailableInputHandler(event) {
        updateIsAvailable(event.target.checked)
        // updateUserInput((prevState) => { return { ...prevState, isAvailable: event.target.value } });
    }

    function imageInputHandler(event) {
        updateImage(event.target.value)
        // updateUserInput((prevState) => { return { ...prevState, image: event.target.value } });
    }

    function createProductEventHandler(event) {
        event.preventDefault();
        let product = {

            pName: name,
            desc: description,
            isAvailable: Boolean(isAvailable),
            image: image,
            price: Number(price)
        }

        updateDescription('');
        updateImage('');
        updateName('');
        updatePrice('');
        updateIsAvailable(false);
        props.createproduct(product);
        props.onCancel();

    }
    function hideFormEventHandler() {
        props.hideForm(false);
    }
    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder="Product Name"
                    onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    value={price}
                    placeholder="Product Price"
                    onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    placeholder="Product Description"
                    onChange={descriptionInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" checked={isAvailable} role="switch" id="isAvailable"
                    onChange={isAvailableInputHandler} />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" value={image} className="form-control" id="select-image" onChange={imageInputHandler} />
            </div>


            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="submit" className="btn btn-primary" onClick={props.onCancel}>Cancel</button>
        </form>
    )

}

export default ProductForm;