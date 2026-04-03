const root = ReactDOM.createRoot(document.getElementById("root"));

const app = React.createElement("div", {}, [ 
    React.createElement("h1", {id: "heading"}, "Hello World From React!"),
    React.createElement("div", {id: "parent"}, 
        React.createElement("div", {id:"child"}, 
            React.createElement("h1", {}, "")
        )
    )
]);

root.render(app)