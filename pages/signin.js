import React from "react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  return (
    <>
     
      <section id="logon">
    <div className="contain">
      <div className="log_blk">
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <div className="text">
            <h3>Sign in to your account</h3>
            <p>Enter your login details below</p>
          </div>
          <div className="row form_row">
            <div className="col-sm-12">
              <div className="form_blk">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
             {errors.email && <span style={{ color:"red"}}>{errors.email.message}</span>}

              </div>
            </div>
            <div className="col-sm-12">
              <div className="form_blk">
                <input
                  type="password"
                  name=""
                  id=""
                  className="input"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  
                />

{errors.password && <span style={{ color:"red"}}>{errors.password.message}</span>}

              </div>
            </div>
            <div className="col-sm-12">
              <div className="form_blk d-flex justify-content-between flex-wrap">
                <div className="lbl_btn">
                  <input type="checkbox" name="remember" id="remember"  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="forgot" className="forgot">
                  Forgot your password ?
                </a>
              </div>
            </div>
          </div>
          <div className="btn_blk mt-5">
            <button type="submit" className="site_btn w-100">
              Sign in
            </button>
          </div>
          <div className="have_account">
            Don't have an account? <a href="signup">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* logon */}

</>

     
  );
}
