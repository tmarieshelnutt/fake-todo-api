import React, { useCallback } from "react";
import { useState, useEffect } from "react";


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Todo = () => {
    const [inputValue, setInputValue] = useState({});
    const [todos, setTodos] = useState([]);
    
    useEffect(()=> {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/tmarieshelnutt')
        .then((res) => {
            return res.json()
        })
        .then((data) => {setTodos(data);
        
    })
},[])


    useEffect(() => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/tmarieshelnutt',{
            method:'PUT',
            body: JSON.stringify(todos),
            headers:{"Content-type":"application/json"},
            
    })
        .then(res => {
            return res.json()
        })
        .catch((error) => {
            console.log(error)
        })
    }, [todos]);

    const addTodo = () => {
        setTodos([...todos, inputValue])
    }

    const inputChange = (e) => {
        setInputValue({label:e.target.value,done:false})
    }

    const removeTodo = (index) => {
        setTodos((todo) => {
            return todo.filter((item,i) => i !==index)
        })
    }
    return (
        <div className="container">
            <div>
                <input onChange={inputChange} type="text" placeholder="add today's todos.."/>
                <button onClick={addTodo}>Click Here</button>
            </div>
            <h1>Todays TODOS!</h1>
            {todos.length ? todos.map((item,index) => {
                return (
                    <h6>{item.label}
                    <button onClick={() => removeTodo(index)}>X</button></h6>
                )
            }): null}
        </div>
    );
};

export default Todo;

//  from "react";