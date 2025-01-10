import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
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
                <h3>Create an account</h3>
                <p>Enter your details below</p>
              </div>
              <div className="row form_row">
                <div className="col-sm-12">
                  <div className="form_blk">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="input"
                      placeholder="Full Name"
                      {...register("fullName", { required: "Full name is required" })}
                    />
                    {errors.fullName && <span style={{ color:"red"}}>{errors.fullName.message}</span>}
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form_blk">
                    <input
                      type="email"
                      name="email"
                      id="email"
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
                      type="tel"
                      name="phone"
                      id="phone"
                      className="input"
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,12}$/,
                          message: "Phone number must be between 10 and 12 digits",
                        },
                      })}
                    />
                    {errors.phone && <span style={{ color:"red"}}>{errors.phone.message}</span>}
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form_blk">
                    <input
                      type="password"
                      name="password"
                      id="password"
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
                  <div className="form_blk">
                    <div className="lbl_btn">
                      <input
                        type="checkbox"
                        name="confirm"
                        id="confirm"
                        {...register("confirm", { required: "You must agree to the terms" })}
                      />
                      <label htmlFor="confirm">
                        By creating an account you confirm that you agree to our
                        website terms of use and our privacy notice.
                      </label>
                    </div>
                    {errors.confirm && <span style={{ color:"red"}}>{errors.confirm.message}</span>}
                  </div>
                </div>
              </div>
              <div className="btn_blk mt-5">
                <button type="submit" className="site_btn w-100">
                  Create an Account
                </button>
              </div>
              <div className="have_account">
                Already have an account? <a href="signin">Sign in</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
