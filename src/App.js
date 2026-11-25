
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './paginas/Home';
import Servicos from './paginas/Servicos';
import Login from './paginas/Login';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import CadastroCliente from './paginas/CadastroCliente';
import CadastroProfissional from './paginas/CadastroProfissional';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-profissional" element={<CadastroProfissional />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;