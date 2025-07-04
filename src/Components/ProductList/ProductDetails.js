import React, {useState} from "react";
import Button from "./Button";

let style = {
    padding: '0px 20px',
    fontSize: 12
}

function ProductDetails(props) {

    let [productCount, updateProductCount] = useState(0);

    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : 'Zero'
    }

    let decrementCount = function () {
        updateProductCount(--productCount);
    }

    let incrementCount = function () {
        updateProductCount(++productCount);
    }



    let badgeClass = 'badge-margin-left-40px badge';
    badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger'
    return (<div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
            <img src={props.imageURL} className="img-fluid" alt="Product 1" />
            <h5>{props.name}</h5>
            <p className="text-muted">${props.price}</p>
            <p>{props.description}</p>
            <Button eventHandler={decrementCount} disabled={productCount === 0}>-</Button>
            <span style={style}>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementCount} disabled={productCount>= props.stock}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
            {props.children}
        </a>
    </div>)

}

export default ProductDetails;