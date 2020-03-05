/** @format */

import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Header: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <header className="bR-center-text">
        <Container>
          <Row>
            <Col xs={12} className="mx-auto bR-padding-top-bottom">
              <h1 className="header-logo">
                <p>Quality code</p>
                <p>Made smart</p>
              </h1>
            </Col>
            <Col xs={12} className="mx-auto bR-padding-top-bottom">
              <h2 className="bR-presentation">
                <p>
                  <span className="bR-bold">bitRocket.dev</span> is not just an{" "}
                  <span className="bR-bold">IT Consulting company</span>
                </p>
                <p>
                  {" "}
                  with super powers on <span className="bR-bold">
                    React JS
                  </span>{" "}
                  and <span className="bR-bold">Native</span> development.
                </p>
                <p>
                  We are a team of proud nerds that believe in smart working
                </p>{" "}
                <p>and great team building events all around world.</p>
              </h2>
            </Col>
            <Col xs={12} className="mx-auto bR-padding-top-bottom">
              <a
                href="https://www.linkedin.com/company/bitrocketdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bR-padding-left-right"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/bitrocket.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bR-padding-left-right"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    </Fragment>
  );
};
