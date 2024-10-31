import styles from "./login.module.css";
import loginImage from "../../assets/login_nest.jpg";
import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
export const LoginAndSignup = () => {
  const [showLoginFields, setShowLoginFields] = useState(true);

  return (
    <div className="container">
      <div className={`row ${styles.loginPage}`}>
        <div className={`col-8 ${styles.loginPageImg}`}>
          <span className={`${styles.projName} shadow`}>Thoughts Nest</span>
          <div className={styles.loginImgContainer}>
            <img src={loginImage} alt="login" />
          </div>
        </div>
        <div className="col-4">
          {showLoginFields ? (
            <Login showSignUpForm={() => setShowLoginFields(false)} />
          ) : (
            <Signup showLoginForm={() => setShowLoginFields(true)} />
          )}
        </div>
      </div>
    </div>
  );
};
