import router from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { Dashboard } from '../../components/Dashboard';
import firebase from '../../libs/firebase';
const DashboardPage = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  useEffect(() => {
    if (!user && !loading) {
      router.replace('/login');
    }
  }, []);

  const signOut = () => {
    firebase.auth().signOut();
    router.replace('/');
  };

  return (
    <Dashboard>
      <Dashboard.List />
    </Dashboard>
  );
};

export default DashboardPage;

const PreDashboard = styled.div`
  padding-top: 56px;
`;
