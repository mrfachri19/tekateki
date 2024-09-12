import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import { IconLogos, IconMaps, IconImages1, IconsCalendar } from "../../assets";
import { SlideMenu } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const choosePage2 = () => {
    navigate("/page2");
  };
  return (
    <div className={styles.pages}>
      {/* <Helmet title="Home" /> */}
      <Row className={styles.rowHeader}>
        <Col xs={2}>
          <Image src={IconLogos} className={styles.imgMenu} />
        </Col>
        <Col xs={8}>
          <p className={styles.textWallet}>Black Owl</p>
        </Col>
        <Col style={{ marginBottom: "20px" }}>
          <SlideMenu />
        </Col>
      </Row>
      <Container className={styles.containerHeader} onClick={choosePage2}>
        <Row style={{ marginTop: "36px" }}>
          <Col xs={9}>
            <div style={{ display: "block" }}>
              <p className={styles.textWallet2}>Booking Sumary</p>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Image src={IconImages1} />
        </Row>
        <h5 className={styles.textWalletp} style={{ marginTop: "24px" }}>
          Time
        </h5>
        <div style={{ display: "flex" }}>
          <Image
            src={IconMaps}
            style={{ width: "24px", marginRight: "16px" }}
          />

          <p className={styles.textWalletp} style={{ marginTop: "10px" }}>
            BO-Pantai Indah Kapuk
          </p>
        </div>
        
      </Container>
    </div>
  );
};

export default LoginPage;
