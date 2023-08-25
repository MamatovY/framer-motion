import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Button from "./button"

const Filter = ({ data }) => {
    const [cards, setCards] = useState(data.filter(el => el.category === 'cars'))

    const buttons = data.reduce((acc, el) => {
        if (acc.includes(el.category)) {
            return acc
        }

        return [...acc, el.category]
    }, [])

    const handleFilter = (selector) => {
        setCards(data.filter(el => el.category === selector))
    }

    return (
        <div className='filter'>
            <div>{
                buttons.map(btn => (
                    <Button key={btn} text={btn} handleClick={() => handleFilter(btn)} />
                ))
            }</div>
            <div style={{ overflow: 'hidden', maxWidth: 312, margin: '0 auto' }}>
                {/* mode='wait' - чтобы пока нынешние элементы не исчезнут другие не появятся */}
                <AnimatePresence mode='wait'>
                    {
                        cards.map(el => (
                            <motion.div key={el.title}
                                style={boxStyle}
                                //initial-позиция элемента перед тем как появится (прошлое)
                                initial={{ opacity: 0, y: 100 }}
                                //animate-позиция элемента в конечной точке когда стоит не подвижно (настоящее)
                                animate={{ opacity: 1, y: 0 }}
                                //exit-какая позиция элемента должна быть когда она исчезнет (будущее)
                                exit={{ opacity: 0, scale: 0, rotate: 360 }}
                                transition={{ duration: 1 }}
                            >
                                {el.title}
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div >
    )
}

const boxStyle = {
    float: 'left',
    background: '#2196F3',
    color: '#FFF',
    width: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    margin: 2
}

export default Filter