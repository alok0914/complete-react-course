import { Component } from "react";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { showPara: true, count: 0 };
    }

    togglePara() {
        // this.setState({ showPara: false });
        //OR
        this.setState((currentState) => {
            return { showPara: !currentState.showPara };
        })
    }

    render() {
        return <>{this.props.children}
            {this.state.showPara && <p>Showing Paragraph</p>}
            <button onClick={this.togglePara.bind(this)}>{this.state.showPara ? 'Hide' : 'Show'}</button>
        </>

    }
}

export default ClassComponent;