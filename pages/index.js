import styled, { ThemeProvider } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useList } from 'react-use';

import { initializeApp } from 'firebase/app';
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  getFirestore,
} from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const db = getFirestore();

export default function Home() {
  const [theme, setTheme] = useState({
    borderRadius: '6',
  });

  /**
   * 
   * code
    createdAt {@field Date}
    creator /users/ VaR6x1jzh2t50xEk9hkY
    description
    title
    transit
      current
        [2° N, 2° E]
      end
        [3° N, 3° E]
      start
        [1° N, 1° E]

        */

  const [list, { push, set, removeAt }] = useList([]);

  const [name, setName] = useState('');
  const [data, setData] = useState('');

  function onSubmit(e) {
    e?.preventDefault();
    setName('');
    setData('');
    push({ name, data });
  }

  useEffect(() => {
    const collectionRef = collection(db, 'cargos');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      set(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <ThemeProvider {...{ theme }}>
      <StyledWrapper>
        <StyledHeader>
          <HeaderGroup>
            <Button>Home</Button>
            <Button>Details</Button>
          </HeaderGroup>
        </StyledHeader>
        <StyledList>
          <RenderList list={list} />
        </StyledList>
        <Add {...{ name, setName, data, setData, onSubmit }} />
      </StyledWrapper>
    </ThemeProvider>
  );
}

function Add(props) {
  const formRef = useRef();
  return (
    <StyledAdd>
      <Button disabled>Load from server permanent</Button>
      <form onSubmit={props.onSubmit} ref={formRef}>
        <h3>Form:</h3>
        <input
          placeholder="name"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        <input
          placeholder="data"
          value={props.data}
          onChange={(e) => props.setData(e.target.value)}
        />
        <Button onClick={props.onSubmit}>Send</Button>
      </form>
    </StyledAdd>
  );
}

function RenderList(props) {
  return (
    props.list && props.list.map((el, idx) => <RenderItem el={el} key={idx} />)
  );
}

function RenderItem(props) {
  return (
    <StyledListItem>
      <h3>{props.el.title}</h3>
      <p>{props.el.description}</p>
      <pre>{JSON.stringify(props.el.meta_data, null, 2)}</pre>
    </StyledListItem>
  );
}

const StyledBlock = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(220, 225, 230) 0px 1px 0px 0px,
    rgb(231, 232, 236) 0px 0px 0px 1px;
  border-radius: 4px;
`;

const HeaderGroup = styled.div`
  display: flex;
  height: 100%;
`;
const StyledListItem = styled(StyledBlock)`
  h3 {
    font-size: 18pt;
  }
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding: 1em;
  :first-child {
    margin-top: 0;
    margin-bottom: 0;
  }
  :last-child {
    margin-top: 0;
    margin-bottom: 0;
  }
  * {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.25em;
    :first-child {
      margin-top: 0;
      margin-bottom: 0;
    }
    :last-child {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;
const Button = styled.div`
  min-width: 7em;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: 400;
  cursor: pointer;
  ::before,
  ::after {
    content: '';
  }
  ::before {
    content: '[';
    margin-right: 0.5em;
  }
  ::after {
    content: ']';
    margin-left: 0.5em;
  }
  :hover {
    ::after {
      margin-left: 1em;
    }
    ::before {
      margin-right: 1em;
    }
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  padding: ${({ theme }) => `${theme.borderRadius}px`};
  grid-template-areas: ${({ template }) =>
    template
      ? template
      : `
        'h h h h' 
        '. l l a'
        `};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 64px 1fr;
  grid-gap: ${({ theme }) => `${theme.borderRadius}px`};
  background-color: var(--bg-dark);
  width: 100%;
  height: 100vmin;

  color: ${({ theme }) => `${theme.primaryColor}`};
`;

const StyledHeader = styled(StyledBlock)`
  grid-area: h;
`;

const StyledList = styled(StyledBlock)`
  grid-area: l;
  padding: ${({ theme }) => `${theme.borderRadius}px`};
  overflow-y: auto;
`;

const StyledAdd = styled(StyledBlock)`
  grid-area: a;
  form {
    color: #000;
    padding: 1em;
    h3 {
      font-size: 18pt;
    }
    * {
      width: 100%;
      margin-top: 1em;
    }
  }
`;
