
const parent = React.createElement("div" , {Id: "parent"} ,React.createElement("div" , {id:"child"}, [
    React.createElement("h1" , {}, "this is the heading one") , 
    React.createElement("h1" , {}, "this is the heading one")
]
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);