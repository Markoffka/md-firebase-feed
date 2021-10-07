import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { Button, Center, Loading, Spinner } from "../components/StyledComponents";
import firebase from '../libs/firebase'

export default function Login () {
  const router = useRouter();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(firebase.auth());

  const Login = async () => {
    signInWithEmailAndPassword(login, password);
  }
  useEffect(() => {
    if (user) router.replace('/dashboard')
  }, [router, user])

  return (
    <>
      <Center {...{ loading }}>
        <LoginStyledContainer>
          <label>
            Username
            <input
              type="text"
              name="Login"
              placeholder="Your login here"
              onChange={(e) => { setLogin(e.target.value) }} />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              name="Login"
              placeholder="Your password here"
              onChange={(e) => { setPassword(e.target.value) }} />
          </label>
          <Button
            onClick={() => { Login(); }}>Login</Button>
          {error &&
            <ErrorMessage>{error.toString()}</ErrorMessage>}
          <FloatButton
            position='left'
            onClick={() => router.back()}>◀</FloatButton>
        </LoginStyledContainer>
      </Center>
    </>
  )
}

const LoginStyledContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  position: relative;
  * + * {
    margin-top: 1em;
  }
`

const ErrorMessage = styled.p`
  border: 1px solid #ff8080;
  padding: 1em;
  color: #ff5353;
`

const FloatButton = styled.button`
  width: 32px;
  height: 32px;
  outline: none;
  border: 0;
  background-color: transparent;

  position: absolute;

  top: -32px;
  left: calc(-32px - 8px);
  :hover {
    background-color: #c3c3c3;
  }
`