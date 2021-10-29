/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CreationCodePage = () => {
  const [state, setState] = useState({});
  const [base64, setBase64] = useState(undefined);
  const [error, setError] = useState('no one parameter');
  const router = useRouter();
  function onChange({ target: { id, value } }) {
    setState((prev) => {
      return { ...prev, ...{ [id]: value } };
    });
  }

  function getValue(s) {
    console.log(s);
    return 'asd';
  }

  function ArrToBase64(arr) {
    let data = arr;
    let buff = Buffer.from(JSON.stringify(data), 'utf8');
    let stringToBase64 = buff.toString('base64');
    return stringToBase64;
  }
  function copyNewUrlToClipboard() {
    navigator.clipboard
      .writeText(`${window.location.origin}/?unrz=${base64}`)
      .then(() => {
        setError();
      })
      .catch((err) => {
        setError('clipboard not allowed');
      });
  }
  useEffect(() => {
    let { first, last, middle, date, pass, code } = state;
    if (!code)
      code = `${Math.round(Math.random() * 9)}${Math.round(Math.random() * 999)} ${Math.round(
        Math.random() * 9,
      )}${Math.round(Math.random() * 999)} ${Math.round(Math.random() * 9)}${Math.round(
        Math.random() * 999,
      )} ${Math.round(Math.random() * 9)}${Math.round(Math.random() * 999)}`;
    let arr = [first, last, middle, date, pass, code];
    try {
      setBase64(ArrToBase64(arr));
    } catch (e) {}
  }, [state]);
  useEffect(() => {
    try {
      if (base64 == undefined || state.length < 1) throw new Error();
      setError();
    } catch (e) {
      setError('Ошибка');
    }
  }, [base64]);
  return (
    <StyledWrapper>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="first"
          value={state['first']}
          placeholder="first name"
          onChange={onChange}
        />
        <input
          type="text"
          id="last"
          value={state['last']}
          placeholder="last name"
          onChange={onChange}
        />
        <input
          type="text"
          id="middle"
          value={state['middle']}
          placeholder="middle name"
          onChange={onChange}
        />
        <input
          type="text"
          id="date"
          value={state['date']}
          placeholder="date (xx.xx.xxxx)"
          onChange={onChange}
        />
        <input
          type="text"
          id="pass"
          value={state['pass']}
          placeholder="1234 5678"
          onChange={onChange}
        />
        <input
          type="text"
          id="code"
          value={state['code']}
          placeholder="xxxxxxxxxxxx (or empty for random)"
          onChange={onChange}
        />
        {error ? (
          <p>{error}</p>
        ) : (
          <button onClick={copyNewUrlToClipboard}>copy url to clipboard</button>
        )}
      </StyledForm>
    </StyledWrapper>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 640px;
  width: 20em;

  * + * {
    margin-top: 1em;
  }
  * {
    width: 100%;
  }
`;
const StyledWrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 95vmin;
`;

export default CreationCodePage;
