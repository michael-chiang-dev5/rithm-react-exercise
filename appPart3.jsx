

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

class Person extends React.Component {
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

class App extends React.Component {
    render() {
        return (
            <div>
                <Person age='20' name='michael' hobbies={['tennis','running','reading']}/>
                <Person age='22' name='beth' hobbies={['coding','math']}/>
                <Person age='21' name='charlie' hobbies={['sleeping','yawning']}/>                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("people"));
