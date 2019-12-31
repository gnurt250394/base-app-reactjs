import React from 'react'
import constants from 'config/constants'
import Loadable from 'react-loadable'
const Loading = () => <div>Loading...</div>
const LoadableComponent = (component) => Loadable({
    loader: () => component,
    loading: Loading,
});
const router = [
    { component: LoadableComponent(import('views/Home/HomeScreen')), path: constants.path.home },
    { component: LoadableComponent(import('views/Register/RegisterScreen')), path: constants.path.register },
    { component: LoadableComponent(import('views/Profile/ProfileScreen')), path: constants.path.profile },
]

export default router
