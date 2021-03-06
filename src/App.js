import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound'
import Search from './components/Search'
import NewQuestion from './components/NewQuestion'
import Question from './components/Question'
import styled from 'styled-components'


const App = () => (
  <FullHeightWrapper>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/search'/>}/>
      <Route path='/search' component={Search}/>
      <Route path='/new' component={NewQuestion}/>
      <Route path='/question/:id' component={Question}/>
      <Route path='/404' component={NotFound}/>
      <Redirect to='/404'/>
    </Switch>
  </FullHeightWrapper>
)

const FullHeightWrapper = styled.div `
  height: 100%
`;

export default App
