/** @format */

import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const WhoAreYou: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <section className="bR-center-text">
        <Container>
          <Row>
            <Col xs={12} className="mx-auto">
              <span className="coming-soon-text">Coming soon...</span>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={6} className="bR-right-text mx-auto bR-padding-top-bottom">
              <a href="mailto:hr@bitrocket.dev">
                <button className="bR-button">I'm a Developer</button>
              </a>
            </Col>
            <Col xs={6} className="bR-left-text mx-auto bR-padding-top-bottom">
              <a href="mailto:hr@bitrocket.dev">
                <button className="bR-button">I'm a Company</button>
              </a>
            </Col>
          </Row> */}
        </Container>
      </section>
    </Fragment>
  );
};
