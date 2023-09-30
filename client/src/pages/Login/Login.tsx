import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login(email, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>

      <form>
        <div>
          <input type = "text" value = {email} placeholder = "email" 
          onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div>
          <input type = "text" value = {password} placeholder = "password" 
          onChange={(e) => setPassword(e.target.value)}></input>
        </div>
      </form>

        <div>
          <button onClick={() => attemptLogin()}>
            Login (as user set in code)
          </button>
          {message && <p>{message}</p>}
        </div>

      </div>
    </Page>
  );
}

export default Login;
