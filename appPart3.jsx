class Person extends React.Component {
    render() {
        let age = this.props.age;
        return (
            <div>
            <p>Learn some more information about this person</p>
            {age >= 21 ? (<h3>have a drink</h3>) : (<h3>you must be 21 to drink</h3>)}
            </div>
        );
    }
}



//ReactDOM.render(<div>test</div>, document.getElementById('person'))
ReactDOM.render(<Person age='20'/>, document.getElementById("person"));