import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import './landing.css'
import { useFetch } from '../../helpers'


const Landing = () => {

  const dataFetch = useFetch({
    url: `https://jsonplaceholder.typicode.com/posts`,
    defaultData: []
  })


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
            {dataFetch.map((data) => {
              return (
                <div>
                  <div>{data.title}</div>
                  <div>{data.body}</div>
                  <button>edit</button>
                  <button>delete</button>
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