import { Component } from "react";
import DemoContext from "../Context/DemoContext";

class ClassComponent extends Component {
    constructor() {
        super();
        this.state = { showPara: true, count: 0 };
    }

    componentDidMount() {
        // handle side effects
        console.log('component did mount called');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('in erro')
        // handle side effects
        // if (prevState.count != this.state.count) {
        //     this.setState({ count: this.count + 1 })
        // }
        // console.log('component did update called');
        // try {
        //     throw new Error('An error as occured');
        // }catch(error){
        //     alert(error);
        // }
        throw new Error('An error as occured');

    }

    componentWillUnmount() {
        console.log('component will unmount clean up things');
    }
    togglePara() {
        // this.setState({ showPara: false });
        //OR
        this.setState((currentState) => {
            return { showPara: !currentState.showPara };
        })
    }

    render() {
        return <DemoContext.Consumer>
            {(ctx) => {
                return <>
                    {this.props.children}
                    {this.state.showPara && <p>{ctx.value} {this.state.count}</p>}
                    <button onClick={this.togglePara.bind(this)}>{this.state.showPara ? 'Hide' : 'Show'}</button>
                </>
            }}

        </DemoContext.Consumer>




    }
}

export default ClassComponent;