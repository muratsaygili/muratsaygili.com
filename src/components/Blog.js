import React from "react";
import ToText from "../utils/toText";

export default function Blog({ blog, profile }) {
  const haveBlogs = () => {
    if (blog.item) {
      return blog.item.map((post, index) => (
        <div className="p-4 m-4 rounded-lg border border-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 shadow-zinc-300 dark:shadow-zinc-600" key={index}>
            <div className="card-image to-black w-24 h-24" style={{backgroundImage:`url(${post.thumbnail})`}}>
                <div className="authorImage">
                    <a href={profile.profileUrl} rel="noopener noreferrer" target="_blank" style={{backgroundImage:`url(${profile.profileImage})`}}></a>
                </div>
            </div>
            <div className="card-body">
                <h4 className="text-xl text-purple-700"><a href={post.link} className="post-title" rel="noreferrer" target="_blank">{post.title}</a></h4>
                <h5 className="text-sky-600"><a href={post.link} className="post-title" rel="noreferrer" target="_blank">{post.pubDate}</a></h5>
                <p className="card-text">{`${ToText(post.description.substring(0,300))}...`}</p>
            </div>
        </div>
      ));
    }
  };
  return (
    <div className="blogs">
      <h2>Blog Posts</h2>
      <div className="container-fluid">
        {blog.isLoading ? "Loading..." : haveBlogs()}
      </div>
    </div>
  );
}
