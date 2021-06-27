import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './app.routes';
import { useAuth } from '../hooks/auth';
import SignIn from '../screens/SignIn';

const fc = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            { user.id ? <AuthRoutes /> : <SignIn/>}
        </NavigationContainer>
    );
}
export default fc;