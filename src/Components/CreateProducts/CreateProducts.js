import React, { useState } from "react";
import ProductForm from "./ProductForm";
import Button from "../ProductList/Button";

function CreateProducts(props) {

    const [showForm, updateShowForm] = useState(false);

    function onProductCreation(product) {
        props.createProduct(product)
    }

    function createNewProduct() {
        updateShowForm(true);
    }

    function hideCancelForm() {
        updateShowForm(false);
    }

    return (
        <div style={{ backgroundColor: "white", padding: "10px ,20px", borderRadius: 2 }}>
            {!showForm && <Button eventHandler={createNewProduct}>Create Product</Button>}
            {showForm && <ProductForm createproduct={onProductCreation} onCancel={hideCancelForm}></ProductForm>}
        </div>
    )

}

export default CreateProducts;