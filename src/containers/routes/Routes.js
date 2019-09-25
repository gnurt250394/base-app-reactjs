import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import constants from 'containers/config/constants'
import Loadable from 'react-loadable'
const Loading = () => <div>Loading...</div>
const LoadableComponent = (component) => Loadable({
    loader: () => component,
    loading: Loading,
});
// const Register = () => Loadable({
//     loader: () => import('containers/views/Register/RegisterScreen'),
//     loading: Loading,
// });
// const Profile = () => Loadable({
//     loader: () => import('containers/views/Profile/ProfileScreen'),
//     loading: Loading,
// });
const router = [
    { component: LoadableComponent(import('containers/views/Home/HomeScreen')), path: constants.path.home },
    { component: LoadableComponent(import('containers/views/Register/RegisterScreen')), path: constants.path.register },
    { component: LoadableComponent(import('containers/views/Profile/ProfileScreen')), path: constants.path.profile },
]

export default router
