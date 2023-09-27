import React, {useContext, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import { editData } from '../../helpers'
import './edit.css'
import { ContextTodos } from "../../App";

const Edit = () => {

    const {todos, SET_TODOS: editTodos} = useContext(ContextTodos)
    const [input, setInput] = useState({
        title: '',
        body: ''
    })

    const navigate = useNavigate()
    const editedId = useParams()

    function handleInputForm(params) {
        setInput({...input, [params.target.name]: params.target.value })
    }

    function handleSubmit(params) {
        params.preventDefault()
        editData({
            url: `https://jsonplaceholder.typicode.com/posts/${editedId.id}`,
            payload: input
        })
        .then((data) => {
            editTodos(todos.map((item) => {
                if(item.id === data.id) {
                    return {
                        ...item, ...data.payload
                    }
                }
                return item 
            }))
        })
        navigate('/')
    }

    return (
        <>
            <div className="edit-utama">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content">
                    <Header />
                    <div className="content-utama">
                        <h3>Edit</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" onChange={(e) => handleInputForm(e)} />
                        </div>
                        <div>
                            <label htmlFor="body">Body</label>
                            <input type="text" id="body" name="body" onChange={(e) => handleInputForm(e)} />
                        </div>
                        <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
