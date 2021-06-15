import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import { Link } from "react-router-dom";
import { userLoginAction } from "../redux/actions/userActions";
import { Spinner } from "react-bootstrap";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userLoginAction(email, password));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | User Login Page`;
  });

  return (
    <div className="custom-container">
      <div className="login-form-wrapper">
        <div className="title">Login</div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="loginEmail">Email Address*</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="email"
            name="email"
            id="loginEmail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading ? true : false}
            required
          />

          <label htmlFor="loginPassword">Password*</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="password"
            name="password"
            id="loginPassword"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading ? true : false}
            required
          />

          <button
            type="submit"
            className="cutom-button"
            style={{ cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "login"
            )}
          </button>

          <div className="not-have-already-account">
            Don't have account?,
            <Link to="/user/signup">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
