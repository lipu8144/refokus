import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {

    const products = [
      {
        title: "Arqitel",
        desc: "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for custoers that",
        live: true,
        case: false,
      },
      {
        title: "TTR",
        desc: "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for custoers that",
        live: true,
        case: false,
      },
      {
        title: "YIR 2022",
        desc: "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for custoers that",
        live: true,
        case: true,
      },
      {
        title: "Yahoo",
        desc: "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for custoers that",
        live: true,
        case: true,
      },
      
    ];
    
    const [pos, setPos] = useState(0);
    const mover = (val) =>{
      setPos(val*23);
    }


  return (
    <div className="mt-20 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className=" absolute top-0 w-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          >
            <h1 className="text-black">Hello</h1>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
