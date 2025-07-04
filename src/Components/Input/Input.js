import React from "react";

function Input(props) {

    return (<div
        className={props.class}>
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input
            type={props.name}
            id={props.id}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
        >

        </input>

    </div>)

}

export default Input;