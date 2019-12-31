import React, { Component } from 'react'
import useStateWithCallback from 'utils/stateUtils'

const LoginScreen = () => {
    const [state, setState] = useStateWithCallback(0)
    return (
        <div>
            LoginScreen
            </div>
    )
}

export default LoginScreen
