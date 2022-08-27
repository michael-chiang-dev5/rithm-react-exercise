# RITHM-JSX-EXERCISES
Implements a solution to https://github.com/rithmschool/react_exercises/tree/master/01-introduction-to-react/jsx-and-babel

## Notes
React componenet return needs to be wrapped in a div
```javascript
class App extends React.Component {
    render() {
        return (
            <div>This works</div>
        );
}}
```

```javascript
class App extends React.Component {
    render() {
        return (
            <p>This doesn't work</p>
        );
}}
```