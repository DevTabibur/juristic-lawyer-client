import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import AuthVSAuthentication from "../../Assets/Images/authorization vs authentication.png";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog-db.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>Blog</h2>
            <p>Gregor then turned to look out the window at the weather</p>
          </Row>
        </Container>
      </div>

      <div className="blog-page py-5">
        <Container>
          <Row className="g-4">
            {blogs.map((blog) => (
              <ShowBlog key={blog.id} blog={blog} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

const ShowBlog = ({ blog }) => {
  console.log("blog", blog);
  return (
    <>
      <Col>
        <div className="blog-image">
          <img src={blog.image} alt="AuthVSAuthentication" />
        </div>
        <div className="blog-questions m-auto">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      </Col>
    </>
  );
};

export default Blog;
