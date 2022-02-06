
import { Container } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { routesMap } from '../../utils/routes.utils';

type TProps = {
    props: any
}

const TheContent: FunctionComponent<TProps> = ({ props }) => {

    // Map over allowed routes and add to App respectively
    const routes = [];
    for (const [key, value] of Object.entries(props.userAccess)) {
        console.log(key)
        value && routes.push(routesMap[key])
    }

    console.log(routes)

    return (
        <Container>
            {routes}
            <Redirect from={'/'} to={'/home'} />
        </Container>
    )
};

export default TheContent

