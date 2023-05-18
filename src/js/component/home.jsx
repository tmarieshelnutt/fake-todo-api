import React, { useCallback } from "react";
import { useState } from "react";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    // const addTodo = (todo) => {
    //     const newTodo = {
    //         id: Math.random(),
    //         todo:todo,
    //     }
    // };
    // const deletetodos = (id) => {
    //     const newList = list.filter((todo) => todo.id !== id);
	// 	setList(newList);
    // };
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
							setInputValue("");
						}
                    }}
                    placeholder="What you need todo?!"></input>
                </li>

                {todos.map((item, index) => (
                <li>
					
                    {item}{" "}<button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}>&times;</span></button>
					
                </li>
    ))}
        
            
            </ul>
            
			<li>22 Problems and this list aint some...</li>
        </div>
    );
};

export default Home;

