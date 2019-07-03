import React from 'react'
import './SearchField.styles.css'

export const SearchField = ({ placeholder, handleChange}) => (
    <div>
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
)
