import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Todos (){

    const [todos, setTodos] = useState([]);

    useEffect( ()=>{
        const fetchData = async ()=>{
            const results = await axios.get('http://localhost:5000/todos');
            setTodos(results.data);
        }
        fetchData();
    }, []);


    return (
        <div className='todo-class'>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="card">
                        <div className="card-header">
                            Todos
                            <button className="button btn btn-outline-primary float-right"> Create New</button>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Done?</th>
                                </tr>
                                </thead>
                                <tbody>
                                {todos.map((todo, index) =>{
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{todo.Title}</td>
                                            <td>{todo.Description}</td>
                                            <td>{todo.Done? 'Yes' : 'No' }</td>

                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}