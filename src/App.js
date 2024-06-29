import './App.css'

import './components/NotFound'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <notFound />
    </Switch>
  </div>
)
export default App
