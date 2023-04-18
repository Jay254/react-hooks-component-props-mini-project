import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header() {
  return (
  <header>
      <h1>{blogData.name}</h1>
  </header>) 

}

function About() {
  if(blogData.image === undefined){blogData.image = "https://via.placeholder.com/215";}
  return (
    <aside>
      <img src={blogData.image} alt="blog logo"/>  
      <p>{blogData.about}</p>
    </aside>
  )
}

function ArticleList() {

  
  return (
    <main>
       {Articles}
    </main>
  )
}

const Articles = blogData.posts.map( function(post){
  if(post.date === undefined){ post.date='January 1, 1970'}
  return (
    
    <article key={post.id}>
       <h3>{post.title}</h3>
       <small>{post.date}</small>
       <p>{post.preview}</p>
    </article>
  )
})




function App() {
  blogData.image = "https://via.placeholder.com/215";
 
  
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      
      <Header />
      <About />
      <ArticleList />

    </div>
  );
}

export default App;
