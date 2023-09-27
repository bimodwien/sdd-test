import React, { useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import './landing.css'
import { deletingData, useFetch } from '../../helpers'
import { ContextTodos } from '../../App'
import { useNavigate } from 'react-router-dom'


const Landing = () => {

  const {todos: dataTodos, SET_TODOS: setDataTodos} = useContext(ContextTodos)
  const navigate = useNavigate()

  function displayData(item) {
      setDataTodos(item)
  }
  
    useFetch({
      url: `https://jsonplaceholder.typicode.com/posts`,
      defaultData: [],
      fetchWhen: () => !dataTodos.length > 0
    }, displayData, [])
  

  function handleEdit(id) {
    navigate(`/edit/${id}`)
  }


  function handleDelete(id) {
    deletingData({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      id: id
    }, (id) => {
      const updatedData = dataTodos.filter((todo) => {
        return todo.id !== id
      })
      setDataTodos(updatedData);
    })
    
  }


  return (
    <>
    <div className='landing-utama'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='content'>
        <Header/>
        <div className='content-utama'>
          <h3>Todos</h3>
          <div>
            {dataTodos?.map((data) => {
              return (
                <div key={data.id}>
                  <div><b>Title</b>: {data.title}</div>
                  <div><b>Body</b>: {data.body}</div>
                  <button onClick={() => handleEdit(data.id)} >edit</button>
                  <button onClick={() => handleDelete(data.id)}>delete</button>
                  <br />
                  <br />
                </div>
              )
            })}
          </div>
        </div>

      </div>

    </div>
    
    </>
  )
}

export default Landing