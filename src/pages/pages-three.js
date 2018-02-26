import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    page-three<br />
    <Link to="/">pages-one</Link>
    <br />
    <Link to="/page-two">pages-two</Link>
  </div>
)
