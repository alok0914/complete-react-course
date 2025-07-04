import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {

    useImperativeHandle(ref, () => {
        return { focus: customFocus, value: inputRef }
    })

    const inputRef = useRef('')

    function customFocus() {
        inputRef.current.focus();
    }

    return <div
        className={props.class}>
        <label htmlFor={props.htmlFor}>{props.children}</label>
        <input
            ref={inputRef}
            type={props.name}
            id={props.id}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
        >
        </input>

    </div>

})

export default Input;