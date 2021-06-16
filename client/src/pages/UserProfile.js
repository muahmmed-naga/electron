import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
// import actionTypes from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/types";
import {
  userDetailsAction,
  userUpdateProfileAction,
} from "./../redux/actions/userActions";

const UserProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line
  const [isPasswordFail, setIsPasswordFail] = useState(false);

  const { user, error } = useSelector(state => state.userDetails);
  const {
    loading,
    error: updateError,
    success,
  } = useSelector(state => state.userUpdate);

  const dispatch = useDispatch();

  const handleUserUpdateProfile = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      setIsPasswordFail(true);
      return;
    } else if (password.length < 8 || confirmPassword.length < 8) {
      setIsPasswordFail(true);
      alert("Passwords must be above 8 character");
      return;
    } else {
      dispatch(
        userUpdateProfileAction({
          id: user._id,
          name,
          email,
          password,
        })
      );
    }
  };

  useEffect(() => {
    if (!user.name) {
      dispatch(userDetailsAction("profile"));
    } else {
      setName(user?.name);
      setEmail(user?.email);
    }
  }, [user, dispatch]);

  return (
    <div className="custom-container" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-wrapper">
            {error && <h2>{error}</h2>}
            {updateError && (
              <div class="alert alert-danger" role="alert">
                {updateError}
              </div>
            )}
            {success && (
              <div class="alert alert-success" role="alert">
                Profile updated successfully.
              </div>
            )}

            <div className="title">Update Your Info</div>

            <form autoComplete="off" onSubmit={handleUserUpdateProfile}>
              <label htmlFor="name">Name*</label>
              <input
                style={{
                  border: `1px solid #d0d0d0`,
                }}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <label htmlFor="email">Email Address*</label>
              <input
                style={{
                  border: `1px solid #d0d0d0`,
                }}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password*</label>
              <input
                style={{
                  border: `1px solid ${!isPasswordFail ? "#d0d0d0" : "red"}`,
                }}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <label htmlFor="confirmPassword">Confirm Password*</label>
              <input
                style={{
                  border: `1px solid ${!isPasswordFail ? "#d0d0d0" : "red"}`,
                }}
                type="password"
                name="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />

              <button
                type="submit"
                className="custom-button"
                disabled={loading ? true : false}
                style={{
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? (
                  <Spinner animation="border" variant="secondary" />
                ) : (
                  "Update"
                )}
              </button>

              <button
                type="submit"
                className="logout-button"
                onClick={() =>
                  dispatch({
                    type: actionTypes.USER_LOGOUT,
                  })
                }
              >
                LOGOUT
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h2>hello</h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
