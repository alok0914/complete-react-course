import ReactDom from 'react-dom';
import React from 'react';
import './Modal.css';

function Modal(props) {
    console.log(props)
    return (<><div className={`alert ${props.showModal ? '' : 'hidden'}`}>
        <h2>This is an Alert!</h2>
        <p>
            This is a very simple example of how a custom
            alert window can be created and displayed
            dynamically using JavaScript.
        </p>
        <button className="modal-btn" eventHandler={props.hideModal}>OK</button>
    </div>
        <div className={`overlay ${props.showModal ? '' : 'hidden'}`}></div></>)
}

export default Modal;