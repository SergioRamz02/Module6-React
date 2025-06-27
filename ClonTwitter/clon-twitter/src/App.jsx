import { useState } from 'react'
import './App.css'
import MainContaint from './Components/MainContaint'
import PostForm from './Components/PostForm'
import PostContainer from './Components/PostContainer'
import PostItems from './Components/PostItems'

function App() {
  
  const [posts, setPosts] = useState([]);

  return (
    <>
      <MainContaint>
        <PostForm posts={posts} setPosts={setPosts}/>
        <PostContainer>
          {posts.map((post, index) => {
            return <PostItems username={post.username} postText={post.postText} isLiked={post.isLiked} index={index} key={key} posts={post} setPosts={setPosts} />
          })}
        </PostContainer>

      </MainContaint>
        
  
    </>
  )
}

export default App
