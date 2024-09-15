import { useAppSelector } from '../../app/hooks';
import { selectAllPosts } from './postSlice';

import AddFormPost from './AddFormPost';

const PostList = () => {
  const posts = useAppSelector(selectAllPosts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.id}</p>
        </div>
      ))}
      ----------------------------------------------------------------
      <AddFormPost />
    </div>
  );
};

export default PostList;
