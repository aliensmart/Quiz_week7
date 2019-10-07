import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/NumberButton';
import Blog from './components/Homepage'

function App() {
  
  const [blogs, setBlog] = useState({blogs:[
    {
      title:'Blog title1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      title:'Blog title2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      title:'Blog title2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]});
  const [showBlog, setShowBlog]= useState(true)
  const [showNumbers, setShowNumbers] = useState(false)

    //toggle the components
  const toggleComponents = ()=>{
    setShowBlog(!showBlog);
    setShowNumbers(!showNumbers)
  }

  const showNumber= {
    if(showNumbers){
      for(let i=0; i<19; i++){
        return <Number
        num = {i}/>
      }
  }

}

  const showBlogs= {
    if(showBlog){
     const  blogPost = (
        <div>
          {blogs.map((blog, id)=>{
            return <Blog
            title = {blog.title}
            des = {blog.description}/>
          })}
        </div>
      )
    }
  }
  return(
    <div>
      <input type='button' value='toggle components' onClick={event=>{
        toggleComponents();
        event.preventDefault();
      }}/>
      {showNumber}
      {showBlogs}
    </div>
  )
}

export default App;
