const App= ()=> {
    return React.createElement("div",
    // ma div peut contenir plusieurs elements
    {},
    [
    React.createElement(
        "h1",
        {className: "bg-red-500"},
        // class est un resrvé en js (donc on doit nommer notre class par ex: className)
        "Hello World"
    ),
    React.createElement(
        "h2",
        {},
        "Seb c'est bien"
    )
    ]
    )
}
ReactDOM.render(React.createElement(App), document.getElementById
('root'));