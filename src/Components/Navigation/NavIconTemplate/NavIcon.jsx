import React from 'react'

const NavIcon = ({Icon, title}) => {
  return (
    <div className='navIcon'>
      {Icon && <Icon className="icon"/>}
      <h2>{title ? title : null}</h2>
    </div>
  )
}

export default NavIcon
