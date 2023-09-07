import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const Collapsible = ({ title = 'click me', children }) => {

    const [isVisible, setVisible] = useState(true)

    const handleVisibility = () => setVisible(!isVisible)
    return (
        <>
            <div onClick={handleVisibility} style={{ background: '#DDD', width: 300, padding: '0.8rem 1.2rem', margin: '0 auto' }}>
                {title}
            </div>
            {/* initial={false} означает что при загрузки страницы не будет анимации */}
            <AnimatePresence initial={false}>
                {
                    isVisible && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            style={{ border: '1px solid #ddd', width: 300, overflow: 'hidden', margin: '0 auto' }}
                        // transition={{ duration: 3 }}
                        >
                            <div style={{ width: 300, padding: '0.8rem 1.2rem', }}>
                                {children}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Collapsible