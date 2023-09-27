import React, {useContext, useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import { addTodo } from '../../helpers'
import './add.css'
import { useNavigate } from 'react-router-dom'
import { ContextTodos } from '../../App'

const Add = () => {

    const {SET_TODOS: setTodos} = useContext(ContextTodos)
    const navigate = useNavigate()

    const [input, setInput] = useState({
        userId: 1,
        title: '',
        body: ''
    })
    
    function handleInputForm(params) {
        setInput({...input, [params.target.name]: params.target.value })
    }
  

    function handleSubmit(params) {
        params.preventDefault()
        addTodo({
            url: `https://jsonplaceholder.typicode.com/posts`,
            payload: input
        })
        .then((data) => {
            setTodos((prevTodos)=>{
                return [...prevTodos, {id: data.id, ...data.payload}]
            });
            navigate('/')
        })
        .catch((error) => {
            console.log('ada error');
        })
    }


  return (    
    <>
        <div className='add-utama'>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='content'>
                <Header/>
                <div className='content-utama'>
                    <h3>Add</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" onChange={(e) => handleInputForm(e)}/>
                        </div>
                        <div>
                            <label htmlFor="body">Body</label>
                            <input type="text" id="body" name="body" onChange={(e) => handleInputForm(e)}/>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Add