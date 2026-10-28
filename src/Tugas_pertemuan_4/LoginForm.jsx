import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Event handler submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Bonus: validasi username kosong
    if (username.trim() === "") {
      setErrorMsg("Username tidak boleh kosong");
      return;
    }

    setErrorMsg("");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Conditional rendering: tampil hanya jika errorMsg ada isinya */}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm