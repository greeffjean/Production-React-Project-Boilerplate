
import { Container } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Home = React.lazy(() => import('../home/homeComponent'))

const TheContent: FunctionComponent = () => {
  return (
  <Container>
      <Route path={'/home'} component={Home} />
      <Redirect from={'/'} to={'/home'}/> 
   </Container>
    )
};

    export default TheContent

