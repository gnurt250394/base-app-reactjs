import React from 'react'
import constants from 'containers/config/constants'
import Loadable from 'react-loadable'
const Loading = () => <div>Loading...</div>
const LoadableComponent = (component) => Loadable({
    loader: () => component,
    loading: Loading,
});
const router = [
    { component: LoadableComponent(import('containers/views/Home/HomeScreen')), path: constants.path.home },
    { component: LoadableComponent(import('containers/views/Register/RegisterScreen')), path: constants.path.register },
    { component: LoadableComponent(import('containers/views/Profile/ProfileScreen')), path: constants.path.profile },
]

export default router
