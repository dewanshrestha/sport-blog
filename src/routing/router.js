import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../templates/home';

const Routing = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
            </BrowserRouter>
        </div>
    )
}
export default Routing;