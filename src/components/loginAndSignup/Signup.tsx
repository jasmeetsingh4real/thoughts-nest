import styles from "./login.module.css";
export const Signup = (props: { showLoginForm: () => void }) => {
  return (
    <div className={styles.loginFieldsCont}>
      <div className={styles.signUpBtn}>
        <span className="text-secondary small">Already have an account?</span>
        <button
          className="btn btn-sm btn-primary"
          onClick={props.showLoginForm}
        >
          Login
        </button>
      </div>
      <div className={styles.loginFields}>
        <h3>
          <span className="text-secondary small">Sign up to </span>
          <span className="text-primary">Thoughts Nest</span>
        </h3>
        <p className="small text-secondary">
          Create an account to access your thoughts, save your ideas, and share
          them with others.
        </p>
        <input
          type="text"
          placeholder="First Name"
          className="form-control mb-3"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form-control mb-3"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="form-control mb-3"
        />
        <input
          type="text"
          placeholder="Password"
          className="form-control mb-3"
        />

        <button className="btn btn-primary w-100">Create Account</button>
      </div>
    </div>
  );
};
