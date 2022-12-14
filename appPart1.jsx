class FirstComponent extends React.Component {
    render() {
        return (
            <h1>My very first component</h1>
        );
    }
}

class SecondComponent extends React.Component {
    render() {
        return (
            <h2>My second component</h2>
        );
    }
}

class NamedComponent extends React.Component {
    render() {
        return (
            <p>My name is {this.props.name}</p>
        );
    }
}

ReactDOM.render(<FirstComponent />, document.getElementById("firstComponent"));
ReactDOM.render(<SecondComponent />, document.getElementById("secondComponent"));
ReactDOM.render(<NamedComponent name='michael' />, document.getElementById("namedComponent"));