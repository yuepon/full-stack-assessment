import React from 'react'
//this entire file is just to fetch the data from the backend
const looking = ({post}) => {
fetch('http://localhost:1337/api/questions')
    .then(response => response.json())
    const post = response.json()
    
return {
        props: { posts },
    } 
}

export default looking




