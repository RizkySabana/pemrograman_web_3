import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Event handler submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validasi username kosong
    if (username.trim() === "") {
      setErrorMsg("Username tidak boleh kosong");
      return;
    }
    if (password.trim() === "") {
      setErrorMsg("Password tidak boleh kosong");
      return;
    }

    setErrorMsg("");
    setIsLoading(true);

    console.log("Username:", username);
    console.log("Password:", password);

    // simulasi hit API (3 detik)
    setTimeout(function () {
      setIsLoading(false);
      alert(`Login berhasil, selamat datang ${username}`);
    }, 3000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Conditional rendering: pesan error */}
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

        {/* Conditional rendering: tampil saat loading */}
        {isLoading && <p className="loading-msg">Loading ...</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Memproses..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;