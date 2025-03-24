import React, { useState } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify';

const Home = () => {
    const [todo, setTodo] = useState("");
    const [date, setDate] = useState("");
    const [todoList, setTodoList] = useState([]);
    const addTodo = () => {
        if (!todo || !date) {
            toast.warning('Please enter a task!')
        } else {
            setTodoList([...todoList, { text: todo, date }]);
            setTodo("");
            setDate("");
            toast.success('Task added')
        }
    }
    const deleteTodo = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index))
        toast.success('Task removed')
    };
    
    return (
        <>
            <div
                className="container d-flex justify-content-center align-items-center vh-100"
            >
                <div className="border p-4 rounded bg-light shadow w-100" style={{ maxWidth: "500px" }}>
                    <h3 className='text-center fw-bold mb-3'>Task<span style={{ color: "#FFA725", fontWeight: "bold" }}>Sphere</span></h3>
                    <div className="d-flex flex-column flex-md-row w-100 gap-2 mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter task..."
                            value={todo}
                            onChange={(e) => { setTodo(e.target.value) }}
                        />
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary w-25 mb-3 mt-2" onClick={() => { addTodo() }}>Add ToDo</button>
                    </div>
                    <ul className="list-group">
                        {
                            todoList.map((task, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{task.text}</strong>
                                        <br />
                                        <small className="text-muted">Due: {task.date}</small>
                                    </div>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default Home;