import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Homepage} from './pages/homepage/homepage.page';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Homepage} />

      </Switch>
    </BrowserRouter>
  )
}


