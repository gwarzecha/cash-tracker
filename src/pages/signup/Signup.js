import { useState } from "react";

// styles
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, display)
  }

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplay(e.target.value)}
          value={display}
        />
      </label>
      <button className="btn">Submit</button>
    </form>
  );
}
