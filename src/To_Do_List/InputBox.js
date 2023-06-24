import React, { useEffect, useRef } from 'react'
import './ToDoList.css'

const InputBox = ({ handleSubmit, value, setValue, inputRef }) => {


    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label
                    className='label'
                    htmlFor="value">
                    Enter a Task:
                </label>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    ref={inputRef}
                    className='inputUser'
                    id='value' />
                <button
                    className='btn'
                    onClick={handleSubmit}
                    type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}

export default InputBox