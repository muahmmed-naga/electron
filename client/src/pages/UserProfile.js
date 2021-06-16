import { useState, useEffect } from "react";
// import actionTypes from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { userDetailsAction } from "./../redux/actions/userActions";

const UserProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line
  const [isPasswordFail, setIsPasswordFail] = useState(false);

  const { user, error } = useSelector(state => state.userDetails);

  const dispatch = useDispatch();

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

            <div className="title">Update Your Info</div>

            <form autoComplete="off" onSubmit={() => {}}>
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

              <button type="submit" className="custom-button">
                UPDATE
              </button>

              <button
                type="submit"
                className="logout-button"
                onClick={() => {}}
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
