import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";
import {
  IconLogos,
  IconMaps,
  IconImages1,
  IconImages2,
  IconImages3,
  IconsWa,
  IconTableLink,
  Tgsampah,
} from "../../assets";
import { SlideMenu } from "../../components/atoms";
import { Link, useNavigate } from "react-router-dom";

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
          <Image src={IconTableLink} className={styles.imgMenu} />
        </Col>
        <Col xs={8}>
          <p className={styles.textWallet}>Tablelink</p>
        </Col>
      </Row>
      <Container className={styles.containerHeader} onClick={choosePage2}>
        <Row style={{ marginTop: "36px" }}>
          <p className={styles.textWallet2}>
            Selamat anda mendapatkan Tong Sampah{" "}
          </p>
        </Row>

        <Row className="my-2">
          <Image src={Tgsampah} />
        </Row>
        <div>
          <p className={styles.textWallet4}>
            Apakah kamu mau mau hadiah sebenarnya Klik link dibawah ini!
          </p>
          <Link to={"/page2"}>
            <span style={{ color: "#3267E3" }}>Lanjutkan {">>"}</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
