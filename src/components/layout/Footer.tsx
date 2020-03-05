/** @format */

import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <footer className="bR-center-text">
        <Container>
          <Row>
            <Col className="mx-auto" xs={12}>
              <p>Copyright © 2020 bitRocket.dev </p>
              <p>All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
};
