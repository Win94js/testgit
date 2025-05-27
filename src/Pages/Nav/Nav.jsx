import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <h4>Nav</h4>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/create-post'>Create Post</Link>
        </li>
        <li>
          <Link to='/save-posts'>Save Posts</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav          