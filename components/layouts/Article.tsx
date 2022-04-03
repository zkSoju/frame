import React from "react";
import { motion } from "framer-motion";
import { transitionAnimation } from "../../lib/utils";

const Article = ({ children }) => {
  return (
    <motion.article
      variants={transitionAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="relative z-10 w-full"
    >
      <div className="mx-auto flex min-h-screen w-full flex-col items-center overflow-hidden px-48 pt-24 pb-48">
        {children}
      </div>
    </motion.article>
  );
};

export default Article;
