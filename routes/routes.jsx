import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { ComponentElement } from 'react';
import header from '../vite-project/src/header/header';
import pages from './pages'
import footer from 'footer'
import Editar from '../vite-project/src/pages/editar';
import Deletar from '../vite-project/src/pages/cadastro'



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Switch>
    </BrowserRouter>
      
  );
};

export default Routes;