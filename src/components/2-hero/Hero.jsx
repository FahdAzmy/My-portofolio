import Lottie from "lottie-react";
import "./hero.css";
import { motion } from "framer-motion";
import heroAnimation from "../../../public/animition/developer.json";
export default function Hero() {
  return (
    <div className="hero">
      <div>
        <div className="photo">
          <img src="/me3.png" />
          <span className="icon-verified" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Software Enginner,FullStack Developer
        </motion.h1>
        <p>
          Hi, I'm Fahd, a talented Full-stack MERN developer from Egypt. My
          portfolio showcases my ability to create cutting-edge web
          applications. Let's connect to discuss how I can contribute to your
          project's success.
        </p>
        <ul>
          <li>
            <a className="icont icon-twitter" />
          </li>
          <li>
            <a
              href="https://www.instagram.com/fahd_aazmy/"
              className="icon icon-instagram"
            />
          </li>
          <li>
            <a
              href="https://github.com/FahdAzmy"
              className="icon icon-github"
            />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/fahd-azmy-027aa721b/"
              className="icon icon-linkedin-square"
            />
          </li>
        </ul>
      </div>
      <div>
        <Lottie
          className="anmi"
          style={{ height: 400 }}
          animationData={heroAnimation}
        />
      </div>
    </div>
  );
}
