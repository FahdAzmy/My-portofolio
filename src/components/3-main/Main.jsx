import classNames from "classnames";
import "./main.css";
import { useState } from "react";
import { Projects } from "../../project";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Projects",
  "HTML & CSS",
  "React",
  "FullStack (MERN)",
  "BlockChain",
];
const myProjects = Projects;
export default function Main() {
  const [arr, setArr] = useState(myProjects);
  const [button, setbutton] = useState("All Projects");
  const filterProjects = (category) => {
    setbutton(category);
    if (category === "All Projects") {
      setArr(myProjects);
    } else {
      const newArr = myProjects.filter((item) => item.category === category);
      setArr(newArr);
    }
  };
  return (
    <div className="main">
      <div className="left">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={classNames({ active: button === category })}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence>
        <div className="right">
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
              >
                <div className="box">
                  <img src={item.imgPath} />
                  <div className="title">
                    <h2>{item.projectTitle}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <div className="icons">
                    <div className="links">
                      <a href={item.herf} className="icon-link"></a>
                      <a href={item.github} className="icon-github"></a>
                    </div>
                    <div>
                      <a className="more">
                        <span>more</span>
                        <span className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}
