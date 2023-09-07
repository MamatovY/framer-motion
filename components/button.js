import { motion } from "framer-motion"

const Button = ({ text, handleClick, isSelected }) => {

    return (
        <motion.button
            style={btnStyle}
            onClick={handleClick}
            whileHover={{ background: '#DDD' }}
            whileTap={{ background: '#CCC' }}
        >
            {isSelected && <BgSelector />}
            <motion.span animate={{ color: isSelected ? '#FFF' : '#000' }}
                style={{
                    position: 'relative'
                }}
            >
                {text}
            </motion.span>
        </motion.button >
    )
}

export default Button

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    background: 'transparent',
    cursor: 'pointer',
    width: '80px',
    position: 'relative'
}

const BgSelector = () => {
    return (
        <motion.div layoutId="activeMenuItem" style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            background: 'rgb(290,0,0)'
        }} />
    )
}