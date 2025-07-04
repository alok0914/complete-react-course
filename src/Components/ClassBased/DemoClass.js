import { Component } from "react";

class DemoClass extends Component {
    render() {
        return <>{this.props.children}</>
    }
}

export default DemoClass;