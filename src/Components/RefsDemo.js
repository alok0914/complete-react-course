import { useRef } from "react";

function RefDemo() {

    let nameInputRef = useRef(''); // return object {current: ''} if no value then undefined


    function showInputEventHandler() {
        console.log(nameInputRef.current.value)
    }

    return <>
        <span>Name:</span>
        <input type="text" ref={nameInputRef}></input>
        <button onClick={showInputEventHandler}>Show Name</button>
    </>

}

export default RefDemo;