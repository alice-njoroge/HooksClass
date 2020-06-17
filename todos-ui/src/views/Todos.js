import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Todos() {
    const [todos, setTodos]= useState([])


    useEffect(() => {
        const loadData = async () => {
            const {data } = await axios.get('http://localhost:5000/todos')
            setTodos(data)
        }
        loadData();
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Todos
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Done</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    todos.map((todo,index) => (
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{todo.Title}</td>
                                            <td>{todo.Description}</td>
                                            <td>{todo.Done ? 'Yes' : 'No'}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todos;