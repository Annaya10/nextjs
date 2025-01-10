import React from "react";
import Image from "next/image";
import { useForm } from 'react-hook-form';

export default function SignIn() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <section id="contact">
        <div id="bar">
          <div className="contain">
            <div className="content">
              <h1>Get In Touch With Us</h1>
              <p>Any question or remarks? Just write us a message!</p>
            </div>
          </div>
        </div>
        <div id="information">
          <div className="contain">
            <div className="wrapper">
              <div className="info">
                <h4>Contact Information</h4>
                <p>Say something to start a live chat!</p>
                <ul className="list mt-5">
                  <li>
                    <Image 
                      src="/images/icon-phone.svg"
                      width={100}
                      height={100}
                      alt="Phone Icon"
                    />
                    <a href="tel:+1012 3456 789">+1012 3456 789</a>
                  </li>
                  <li>
                    <Image 
                      src="/images/icon-envelope-fill.svg"
                      width={100}
                      height={100}
                      alt="Email Icon"
                    />
                    <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                  </li>
                  <li>
                    <Image 
                      src="/images/icon-map-marker.svg"
                      width={100}
                      height={100}
                      alt="Map Marker Icon"
                    />
                    <span>
                      132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States
                    </span>
                  </li>
                </ul>
                <ul className="social_list mt-5">
                  <li>
                    <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                      <Image src="/images/social_facebook.svg" width={100} height={100} alt="Facebook Icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                      <Image src="/images/social_twitter.svg" width={100} height={100} alt="Twitter Icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target="_blank" aria-label="Linkedin">
                      <Image src="/images/social_linkedin.svg" width={100} height={100} alt="Linkedin Icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                      <Image src="/images/social_instagram.svg" width={100} height={100} alt="Instagram Icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com" target="_blank" aria-label="Pinterest">
                      <Image src="/images/social_pinterest.svg" width={100} height={100} alt="Pinterest Icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="form_wrapper">
                <form  onSubmit={handleSubmit((data) => console.log(data))}>
                  <div className="row">
                    <div className="col-sm-6 col-12">
                      <div className="form_blk">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="eg: John Wick"
                          className="input"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <span  style={{ color: "red" }}>{errors.name.message}</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form_blk">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="eg: 813-523-8165"
                          className="input"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10,11}$/,
                              message: "Phone number must be between 10 and 11 digits"
                            }
                          })}
                        />
                        {errors.phone && <span  style={{ color: "red" }}>{errors.phone.message}</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form_blk">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          placeholder="eg: Lorem Ipsum Dollar"
                          className="input"
                          {...register("subject", { required: "Subject is required" })}
                        />
                        {errors.subject && <span  style={{ color: "red" }}>{errors.subject.message}</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 col-12">
                      <div className="form_blk">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          placeholder="eg: sample@gmail.com"
                          className="input"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address"
                            },
                          })}
                        />
                        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                      </div>
                    </div>
                    <div className="col-sm-12 col-12">
                      <div className="form_blk">
                        <label htmlFor="comments">Comments</label>
                        <textarea
                          id="comments"
                          rows={6}
                          placeholder="Type something here..."
                          className="input"
                          {...register("comments", { required: "Comments are required" })}
                        />
                        {errors.comments && <span  style={{ color: "red" }}>{errors.comments.message}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="btn_blk justify-content-end mt-5">
                    <button type="submit" className="site_btn px">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
