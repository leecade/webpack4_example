import React from 'react'

const initialState = {
  theme: 'dark',
  color: 'blue'
}

export const GlobalContext = React.createContext({
  ...initialState
})

export class GlobalContextProvider extends React.Component {
  // initialState
  state = {
    ...initialState
  }

  // reducer
  handleContextChange = action => {
    switch (action.type) {
      case 'UPDATE_THEME':
        return this.setState({
          theme: action.theme
        })
      case 'UPDATE_COLOR':
        return this.setState({
          color: action.color
        })
      case 'UPDATE_THEME_THEN_COLOR':
        return new Promise(resolve => {
          resolve(action.theme)
        })
          .then(theme => {
            this.setState({
              theme
            })
            return action.color
          })
          .then(color => {
            this.setState({
              color
            })
          })
      default:
        return
    }
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          dispatch: this.handleContextChange,
          theme: this.state.theme,
          color: this.state.color
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
