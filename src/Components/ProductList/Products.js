import React from "react";
import ProductDetails from "./ProductDetails";

function Products(props) {
    return (
        <li className="list-group-item" style={{backgroundColor: props.isAvailable ? 'white': 'grey'}}>
            <div className="media align-item-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <div className="col-md-4">
                        <ProductDetails id={props.id}
                            name={props.name}
                            description={props.description}
                            isAvailable={props.isAvailable}
                            imageURL={props.imageURL}
                            price={props.price}
                            stock={props.stock}>
                        </ProductDetails>
                    </div>
                </div>
            </div>
        </li>
    )

}

export default Products;