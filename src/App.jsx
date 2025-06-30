import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Category  from './context/Category';
import MainLayout from './pages/MainLayout';
import ProductList from './components/ProductList';
import SearchList from './pages/SearchList';
import ProductLayout from './pages/ProductLayout';
import Scroll from './components/Scroll';


const App = () => {

    return (

        <Category>
            <Router>
            <Scroll/>
                <Routes>
                    <Route path="/*" element={<MainLayout />} >
                    <Route index element={<ProductList/>}/>
                    <Route path="search/:query" element={<SearchList/>}/>
                    </Route>
                    <Route path="/product/:id" element={<ProductLayout/>} />
                </Routes>
            </Router>
        </Category>

    );

};

export default App;
