var RE = React.createElement;

var Sections = [
    {
        displayName: "Programming Languages: Application and Interpretation",
        tags: ["programming_languages"],
        takeAway: "A simple, precise framework for understanding programming language features.",
        description: [
            "These are the materials from a course at Brown university on the subject of understanding and implementing programming languages. This course presents programming languages as the composition of atomic programming elements, mechanisms for combining those elements, and a set of more sophisticated constructs that get simplified into the core atomic and comining constructs.",
            "I highly recommend watching the introductory video \"How to study programming languages\" first."
        ],
        links: [
            {
                type: "video",
                text: "How to study programming languages",
                url:  "https://www.youtube.com/watch?v=3N__tvmZrzc"
            },
            {
                type: "website",
                text: "The Book",
                url:  "http://cs.brown.edu/courses/cs173/2012/book/index.html"
            },
            {
                type: "website",
                text: "All Course Materials",
                url:  "http://cs.brown.edu/courses/cs173/"
            }
        ]
    },
    {
        displayName: "Extra Credits",
        tags: ["video_games"],
        takeAway: "Focused explanations of numerous topics of videogame design.",
        description: [
            "I recommend all of their series, but this description concerns only their main series \"Extra Credits\".",
            "Each 5-10 minute video takes a single, small topic in video game design and provides an explanation of its role in games, how to judge the quality of an implementation of the given topic, and many example illustrating the points made in the video."
        ],
        links: [
            {
                type: "video",
                text: "Episodes of Extra Credits",
                url:  "https://www.youtube.com/playlist?list=PLB9B0CA00461BB187"
            },
            {
                type: "video",
                text: "All series produced by the Extra Credits team",
                url:  "https://www.youtube.com/user/ExtraCreditz"
            }
        ]
    },
    {
        displayName: "Every Frame a Painting",
        tags: ["movies"],
        takeAway: "Analyses of themes and techniques in the production of Movies.",
        description: [
            "This series decomposes the daunting topic of film into a set of videos which each provide a clear explanation of a single facet of film design and production."
        ],
        links: [
            {
                type: "video",
                text: "All episodes",
                url:  "https://www.youtube.com/playlist?list=PL2w4TvBbdQ3sMABf317ExCob_v6rW2-4s"
            }
        ]
    },
    {
        displayName: "The Animator's Survival Kit",
        tags: ["animation"],
        takeAway: "A breakdown of the theory and practice of animation.",
        description: [
            "This book starts with a history of animation, which explains what the essence of animation is and what animators seek to achieve.",
            "TODO: Finish description"
        ],
        links: [
            {
                type: "purchase",
                text: "Purchase the book",
                url:  "http://www.amazon.com/Animators-Survival-Kit-Principles-Classical/dp/086547897X"
            }
        ]
    },
    {
        displayName: "Code: The Hidden Language of Computer Hardware and Software",
        tags: ["computers"],
        takeAway: "A relatively concise explanation of how modern computers work.",
        description: [
            "This book starts with pre-computer codes and proceeds to explain how modern computers work by building on this simple foundation is incremental pieces.",
            "Not only is it very readable and clear, but the method of explanation mimicks the way that these ideas were developed in the first place. Piece by piece. Each piece building incrementally upon the last."
        ],
        links: [
            {
                type: "purchase",
                text: "Purchase the book",
                url:  "http://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319"
            }
        ]
    }
]

var TagDisplayNames = {
    "programming_languages": "Programming Languages"
}

var Application = React.createClass({
    render: function() {
        return RE('div', { className: "Application" },
            _.map(this.props.sections, function(s) { return RE(Section, s) })
        )
    }
})

var Section = React.createClass({
    render: function() {
        return RE("div", { className: "Section" }, [
            RE("h2", null, this.props.displayName),
            _.map(this.props.tags, function(t) { return RE('div', null, t) }),
            RE("p", null, this.props.takeAway),
            _.map(this.props.description, function(p) { return RE("p", null, p) }),
            RE("ul", null, _.map(this.props.links, function(l) {
                return RE('li', null, RE('a', { href: l.url }, l.text ))
            })),
        ])
    }
})

ReactDOM.render(
    React.createElement(Application, { sections: Sections }),
    document.body
);
