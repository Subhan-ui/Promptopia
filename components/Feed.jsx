'use client'

import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'


import React from 'react'

function PromptCardList({data, handleTagClick}) {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map(post=>(
        <PromptCard key={post._id} handleTagClick = {handleTagClick} post={post}/>
      ))}
    </div>
  )
}


function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () =>{
    const response = await fetch('/api/prompt')
    const parsedData = await response.json();
    setPosts(parsedData)

  }
  useEffect(()=>{
    fetchPosts();
  },[])
  const handleSearchChange = async (e) => {
    const text = e.target.value; 
  
    setSearchText(text); 

    if(text.trim()!==''){
    const newPost = posts.filter(post=>post.tag.toLowerCase().startsWith(text.toLowerCase()))
    console.log(newPost)
    setPosts(newPost);
    }else{
      fetchPosts();
    }
  };
  
  return (
    <section className='feed'>
      <form action="" className="relative w-full flex-center">
        <input type="text" placeholder='Search for your tag' value={searchText} onChange={handleSearchChange} required className='search_input w-full peer' />
      </form>
      <PromptCardList
      data={posts}
      handleTagClick= {()=>{}}
      />
    </section>
  )
}

export default Feed
