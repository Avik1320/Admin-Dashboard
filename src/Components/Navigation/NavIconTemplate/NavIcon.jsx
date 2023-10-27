import React from 'react'

const NavIcon = ({Icon, title, onclick}) => {
  return (
    <div className='navIcon' onClick={onclick}>
      {Icon && <Icon className="icon"/>}
      <h2>{title ? title : null}</h2>
    </div>
  )
}

export default NavIcon
