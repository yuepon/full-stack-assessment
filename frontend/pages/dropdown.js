
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs'
import React from 'react'
import './Format.module.css'
import Looking from './looking.js'

//this 1st function toggled the button press dropdown menu
function Dropdown ({posts}) {
<Looking />
  function Qq({posts}){
    const[selected, setClicked] = useState(false)
  const toggle = i => {
    if (selected === i) {
      return setClicked(null)
    }
      setClicked(i)
  }
}
  
    

 
const style = { color: '#000000'};

  return ( 
  <IconContext.Provider value={{ color: '#00FFB9'}}> 
  <div className='wrapper'>
    <div className='accordion'>
      {/* this parses through the questions found from the STRAPI server and puts the contents into the boxes*/}
      {posts.map((posts, i) => (
        <div className='item' key = {posts.id}>
          <div className='title' onClick={() => toggle(i)}>
            <h2>{posts.Title}</h2>
            <span>{selected === i ? <BsDashCircle /> : <BsPlusCircle style={style} />}</span>
          </div>
          <div className={selected === i ? 'content show' : 'content'}>{posts.answer}</div>
        </div>
      ))}
    </div>
  </div>
  </IconContext.Provider>
  )
    
      
}
    
    

export default Dropdown