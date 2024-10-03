/** @jsx createVNode */
import { Header } from "../components/templates/Header";
import { Navigation } from "../components/templates/Navigation";
import { Footer } from '../components/templates/Footer';
import { createVNode } from "../lib";
import { globalStore } from "../stores";
import { Post } from '../components/posts/Post';
import { PostForm } from "../components/posts/PostForm";

export const HomePage = () => {
  const { loggedIn, posts } = globalStore.getState();

  return (
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <Header/>
        <Navigation/>
      
        <main class="p-4">
          <div id="posts-container" class="space-y-4">
            {posts.map((post) => <Post id={post.id} time={post.time} content={post.content} author={post.author} />)}
          </div>
        </main>
      
        <Footer/>
      </div>
    </div>
  );
};
