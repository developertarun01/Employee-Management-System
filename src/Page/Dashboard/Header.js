import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
        <h1>Employee Management System</h1>
        <div style={{ marginBottom: '11px'}}>
            <button onClick ={() => setIsAdding(true)}className='round-button'>Add Button</button>
        </div>
    </header>
  )
}

export default Header