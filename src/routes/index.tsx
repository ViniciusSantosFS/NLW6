import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './app.routes'
import SignIn from '../screens/signin'
import { useAuth } from '../hooks/auth'

export default function Routes(){
    const { user } = useAuth()
    return(

            <NavigationContainer>
                {user.id ? <AppRoutes/> : <SignIn/>}
            </NavigationContainer>
    )
}