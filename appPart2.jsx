class Tweet extends React.Component {
    render() {
        return (
            <div className = 'tweet'>{this.props.username} - {this.props.name} - {this.props.date}- {this.props.message}</div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Tweet username='mc5' name='michael' date='8/25/2022' message='first tweet'/>
                <Tweet username='mc5' name='michael' date='8/25/2022' message='second tweet'/>
                <Tweet username='luu' name='lukr' date='8/26/2022' message='response'/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('tweets'));
