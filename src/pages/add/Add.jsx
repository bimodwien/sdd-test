import React, {useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import { addData } from '../../helpers'
import './add.css'

const Add = () => {

    const [input, setInput] = useState({
        id: 1,
        title: '',
        body: ''
    })
    
    function handleInputForm(params) {
        setInput({...input, [params.target.name]: params.target.value })
    }
    const addingData = addData({
        url: `https://jsonplaceholder.typicode.com/posts`,
        payload: input
    })

    function handleSubmit(params) {
        params.preventDefault()
        // addingData
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