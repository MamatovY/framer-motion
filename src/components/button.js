import { motion } from "framer-motion"

const Button = ({ text, handleClick }) => {

    return (
        <motion.button
            style={btnStyle}
            onClick={handleClick}
            whileHover={{ background: '#DDD' }}
            whileTap={{ background: '#CCC' }}
        >
            {text}
        </motion.button>
    )
}

export default Button

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    background: '#f1f1f1',
    cursor: 'pointer',
    width: '80px'
}