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

  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await fetch('/api/prompt')
      const parsedData = await response.json();
      setPosts(parsedData)

    }
    fetchPosts();
  },[])
  const handleSearchChange = (e)=>{
    setSearchText(e.target.value);
  }
  return (
    <section className='feed'>
      <form action="" className="relative w-full flex-center">
        <input type="text" placeholder='Search for your tag or a username' value={searchText} onChange={handleSearchChange} required className='search_input w-full peer' />
      </form>
      <PromptCardList
      data={posts}
      handleTagClick= {()=>{}}
      />
    </section>
  )
}

export default Feed
