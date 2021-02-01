import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/header/header.component';
import {Homepage} from './pages/homepage/homepage.page';

export const App = () => {
  return (
    <BrowserRouter>
<Header/>
      <Switch>
        <Route exact path="/" render={Homepage} />

      </Switch>
    </BrowserRouter>
  )
}


