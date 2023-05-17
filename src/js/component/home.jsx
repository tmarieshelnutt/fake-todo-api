import React, { useCallback } from "react";
import { useState } from "react";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);


	return (
		<div className="container">
			<h1>My Todos Today</h1>
			<ul>
				<li>
					<input type="text" onChange ={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDownCapture={(e) => {
						if (e.key == "Enter") {
							setTodos(todos.concat(inputValue));
						}
					}}
					placeholder="What you need todo?!"></input>
				</li>
				{todos.map((item, index) => (
				<li>
					{item}<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span></button>
				</li>
	))}
				
			</ul>
			<li>22 Problems and this list aint some...</li>
		</div>
	);
};

export default Home;
