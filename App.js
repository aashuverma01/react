const parent =React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child1"}) ,[
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2"),

    ],
    React.createElement("div", {id:"child2"}) ,[
        React.createElement("h1", {}, "I am heading 3"),
        React.createElement("h2", {}, "I am heading 4"),

    ],
])


const heading =React.createElement("h1",{id:"heading"}, "Hello world from react")
//heading returns object
console.log(parent) 
const root =ReactDOM.createRoot(document.getElementById("root"))
const root1 =ReactDOM.createRoot(document.getElementById("root2"))

// root.render()rendering an element into dom
root.render(parent)
root1.render(parent)

