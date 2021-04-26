import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./redux/store"
import * as RouteType from "./router"
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"

import * as pages from "./pages";

const persistor = persistStore(store)
class App extends React.Component{

 render(){
   return (
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <Switch>
       
     <RouteType.GuestRoute path="/login" component={pages.Login}></RouteType.GuestRoute>
     <RouteType.GuestRoute path="/register" component={pages.Register}></RouteType.GuestRoute>
       <RouteType.PrivateRoute path="/dashboard" component={pages.Dashboard}></RouteType.PrivateRoute>
       
       <RouteType.GuestRoute exact path="/" component={pages.Login}></RouteType.GuestRoute>
      
     </Switch>
     
   </PersistGate>

     </Provider>
   );
 }
}


export default App;
