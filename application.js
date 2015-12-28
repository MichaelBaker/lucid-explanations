var Sections = [
    {
        "displayName": "Programming Languages: Application and Interpretation",
        "tags":        ["programming_languages"],
        "description": "A thing",
        "links":       [
            { "text": "How to study programming languages", "url": "https://www.youtube.com/watch?v=3N__tvmZrzc" }
        ]
    }
]

var TagDisplayNames = {
    "programming_languages": "Programming Languages"
}

var Application = React.createClass({
    render: function() {
        return React.createElement('div', { className: "Application" }, "hello there")
    }
})

var Section = React.createClass({
    render: function() {
        return React.createElement("div", { className: "Section" }, [
            "hello",
            "world"
        ])
    }
})

ReactDOM.render(
    React.createElement(Application, null),
    document.body
);
