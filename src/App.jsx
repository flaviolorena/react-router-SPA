import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/base/base.css';
import Cabecalho from './componentes/cabecalho';
import Home from './paginas/Home';
import Pagina404 from './paginas/Pagina404';
import Sobre from './paginas/Sobre';


function App() {
	return (
		<>
			<Router>
        <Cabecalho/>
        {/* evita de continuar buscando rotas */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre' >
            <Sobre />
          </Route>
          {/* caso nao exista uma rota, exibe a erro default */}
          <Route>
            <Pagina404/>
          </Route>
        </Switch>
			</Router>
		</>
	);
}

export default App;
