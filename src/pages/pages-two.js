import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    page-two<br />
    <Link to="/">pages-one</Link>
    <br />
    <Link to="/page-three">pages-three</Link>
  </div>
)
