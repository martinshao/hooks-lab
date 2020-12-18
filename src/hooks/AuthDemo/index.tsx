import React from 'react'
import { Providers, useAuth } from 'react-use-auth'
import { Button } from 'antd'

function App(props) {
  return (
    <Providers>
      {
        props.children
      }
    </Providers>
  )
}

function NavbarContainer(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Logo(props) {
  return (
    <div>{props.children}</div>
  )
}

function Menu(props) {
  return (
    <div>{props.children}</div>
  )
}

function Link(props) {
  return (
    <a href={props.to}></a>
  )
}

function NavBar(props) {
  const auth = useAuth()

  return (
    <NavbarContainer>
      <Logo />
      <Menu>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {
          auth.user ? (
            <>
              <Link to="/account">Account ({auth.user.email})</Link>
              <Button onClick={() => auth.signout()}>Signout</Button>
            </>
          ) : (
            <Link to="/signin">Signin</Link>
          )
        }
      </Menu>
    </NavbarContainer>
  )
}