import React from "react";
import "./Blogpage.css"; // Use a single CSS file for simplicity

// Import assets
import equipment from "./Assets/equip.jpeg";
import shelter from "./Assets/shelter.jpg";
import location from "./Assets/location.jpg";
import news from "./Assets/news.jpg";
import frame from "./Assets/Frame.svg";
import mount from "./Assets/mount.jpg";
import climb from "./Assets/climb.jpg";

// Data for Categories
const categories = [
  { image: equipment, label: "Equipment" },
  { image: shelter, label: "Shelter" },
  { image: location, label: "Location" },
  { image: news, label: "news" },
];

// Data for Blogs
const blogs = [
  {
    date: "16 August",
    title: "Adventures Across Continents: Journeys of a Lifetime",
    author: "By Bianca Fontana",
    description: "Tales of extraordinary travels and the world's most breathtaking destinations.",
    image: frame,
  },
  {
    date: "15 August",
    title: "Wellness Wonders: Holistic Approaches to Health and Happiness",
    author: "By Andreas Baier",
    description: "Tales of extraordinary travels and the world's most breathtaking destinations.",
    image: climb,
  },
  {
    date: "09 August",
    title: "Book Adventures: Exploring Worlds One Page at a Time",
    author: "By Patrick Pabst",
    description: "Tales of extraordinary travels and the world's most breathtaking destinations.",
    image: mount,
  },
];

// Main Component
const BlogPage = () => {
  return (
    <div className="blog-page">
      {/* Header Section */}
      <header className="head">
        <h1>Embark on Life's Greatest Travel Adventures Today</h1>
      </header>

      {/* Categories Section */}
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div className="image-container">
              <img
                src={category.image}
                alt={category.label}
                className="category-image"
              // style={category.label === "Equipment" ? { width: "112%", marginLeft: "-8%" } : {}}
              />
              <button className="equipment-button">
                {category.label} &#8594;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            {/* Date */}
            <div className="blog-date">
              <span className="number">{blog.date.split(" ")[0]}</span>
              <span className="text">{blog.date.split(" ")[1]}</span>
            </div>

            {/* Image */}
            <img src={blog.image} alt={blog.title} className="blog-image" />

            {/* Text */}
            <div className="blog-text">
              <h3>{blog.title}</h3>
              <p>
                <strong>{blog.author}</strong> | {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;