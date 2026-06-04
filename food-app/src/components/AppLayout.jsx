import { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import userContext from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

export default function AppLayout() {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an api call and send username and password
    const data = {
      name: "Ayush Porwal",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <>
        <Header />
        <Outlet />
      </>
    </userContext.Provider>
    </Provider>
  );
}
