import { useState } from "react"
import { Reorder } from 'framer-motion'

const Todo = () => {
    const [data, setData] = useState([
        'Yiman',
        'Amir',
        'Riza',
    ])
    const handleAdd = (name) => {
        setData([...data, name])
    }
    return (
        <div style={{ marginBottom: '50px' }}>
            <CreateItem handleAdd={handleAdd} />
            <Reorder.Group axis="y" values={data} onReorder={setData}>
                {data.map((item, i) => {
                    return (
                        <Item key={item} item={item} />
                    )
                })}
            </Reorder.Group>

        </div>
    )
}

const Item = ({ item }) => {
    console.log(item);
    return (
        <Reorder.Item value={item} style={{
            width: '100%',
            borderRadius: '6px',
            background: 'rgb(36,200,130)'
        }}>
            {item}
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
            <input onChange={e => setText(e.target.value)} type="text" name="text" id="text" />
            <button onClick={handleClick} type="button">Add</button>
        </div>
    )
}

export default Todo