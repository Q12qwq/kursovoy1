import React, {useContext} from "react";
// noinspection ES6CheckImport
import {Switch, Route, Link} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
//import {observer} from "mobx-react-lite";
const AppRouter = () => {
   const {user} = useContext(Context)
   console.log(user)
    return (
            <Switch>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Link  to={SHOP_ROUTE}/>
            </Switch>
    );
};
export default AppRouter;