import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
