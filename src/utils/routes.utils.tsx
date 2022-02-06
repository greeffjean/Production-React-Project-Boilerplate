import React from "react";
import { Route } from "react-router-dom";

// Enums for Routes
export enum routePaths {
    HOME = '/home',
    DASHBOARD_ONE = '/dashboard-one',
    DASHBOARD_TWO = '/dashboard-two',
}

export enum routeTags {
    HOME = 'Home',
    DASHBOARD_ONE = 'Dashboard One',
    DASHBOARD_TWO = 'Dashboard Two',
}

// Lazy Imports
const Home = React.lazy(() => import('../pages/home/home'))
const DashboardOne = React.lazy(() => import('../pages/dashboardOne/dashboardOne'))
const DashboardTwo = React.lazy(() => import('../pages/dashboardTwo/dashboardTwo'))

// Route map
export const routesMap: { [key: string]: JSX.Element } = {
    home: <Route key={routeTags.HOME} path={routePaths.HOME} component={Home} />,
    dashboardOne: <Route key={routeTags.DASHBOARD_ONE} path={routePaths.DASHBOARD_ONE} component={DashboardOne} />,
    dashboardTwo: <Route key={routeTags.DASHBOARD_TWO} path={routePaths.DASHBOARD_TWO} component={DashboardTwo}/>
}
    
