class Person extends React.Component {
    render() {
        let age = this.props.age;
        let name = this.props.name;
        if (name.length>4) name=name.slice(0,4)
        let hobbies = this.props.hobbies
        return (
            <div>
            <p>Learn some more information about this person</p>
            {name}
            {age >= 21 ? (<h3>have a drink</h3>) : (<h3>you must be 21 to drink</h3>)}
            <ul>
                {hobbies.map((e)=><li>{e}</li>)}
            </ul>
            </div>
        );
    }
}

class Name extends React.Component {
    render() {
        let name = this.props.name;
        if (name.length>4) name=name.slice(0,4)
        return (
            <div>
                {name}
            </div>
        );
    }
}

class Age extends React.Component {
    render() {
        let age = this.props.age;
        return (
            <div>
                {age >= 21 ? (<h3>have a drink</h3>) : (<h3>you must be 21 to drink</h3>)}
            </div>
        )
    }
}

class Hobbies1 extends React.Component {
    render() {
        let hobbies = this.props.hobbies;
        const rn = []
        for (let hobby of hobbies) {
            rn.push(<li>{hobby}</li>);
        }   
        return (
            <div>
                <h3>Using array</h3>
                {rn}
            </div>
        )
    }
}

class Hobbies2 extends React.Component {
    render() {
        let hobbies = this.props.hobbies;        

        return (
            <div>
                <h3>Using map</h3>
                {hobbies.map((e)=><li>{e}</li>)}
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        let name = this.props.name;
        let age = this.props.age;
        let hobbies = this.props.hobbies

        return (
            <div>
                <p>Learn some more information about this person</p>
                <Name name={name}/>
                <Age age={age}/>
                <Hobbies1 hobbies={hobbies} />
                <Hobbies2 hobbies={hobbies} />
            </div>                
        );
    }
}


//ReactDOM.render(<div>test</div>, document.getElementById('person'))
ReactDOM.render(<App age='20' name='michael' hobbies={['tennis','running','reading']}/>, document.getElementById("person"));