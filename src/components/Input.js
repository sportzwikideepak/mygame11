import React from "react";
import styles from "./Input.module.css";

const Input = ({ icon: Icon, type, placeholder, onChange, phone }) => {
  return (
    <>
      <div className={styles.inputContainer}>
        {/* <CiMail size={22} /> */}
        {Icon && <Icon size={22} />}
        <input
          className={styles.inputBox}
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={phone}
        />
      </div>
    </>
  );
};

export default Input;
