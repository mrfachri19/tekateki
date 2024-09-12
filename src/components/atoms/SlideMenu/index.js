import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  IconBank,
  IconDeposit,
  IconExchange,
  IconReferral,
  IconProfile,
  IconSignOut,
  IconWithdraw,
  IconWalletNonActive,
  IconWithdrawHome,
} from "../../../assets";
import { clearStorages } from "../../../storage";
import styles from "./styles.module.css";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SlideMenu = (props) => {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(true);
  let location = useLocation();
  const navigate = useNavigate();
  const logout = async () => {
    AsyncStorage.clear("token");
    clearStorages();
    navigate("/login");
  };

  return (
    <Menu isOpen={!open} className={styles.positionMenu}>
      {/* <Image src={IconProfile} width={45} height={45} />
      <p className={styles.textName}>{user.username}</p>
      <p className={styles.textMember}>Member #1378</p>
      <p className={styles.textView}>View Profile</p>
      <p className={styles.textTitle}>Transactions</p>

      <p
        className={styles.menuNonActive}
        style={{ cursor: "pointer" }}
        onClick={logout}
      >
        <Image src={IconSignOut} className={styles.iconMenu} />
        SignOut
      </p> */}
    </Menu>
  );
};

export default SlideMenu;
