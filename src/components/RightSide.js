import { loremIpsum } from "react-lorem-ipsum";
import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import { use } from "i18next";
export default function RightSide() {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@muratsaygili";
  const [profile, setProfile] = useState({
    name: "Murat Saygılı",
    profileImage: "",
    profileUrl: "",
  });
  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        const image = data.feed.image;
        const link = data.feed.link;
        const blogs = data.items;
        const posts = blogs.filter((item) => item.categories.length > 0);

        setProfile({ ...profile, profileImage: image, profileUrl: link });
        setBlog({ ...blog, item: posts, isLoading: false });
      })
      .catch((err) => setBlog({ ...blog, error: err.message }));
  }, []);
  return (
    <div className="text-wrapper">
      <Blog blog={blog} profile={profile} />
      
    </div>
  );
}
