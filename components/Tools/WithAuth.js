import { Button, Card, H2, H3 } from '@blueprintjs/core';
import { signIn, useSession } from 'next-auth/react';
import styled from 'styled-components';

export default function WithAuth(WrapperComponent) {
  return function HOC(props) {
    const session = useSession();
    if (session.status !== 'authenticated')
      return (
        <Center>
          <Card style={{ width: '100%' }}>
            <H3 style={{ textAlign: 'center' }}>Hello world</H3>
            <H2>Hello user!</H2>
          </Card>
        </Center>
      );
    return <WrapperComponent {...props} />;
  };
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
`;
