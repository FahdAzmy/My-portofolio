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
          I'm Fahd Azmy, a Software Developer Form Egypt, I've Exprince In Mern
          Stack{" "}
        </p>
        <ul>
          <li>
            <a className="icont icon-twitter" />
          </li>
          <li>
            <a className="icon icon-instagram" />
          </li>
          <li>
            <a className="icon icon-github" />
          </li>
          <li>
            <a className="icon icon-linkedin-square" />
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
