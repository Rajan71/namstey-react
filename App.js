import React from 'react'
import ReactDOM from 'react-dom/client'

/*
<div id="parent">
<div id="child">
<h1>I am h1 Tag</h1>
<h1>I am h2 Tag</h1>
</div>
</div>

*/
// now going to create a nested html structure using React
const parents = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag")]    // if we have to add siblings like h1 nd h2 tags are at same level we have to add them in array
))

//This below is JSX not html it is html -like or XML -like
//JSX ==> Babel (sub lib of PArcel) transpile/convert it to React.createElement(Object) ==> then render as HTML Element
const jsxHeading = <h1>Namstey React</h1>
console.log(jsxHeading)


const heading = React.createElement("h1", {
    id: "heading"                                   // in this object attributes are passed.
}, "Hello World From Namstey React")
console.log(parents)   // this will give u the object with props
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parents)  // this will convert object(heading/parents) to h1 tag and render it



// ReactElement is always a object while its rendurnig into a dom it converts itself into html.