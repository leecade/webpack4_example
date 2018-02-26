import React from 'react'
import { Link } from 'react-router-dom'
import {
  GlobalContextProvider,
  GlobalContext
} from '../components/GlobalContext'

const SubComponent = props => (
  <div>
    {/* action */}
    <div>
      page-one
      <br />
      <Link to="/page-two">pages-two</Link>
      <br />
      <Link to="/page-three">pages-three</Link>
    </div>
    <button
      onClick={() =>
        props.dispatch({
          type: 'UPDATE_THEME',
          theme: 'light'
        })
      }
    >
      change theme
    </button>
    <div>{props.theme}</div>
    {/* action */}
    <button
      onClick={() =>
        props.dispatch({
          type: 'UPDATE_COLOR',
          color: 'red'
        })
      }
    >
      change color
    </button>
    <div>{props.color}</div>
    {/* action */}
    <button
      onClick={() =>
        props.dispatch({
          type: 'UPDATE_THEME_THEN_COLOR',
          theme: 'monokai',
          color: 'purple'
        })
      }
    >
      change theme then color
    </button>
  </div>
)

export default () => (
  <GlobalContextProvider>
    <GlobalContext.Consumer>
      {context => (
        <SubComponent
          theme={context.theme}
          color={context.color}
          dispatch={context.dispatch}
        />
      )}
    </GlobalContext.Consumer>
  </GlobalContextProvider>
)
