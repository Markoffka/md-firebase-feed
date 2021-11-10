import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Dashboard from '../components/Views/Dashboard';

const HomePage = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Dashboard />
      </StyledWrapper>
    </>
  );
};

export default HomePage;

const StyledWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  height: 100%;
  width: 480px;
`;

export function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav className="bp3-navbar bp3-dark bp3-fixedOnTop">
      <div style={{ margin: '0 auto', width: '480px' }}>
        <div className="bp3-navbar-group bp3-align-left">
          <div className="bp3-navbar-heading">Nunito board</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button
            className="bp3-button bp3-minimal bp3-icon-home"
            onClick={() => router.push('/')}
          >
            Home
          </button>

          <span className="bp3-navbar-divider"></span>
          {session ? (
            <button
              className="bp3-button bp3-minimal bp3-icon-log-out"
              onClick={signOut}
            ></button>
          ) : (
            <button
              className="bp3-button bp3-minimal bp3-icon-log-in"
              onClick={signIn}
            ></button>
          )}
        </div>
      </div>
    </nav>
  );
}
