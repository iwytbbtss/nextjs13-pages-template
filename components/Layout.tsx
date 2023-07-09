import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (<>
    <Header>Hello Next.js</Header>
    <Main>{children}</Main>
  </>
  );
};

const Header = styled.header`
font-size: 2rem;
text-align: center;
`;

const Main = styled.main`
  margin: auto;
  display: flex;
  justify-content: center;
`;

export default Layout;
