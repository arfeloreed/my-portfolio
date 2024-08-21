import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
// assets
import imageOverlay from "../assets/images/earth.webp";
// variables
import { socials } from "./variables";

function Contact() {
  const year = new Date().getFullYear();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent!",
        icon: "success",
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Swal.fire({
        title: "Message Failed!",
        text: "Try again later.",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image px-2"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>

      <div
        className="container rounded mb-5 p-3 p-sm-5"
        style={{
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <p className="h3 mb-5">Send A Message</p>

            <form onSubmit={onSubmit}>
              <div className="my-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Your name"
                  autoComplete="true"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="my-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Your email"
                  autoComplete="true"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-4">
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-lg btn-primary px-5 py-2"
                />
              </div>
            </form>
          </div>
          <div className="col pt-5 pt-md-0 px-3">
            <p className="h3 px-0 px-md-3">Get In Touch</p>

            <div className="mt-5 px-0 px-md-3">
              <p className="lead" style={{ textAlign: "justify" }}>
                Don't be shy to drop by. We can talk about programming, project
                collaboration, or how good of a cook I am and how tasty the
                foods I made. I'd love to hear from you.
              </p>
              <div className="socials mt-4">
                {socials.map((item, idx) => {
                  return (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      key={idx}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col lead">Copyright © {year} Arfelo Reed</div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
