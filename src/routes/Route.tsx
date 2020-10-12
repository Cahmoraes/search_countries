import React from 'react'
import {
  Route as RouteDOM,
  RouteProps as RoutePropsDOM,
  Redirect
} from 'react-router-dom'

interface RouteProps extends RoutePropsDOM {
  isProtected?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isProtected = false, component: Component, ...rest }) => {
  return (
    <RouteDOM
      {...rest}
      render={({ location }) => isProtected ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      ) : (
          <Component />
        )}
    />
  )
}

export default Route