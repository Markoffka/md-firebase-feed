import { getCsrfToken, signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      csrfToken: csrfToken,
    },
    onSubmit: ({ email, password }) => {
      signIn('credentials', {
        email,
        password,
        callbackUrl: window.location.origin,
        redirect: false,
      }).then(function (result) {
        if (result.error !== null) {
          if (result.status === 401) {
            setError(
              'Your username/password combination was incorrect. Please try again'
            );
          } else {
            setError(result.error);
          }
        } else {
          router.push(result.url);
        }
      });
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign in with Email</button>
      <p>{error}</p>
    </form>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
