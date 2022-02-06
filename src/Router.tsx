import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavigationComponent from './components/common/navigation/navigation.component'
import Body from './components/layout/Body';
import Login from './pages/login/login';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : true;

const Router = () => {
        return (
                <>
                        <BrowserRouter>
                                <NavigationComponent />
                                <Switch>
                                        <Suspense fallback={<CircularProgress />}>
                                                <Route path={'/login'} render={() => (token ? <Redirect to={'/'} /> : <Login />)} />
                                                <Route path="/" render={() => token ? <Body /> : <Redirect to="/login" />} />
                                        </Suspense>
                                </Switch>
                        </BrowserRouter>
                </>
        )
};

export default Router