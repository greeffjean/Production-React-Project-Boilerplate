import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch,  Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/routing/PrivateRoute';
import NavigationComponent from './components/common/navigationComponent/navigationsComponent'

// Using React.Lazy to load/unload segments of our applications
const Body = React.lazy(() => import('../src/components/layout/Body'))
const Login =  React.lazy(() => import('./pages/login/login'));

const token = localStorage.getItem('token') ? localStorage.getItem('token') : true;

const Router = () => {
return (
        <>
        <BrowserRouter>
        <NavigationComponent />
        <Switch>
        <Suspense fallback={<CircularProgress />}>
        <Route path={'/login'} render={() => (token ? <Redirect to={'/'} /> : <Login /> )} />
        <Route path="/" render={() => token ? <Body /> : <Redirect to="/login" />} />
        </Suspense>
        </Switch>
        </BrowserRouter>
        </>
)
};

export default Router