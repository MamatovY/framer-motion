import { motion } from 'framer-motion'
import { useState } from 'react'

const menuData = ['Short', 'Very Loooooong item', 'Normal item']

const LayoutId = () => {
    const [activeIndex, setActive] = useState(0)
    return (
        <div style={{
            display: 'flex',
            background: '#eee',
            padding: '1rem',
            borderRadius: '25px',
            justifyContent: 'center',
            marginBottom: '25px'
        }}>
            {menuData.map((item, i) => (
                <MenuItem key={i}
                    item={item}
                    isSelected={activeIndex === i}
                    handleClick={() => setActive(i)} />
            ))}
        </div>
    )
}

const MenuItem = ({ item, isSelected, handleClick = Function.prototype }) => {
    return (
        <motion.div
            onClick={handleClick}
            style={{
                margin: '0 0.5rem',
                fontWeight: 900,
                position: 'relative'
            }}
            initial={{ color: '#000' }}
            animate={{ color: isSelected ? 'rgb(255,0,0)' : '#000' }}
            transition={{ duration: 0.5 }}
        >
            {isSelected && <ActiveLine />}
            {item}
        </motion.div>
    )
}

const ActiveLine = () => {
    return (
        <motion.div
            layoutId='activeItem'
            style={{
                width: 'calc(100% - 10px)',
                height: '4px',
                position: 'absolute',
                bottom: '-6px',
                left: '5px',
                background: 'rgb(255,0,0)'
            }}
            transition={{ duration: 0.5 }}
        >

        </motion.div>
    )
}

export default LayoutId