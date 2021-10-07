import Link from 'next/link';
import { useList } from 'react-use';
import { Container, MenuButton, MenuContainer } from './Header.styled';
const Header = ({ initialMenuList }) => {
  const [list, { filter }] = useList(initialMenuList);

  return (
    <>
      <Container>
        <MenuContainer>
          {list.map((e) => (
            <Link href={e.href} passHref key={e.href}>
              <a>
                <MenuButton>{e.title}</MenuButton>
              </a>
            </Link>
          ))}
        </MenuContainer>
      </Container>
    </>
  );
};

export { Header };
