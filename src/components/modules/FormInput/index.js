import React from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";
import { Required } from "../../atoms";

const FormInput = (props) => {
  return (
    <>
      <Form.Group>
        <Form.Label className={styles.labelForm}>
          {props.label} <Required />
        </Form.Label>
        <Form.Control
          className={styles.formControl}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      </Form.Group>
    </>
  );
};

export default FormInput;
