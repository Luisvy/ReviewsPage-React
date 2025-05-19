import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

export const Testimonial = (props) => {
    const title = props.title;
    const author = props.author;
    const date = props.date;
    const stars = props.stars;
    const content = props.content;

	return (
		<div className="card">
        <h2> {title} </h2>
        <h5> Submitted by {author} on {date} </h5> 
        <h5> {stars} / 5 Stars </h5> 
        <p>{content}</p> 
        </div>
	);
}

export const App=()=> {
 return (<div>
    <Testimonial title="Gran Lugar" className="card" author="Ely D." date="11/10/20" stars={4} content="Buena comida, ambiente, sonido y más. Volveré" />
    <Testimonial title="Loved the Apps!" className="card" author="Kim Z." date="10/15/20" stars={3} content="The appetizers were fantastic, but the overall menu could be expanded." />
    <Testimonial title="Me encantó!" className="card" author="Luis Avilés"
    date="25/01/2025" stars={5} content="Una locura de lugar" />
</div>)
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);