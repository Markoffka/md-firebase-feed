import { useContx } from '../context';

import { StyledPosts, StyledPost } from './styles';

function Posts(props) {
  const { posts } = useContx();
  return (
    <StyledPosts>
      {posts.length &&
        posts.map((e) => {
          return <Post key={e.id} data={e} />;
        })}
    </StyledPosts>
  );
}

function Post(props) {
  return (
    <StyledPost>
      <h4>{props.data.text}</h4>
    </StyledPost>
  );
}

export { Posts };
