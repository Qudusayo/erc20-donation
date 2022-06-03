import console from "console-browserify";
import { useState } from "react";
import styles from "./Form.module.scss";

function Form() {
  const [amount, setAmount] = useState("");

  const setAmountHandler = (e) => setAmount(e.target.value);

  const donationSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(amount);
  };

  return (
    <form className={styles.Form} onSubmit={donationSubmissionHandler}>
      <input
        type="number"
        value={amount}
        onChange={setAmountHandler}
        placeholder={"Amount to donate"}
      />
      <input type="submit" value="approve" />
    </form>
  );
}

export default Form;
