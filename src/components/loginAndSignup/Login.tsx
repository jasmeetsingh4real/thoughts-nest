import { loginDetailsSchema } from "../../zod/userSchemas";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export const Login = (props: { showSignUpForm: () => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginDetailsSchema),
  });

  const submit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.loginFieldsCont}>
      <div className={styles.signUpBtn}>
        <span className="text-secondary small">Don't have an account?</span>
        <button
          className="btn btn-sm btn-primary"
          onClick={props.showSignUpForm}
        >
          Signup
        </button>
      </div>
      <div className={styles.loginFields}>
        <h3>
          <span className="text-secondary small">Sign in to your </span>
          <span className="text-primary">Thoughts</span>
        </h3>
        <p className="small text-secondary">
          Welcome to thoughts nest, please enter your login details.
        </p>
        <form onSubmit={handleSubmit(submit)} className="w-100">
          <input
            {...register("userName")}
            name="userName"
            type="text"
            placeholder="User Name"
            className="form-control  "
          />
          {errors["userName"] &&
          typeof errors["userName"].message === "string" ? (
            <p className="small ms-2 text-start text-danger m-0 p-0">
              {errors["userName"].message}
            </p>
          ) : (
            <p className="small ms-2 text-start text-white m-0 p-0"> .</p>
          )}

          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Password"
            className="form-control mt-1"
          />
          {errors["password"] &&
          typeof errors["password"].message === "string" ? (
            <p className="small ms-2 text-start text-danger m-0 p-0">
              {errors["password"].message}
            </p>
          ) : (
            <p className="small ms-2 text-white text-danger m-0 p-0"> .</p>
          )}
          <p className="mt-1">
            <b className="text-primary" role="button">
              Forgot the password?
            </b>
          </p>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
