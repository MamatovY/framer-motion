import { motion } from "framer-motion";

const SimpleAnimate = () => {
  const pVariant = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

  const items = ["Text 1", "Text 2", "Text 3"];

  return (
    <div className="App">
      <motion.img
        src="https://papajoule.ru/upload/iblock/e7e/photo_2022_06_07_12_21_18.jpg"
        width={"200px"}
        height={"300px"}
        animate={{ rotate: 360 }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "reverse",
          type: "spring",
        }}
      />
      <motion.p
        initial={"hidden"}
        animate={"visible"}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        variants={pVariant}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odit fugiat
        cupiditate itaque! Dicta eligendi blanditiis recusandae perferendis vero rem.
      </motion.p>
      <motion.a
        href="#"
        whileHover={{
          scale: 1.3,
          color: "red",
        }}
        transition={{
          duration: 2,
        }}>
        Lorem ipsum dolor sit amet.
      </motion.a>

      {items.map((el, i) => (
        <motion.li key={i} variants={listVariants} initial="hidden" animate="visible" custom={i}>
          {el}
        </motion.li>
      ))}
    </div>
  );
};

export default SimpleAnimate;
