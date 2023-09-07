import { useState } from "react"
import { Reorder } from 'framer-motion'

const Todo = () => {
    const [data, setData] = useState([
        { name: 'Yiman', id: 1 },
        { name: 'Riza', id: 2 },
        { name: 'Amir', id: 3 },
    ])
    const handleAdd = (name) => {
        const newData = [...data, { name, id: Date.now() }]
        setData(newData)
    }

    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id)
        setData(newData)
    }
    return (
        <div style={{ marginBottom: '50px' }}>
            <CreateItem handleAdd={handleAdd} />
            <Reorder.Group axis="y" className="todo-ul" values={data} onReorder={setData}>
                {data.map((item, i) => {
                    return (
                        <Item handleDelete={handleDelete} key={item.id} item={item} />
                    )
                })}
            </Reorder.Group>
        </div>
    )
}

const Item = ({ item, handleDelete }) => {

    return (
        <Reorder.Item
            className="todo-li"
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
            transition={{ duration: 0.5 }}
            value={item}
            style={{
                borderRadius: '6px',
                background: 'rgb(36,200,130)'
            }}>
            {item.name}
            <span style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.id)}>X</span>
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