import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import SideBar from "./components/SideBar/SideBar";
import Widgets from "./components/Widgets/Widgets";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // login
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            profielUrl: userAuth.photoURL, // change the photoUrl to profielUrl
          })
        );
      } else {
        // logout
        // dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header sections */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
