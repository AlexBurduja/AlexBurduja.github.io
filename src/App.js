import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage } from './pages/homePage/Homepage'
import { CartPage } from './pages/cartPage/CartPage'
import { ProductPage } from './pages/productPage/ProductPage'
import { ContactPage } from './pages/contactPage/ContactPage'
import { Login } from './pages/auth/Login';
import { AuthContextProvider } from './pages/auth/auth-context';
import React from 'react';
import { CanNavigate } from './pages/auth/CanNavigate';
import { Register } from './pages/auth/Register';
import { ProfilePage } from './pages/auth/ProfilePage.js';
import { ReviewPage } from './pages/reviewPage/ReviewPage';
import { AdminPanelList } from './pages/adminPanel/AdminPanelList';
import { RegisterFirebase } from './RegisterFirebase';

export const AuthContext = React.createContext();

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
              <Homepage />
        }></Route>

            <Route path='/cart' element={ 
              <CartPage />
            }></Route>

            <Route path='/products/:id' element={ 
              <ProductPage /> 
            }></Route>

            <Route path='/contact' element={ 
              <ContactPage />
            }></Route>

            <Route path='/reviews' element={ 
              <ReviewPage />
            }></Route>

            <Route path = '/profile' element={ 
              <ProfilePage /> 
              } ></Route>

              <Route path = '/users' element={
                  <AdminPanelList />
              }></Route>

            <Route path = '/loginfirebase' element={ <Login /> }></Route>
            <Route path = '/registerfirebase' element= { <RegisterFirebase/> }></Route>
            {/* <Route path = '/login' element={ <Login /> }></Route> */}
            {/* <Route path = '/register' element= { <Register/> }></Route> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App;


