import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { IconTableLink } from "../../assets";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const LoginPage = () => {
  const navigate = useNavigate();
  const [jawaban, setJawaban] = useState("");

  const choosePage3 = () => {
    navigate("/page3");
  };

  const handleSubmit = () => {
    if (jawaban.includes("berita")) {
      alert("Selamat Anda Mendapatkan TWS BUD 5"); // Menggunakan alert bawaan JavaScript
    } else {
      alert("Jwaban anda Salah, Anda Harus Minum 3 Sloki");
    }
  };

  return (
    <div className={styles.pages}>
      <Row className={styles.rowHeader}>
        <Col xs={2}>
          <Image src={IconTableLink} className={styles.imgMenu} />
        </Col>
        <Col xs={8}>
          <p className={styles.textWallet}>Tablelink</p>
        </Col>
      </Row>
      <Container className={styles.containerHeader}>
        <Row style={{ marginTop: "26px" }}>
          <h5 className={styles.textWalletH5}>Selesaikan Teka Teki Ini!</h5>
        </Row>
        <Row style={{ marginTop: "16px" }}>
          <h5 className={styles.textWalletp}>
            Pesawat jatuh, kapal tenggelam. Ketemunya di mana?
          </h5>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              onChange={(e) => setJawaban(e.target.value)}
            />
          </InputGroup>
        </Row>
        <Button
          variant="success"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;
