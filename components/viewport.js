import { motion } from 'framer-motion'
import MButton from './MButton'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.4 }
    })
}

const Viewport = () => {
    return (
        <motion.section style={textStyle}
            viewport={{
                // Работает не сразу а когда пользователь скролит на 0.4 больше
                amount: 0.2,
                // Только один раз анимируется когда виден
                once: true
            }}
            initial='hidden'
            whileInView='visible'
            className='viewport'>
            <motion.h1 custom={1} variants={textAnimation}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, voluptatem.
            </motion.h1>
            <motion.p custom={2} style={textStyle} variants={textAnimation}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reiciendis soluta repudiandae neque. Est sunt in, odit rem, laboriosam corrupti, amet nostrum voluptate quod iste maiores cumque incidunt? Nulla, fuga!
            </motion.p>
            <MButton custom={3} variants={textAnimation} />
        </motion.section>
    )
}

const textStyle = {
    width: '400px',
    margin: '20px auto',
    border: '1px solid red',

}

export default Viewport