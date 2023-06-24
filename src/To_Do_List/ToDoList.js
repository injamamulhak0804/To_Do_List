import React, { useState, useRef, useEffect } from 'react'
import InputBox from './InputBox'
import Content from './Content'

const ToDoList = () => {

    const [value, setValue] = useState('')
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("to_do_list")) || [])

    const inputRef = useRef()

    // useEffect(() => {
    //     callFocus()
    //     const data = JSON.parse(localStorage.getItem("to_do_list"))
    //     setItems(data)
    // }, [])

    function callFocus() {
        inputRef.current.focus()
    }



    const handleSubmit = () => {
        if (value) {
            const id = items.length ? items[items.length - 1].id + 1 : 1
            const set = { id, item: value }
            const newItem = [...items, set]
            setItems(newItem)
            localStorage.setItem("to_do_list", JSON.stringify(newItem))
            setValue("")
            callFocus()
        } else {
            callFocus()
        }
    }

    const handleIconClick = (id) => {
        const deleteItem = items.filter((item) => item.id !== id)
        localStorage.setItem("to_do_list", JSON.stringify(deleteItem))
        setItems(deleteItem)
        callFocus()
    }

    return (
        <>
            <header className='header'>To_Do_List</header>
            <div className="inputContainer">
                <InputBox
                    handleSubmit={handleSubmit}
                    value={value}
                    setValue={setValue}
                    inputRef={inputRef}
                />
            </div>
            <div className="show">
                <Content
                    items={items}
                    handleIconClick={handleIconClick}
                />
            </div>
        </>
    )
}

export default ToDoList