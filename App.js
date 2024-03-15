const heading = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", { id: "heading" }, "head-1"),
		React.createElement("h1", { id: "heading2" }, "head-2"),
	]),
	React.createElement("div", { id: "child-2" }, [
		React.createElement("h1", { id: "heading3" }, "head-3"),
		React.createElement("h1", { id: "heading4" }, "head-4"),
	]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
