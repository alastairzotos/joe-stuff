const React = require('react');
const ReactDOM = require('react-dom');

function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <p>Have a look around</p>
            <AnotherComponent />
        </div>
    )
}

function AnotherComponent() {
    return (
        <div style={{ border: '1px solid black', width: 300, padding: 10, margin: 10 }}>
            <p>This is another component</p>
        </div>
    )
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('app')
);
