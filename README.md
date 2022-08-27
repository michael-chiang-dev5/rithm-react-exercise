# RITHM-JSX-EXERCISES
Implements a solution to https://github.com/rithmschool/react_exercises/tree/master/01-introduction-to-react/jsx-and-babel

## Notes
### React componenet return needs to be wrapped in a div
```javascript
/* Note the presence of a div */
class App extends React.Component {
    render() {
        return (
            <div>This works</div>
        );
}}
```

```javascript
/* Note the absence of a div */
class App extends React.Component {
    render() {
        return (
            <p>This doesn't work</p>
        );
}}
```

### The render return value is something like an array
```javascript
/* arr should be something like [<li>item1</li>, <li>item2</li>] */
/* you can also use map instead to generate arr, for example [item1,item2].map( (e)=><li>{e}</li> ) */
    render() {
        return (
        <div>{arr}</div>
        )}
```