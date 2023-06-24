import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleIconClick }) => {
    return (
        <>
            <div className="conatiner">
                <ul>
                    {
                        items ?
                            (
                                items.map((i) => {
                                    return (
                                        <li key={i.id}>
                                            <div>
                                                <label className='label'>{i.item}</label>
                                            </div>
                                            <div>
                                                <FaTrashAlt
                                                    className='icon'
                                                    onClick={() => handleIconClick(i.id)}
                                                />
                                            </div>
                                        </li>
                                    )
                                })
                            ) :
                            <p className='no-item'>There is no items</p>
                    }
                </ul>
            </div>
        </>
    )
}


export default Content