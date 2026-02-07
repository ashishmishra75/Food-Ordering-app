const heading = React.createElement("h1", { id: "heading" }, "hello world");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
