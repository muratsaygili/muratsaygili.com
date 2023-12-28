import React from "react";
import ToText from "../utils/toText";
import GetFirstImgSrcFromPost from "../utils/getFirstImgSrcFromPost";

export default function Blog({ blog, profile }) {
  const haveBlogs = () => {
    if (blog.item) {
      return blog.item.map((post, index) => (
        <div
          className="p-4 m-4 rounded-lg border border-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 shadow-zinc-300 dark:shadow-zinc-600"
          key={index}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <a href={post.link} rel="noopener noreferrer" target="_blank">
                <img
                  src={GetFirstImgSrcFromPost(post.content)}
                  alt="Thumbnail Img"
                  className="h-56 w-full object-cover"
                />
              </a>
              <div className="absolute bottom-0 left-0">
                <a
                  href={profile.profileUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={profile.profileImage}
                    alt="Resim 2"
                    className="w-11 h-11 rounded-full border-2 border-white -mb-3 ml-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="text-xl text-purple-800 dark:text-gray-300 font-bold">
              <a
                href={post.link}
                className="post-title"
                rel="noreferrer"
                target="_blank"
              >
                {post.title}
              </a>
            </h4>
            <h5 className="text-gray-400 dark:text-gray-500">
              <a
                href={post.link}
                className="post-title"
                rel="noreferrer"
                target="_blank"
              >
                {post.pubDate}
              </a>
            </h5>
            <p className="card-text">
              {`${ToText(post.description.substring(0, 280))}...`} 

            </p>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="blogs">
      <h2>Blog Posts</h2>
      <div className="container-fluid grid grid-cols-2">
        {blog.isLoading ? "Loading..." : haveBlogs()}
      </div>
    </div>
  );
}
