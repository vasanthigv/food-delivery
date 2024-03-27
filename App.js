

const parent = React.createElement("div",{id:'parent'},
React.createElement("div",{id:'child'},
[React.createElement("h1",{id:'heading'},"i'm h1 tag"),React.createElement("h2",{id:'heading2'},"i'm h2 tag")]
)
);


// const heading = React.createElement('h1',{
//     id:'heading',
//     'data-test':'testing'
// },'Hello from react')
        
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('rootTest'))

root.render(parent)