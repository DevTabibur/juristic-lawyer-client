import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import AuthVSAuthentication from "../../Assets/Images/authorization vs authentication.png";

const Blog = () => {
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
        <Row>
          <Col md={6} sm={12}>
            <div className="blog-image">
              <img src={AuthVSAuthentication} alt="AuthVSAuthentication" />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="blog-questions m-auto">
              <h2>Authorization VS Authentication</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus deleniti sapiente facere dolore, labore
                architecto explicabo maxime magni accusamus laboriosam!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Blog;
