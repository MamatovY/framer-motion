import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Button from "./button"

const Filter = ({ data }) => {
    const [cards, setCards] = useState(data)
    const [selected, setSelected] = useState(0)

    const buttons = data.reduce((acc, el) => {
        if (acc.includes(el.category)) {
            return acc
        }

        return [...acc, el.category]
    }, ['all'])

    const handleFilter = (selector) => {
        if (selector === 'all') return setCards(data)
        setCards(data.filter(el => el.category === selector))
    }

    return (
        <div className='filter'>
            <div style={{ background: '#f1f1f1' }}>
                {
                    buttons.map((btn, i) => (
                        <Button key={btn}
                            text={btn}
                            handleClick={() => {
                                setSelected(i)
                                handleFilter(btn)
                            }}
                            isSelected={selected === i}
                        />
                    ))
                }
            </div>
            <motion.div layout
                style={{
                    overflow: 'hidden',
                    margin: '0 auto',
                    width: '316px',
                    display: "flex",
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    border: '1px solid #696969'
                }}>
                {/* mode='wait' - чтобы пока нынешние элементы не исчезнут другие не появятся */}
                <AnimatePresence mode='wait'>
                    {
                        cards.map(el => (
                            <motion.div layout key={el.title}
                                style={boxStyle}
                                //initial-позиция элемента перед тем как появится (прошлое)
                                // initial={{ opacity: 0, y: 100 }}
                                initial={{ opacity: 0 }}
                                //animate-позиция элемента в конечной точке когда стоит не подвижно (настоящее)
                                // animate={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1 }}
                                //exit-какая позиция элемента должна быть когда она исчезнет (будущее)
                                // exit={{ opacity: 0, scale: 0, rotate: 360 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {el.title}
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </motion.div>
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