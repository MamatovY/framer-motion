import { useState } from "react"
import { Reorder } from 'framer-motion'

const variants = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        x: -100,
        opacity: 0
    }
}

const Todo = () => {
    const [data, setData] = useState([
        'Yiman',
        'Amir',
        'Riza',
    ])
    const handleAdd = (name) => {
        const newData = [...data, name]
        setData(newData)
    }

    const handleDelete = (name) => {
        const newData = data.filter(item => item !== name)
        setData(newData)
    }
    return (
        <div style={{ marginBottom: '50px' }}>
            <CreateItem handleAdd={handleAdd} />
            <Reorder.Group axis="y" values={data} onReorder={setData}>
                {data.map((item, i) => {
                    return (
                        <Item handleDelete={handleDelete} key={item} item={item} />
                    )
                })}
            </Reorder.Group>

        </div>
    )
}

const Item = ({ item, handleDelete }) => {

    return (
        <Reorder.Item
            initial={{
                opacity: 0,
                x: -100
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            exit={{
                x: -100
            }}
            whileDrag={{
                scale: 1.1,
                boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.6)'
            }}
            transition={{ duration: 1.5 }}
            value={item}
            style={{
                borderRadius: '6px',
                background: 'rgb(36,200,130)'
            }}>
            {item}
            <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(item)}>X</span>
        </Reorder.Item>
    )
}

const CreateItem = ({ handleAdd }) => {
    const [text, setText] = useState('')

    const handleClick = () => {
        handleAdd(text)
        setText('')
    }
    return (
        <div style={{ margin: '20px 0' }}>
            <input value={text} onChange={e => setText(e.target.value)} type="text" name="text" id="text" />
            <button onClick={handleClick} type="button">Add</button>
        </div>
    )
}

export default Todo