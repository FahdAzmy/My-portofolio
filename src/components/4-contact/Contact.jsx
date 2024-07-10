import { ValidationError, useForm } from "@formspree/react";
import "./contect.css";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animition/Animation - 1720568861555.json";
import contactAnimation from "../../../public/animition/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("movaqopo");

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <div className="details">
            <div className="us">
              <span className="icon-envelope"></span>
              <h2>Contact us</h2>
            </div>
            <p>
              Contact us for more information and Get notified when I publish
              something new
            </p>
          </div>
          <div className="inputs">
            <label htmlFor="email">Email Adress</label>
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <input type="submit" disabled={state.submitting} className="sub" />

            {state.succeeded && (
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",

                  fontSize: "18px",
                  marginTop: "1.7rem",
                }}
              >
                <Lottie
                  loop={false}
                  style={{ height: 50, marginRight: "-5px", marginTop: "1px" }}
                  animationData={doneAnimation}
                />
                Your Message has been sent successfully
              </h2>
            )}
          </div>
        </div>
      </form>
      <div className="right">
        <Lottie
          className="contactAnmotion"
          animationData={contactAnimation}
          style={{
            marginRight: "100px",
            height: "600px",
            paddingBottom: "100px",
          }}
        />
      </div>
    </div>
  );
}
