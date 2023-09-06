import { motion } from "framer-motion"
import { forwardRef } from "react"

export const Btn = forwardRef((props, ref) => {
    return (
        <button style={{
            width: '100px',
            background: '#84e6f8',
            border: 'none',
            outline: 'none',
            padding: '10px',
            marginTop: '10px',
            fontWeight: '700',
            color: '#292929'
        }}
            ref={ref}
        >
            Click
        </button>
    )
})

const MButton = motion(Btn)
export default MButton