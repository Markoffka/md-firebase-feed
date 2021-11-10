import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/authStateAtom';

function withAuth(WrappedComponent) {
  return function Wrap(props) {
    const auth = useRecoilValue(authState);
    const router = useRouter();
    useEffect(() => {
      if (auth == null) router.replace('/login');
    }, [auth, router]);

    if (auth == null) return null;

    return <WrappedComponent {...props} />;
  };
}

export { withAuth };
