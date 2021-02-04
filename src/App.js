import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/header/header.component';
import  Homepage  from './pages/homepage/homepage.page';
import MovieDetails from './pages/poster-specific/movie-details.component';
export const App = () => {


  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/MovieDetails/" component={MovieDetails} />

      </Switch>
    </BrowserRouter>
  )
}


