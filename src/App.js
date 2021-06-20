import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./components/context/auth-context";

const App = (props) => {
  //return <Ingredients />;
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  }
  return content; //(
  // <AuthContext.Consumer>
  // <Auth />;
  // </AuthContext.Consumer>
  //);
};

export default App;
