import React from "react";
import { Link, Route } from "react-router-dom";

// Enums for Routes
export enum routePaths {
    HOME = '/home',
    DASHBOARD_ONE = '/dashboard-one',
    DASHBOARD_TWO = '/dashboard-two',
}

export enum routeTitles {
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
    home: <Route key={routeTitles.HOME} path={routePaths.HOME} component={Home} />,
    dashboardOne: <Route key={routeTitles.DASHBOARD_ONE} path={routePaths.DASHBOARD_ONE} component={DashboardOne} />,
    dashboardTwo: <Route key={routeTitles.DASHBOARD_TWO} path={routePaths.DASHBOARD_TWO} component={DashboardTwo}/>
}

// Links Map
export const linksMap: { [key: string]: JSX.Element } = {
    home: <Link data-testid="link" key={routeTitles.HOME} to={routePaths.HOME}>{routeTitles.HOME}</Link>,
    dashboardOne: <Link data-testid="link" key={routeTitles.DASHBOARD_ONE} to={routePaths.DASHBOARD_ONE}>{routeTitles.DASHBOARD_ONE}</Link>,
    dashboardTwo: <Link data-testid="link" key={routeTitles.DASHBOARD_TWO} to={routePaths.DASHBOARD_TWO}>{routeTitles.DASHBOARD_TWO}</Link>,
}
    
