import './App.css';
import Skeleton from "./pages/Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'

function App() {
  return (
    <div>
          <BrowserRouter>

                <Container  maxWidth={false}>

                  <Switch>
                    
                    <Route exact path='/' component={Skeleton} />

                  </Switch>

                </Container>

          </BrowserRouter>
    </div>
  );
}

export default App;
