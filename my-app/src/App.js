import React, {useState} from 'react'
import '../src/styles/app.css'
import PostItem from './components/PostItem';
function App() {
  const [posts, setPoints] = useState([
    {id : 1, title : 'JS', body: 'Description'},
    {id : 2, title : 'JS-2', body: 'Description'},
    {id : 3, title : 'JS-3', body: 'Description'},
    {id : 4, title : 'JS-4', body: 'Description'},
    {id : 5, title : 'JS-5', body: 'Description'},
  ]
  )
  return (
    <div className="App">
      <h1 style = {{textAlign: 'center'}}>Список постов</h1>
      {posts.map(post=> <PostItem post={post} key = {post.id}/>)}
    </div>
  );
}

export default App;
