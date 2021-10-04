import React, { useState } from "react";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript - bu web skript tili hisoblanadi."
    },
    {
      id: 2,
      title: "PHP",
      body: "PHP - bu web skript tili hisoblanadi."
    },
    {
      id: 3,
      title: "Python",
      body: "Python - bu web skript tili hisoblanadi."
    }
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Maqola nomi"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Maqola matni"
        />
        <MyButton onClick={addNewPost}>Maqola yuklash</MyButton>
      </form>
      <PostList posts={posts} title="Maqolalar ro'yxati 1" />
    </div>
  );
}

export default App;
