import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { userRegisterAction } from "../redux/actions/userActions";

const UserSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordFail, setIsPasswordFail] = useState(false);

  const { loading, error } = useSelector(state => state.userLogin);
  const dispatch = useDispatch();

  const handleUserRegister = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      setIsPasswordFail(true);
      return;
    } else if (password.length < 8 || confirmPassword.length < 8) {
      setIsPasswordFail(true);
      alert("Passwords must be above 8 character");
      return;
    }

    dispatch(userRegisterAction(fullName, email, password));
  };
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | User Sign Up Page`;
  }, []);

  return (
    <div className="custom-container">
      <div className="signup-form-wrapper">
        {error && (
          <div
            className="alert alert-danger "
            style={{ marginTop: 100 }}
            role="alert"
          >
            {error}
          </div>
        )}
        <div className="title">Create New Account</div>

        <form autoComplete="off" onSubmit={handleUserRegister}>
          <label htmlFor="signupFullName">Full Name</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="text"
            name="fullname"
            id="signupFullName"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            disabled={loading ? true : false}
            required
          />

          <label htmlFor="signupEmail">Email Address</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="email"
            name="email"
            id="signupEmail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading ? true : false}
            required
          />

          <label htmlFor="signupPassword">Password</label>
          <input
            style={{
              border: `1px solid ${!isPasswordFail ? "#d0d0d0" : "red"}`,
            }}
            type="password"
            name="password"
            id="signupPassword"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading ? true : false}
            required
          />

          <label htmlFor="signupConfirmPassword">Confirm Password</label>
          <input
            style={{
              border: `1px solid ${!isPasswordFail ? "#d0d0d0" : "red"}`,
            }}
            type="password"
            name="confirmPassword"
            id="signupConfirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            disabled={loading ? true : false}
            required
          />

          <button
            type="submit"
            className="custom-button"
            style={{ cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Register"
            )}
          </button>

          <div className="have-already-account">
            Have account?,
            <Link to="/user/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
