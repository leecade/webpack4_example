import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'

const Loading = () => {
  return <div className="container loading">Loading...</div>
}

const PageOne = props => (
  <DynamicImport load={() => import('./pages/pages-one')}>
    {Component =>
      Component === null ? <Loading true /> : <Component {...props} />
    }
  </DynamicImport>
)

const PageTwo = props => (
  <DynamicImport load={() => import('./pages/pages-two')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
)

const PageThree = props => (
  <DynamicImport load={() => import('./pages/pages-three')}>
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PageOne} />
          <Route path="/page-two" component={PageTwo} />
          <Route path="/page-three" component={PageThree} />
        </div>
      </Router>
    )
  }
}

export default App
