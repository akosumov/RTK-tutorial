import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { postAdded } from './postSlice';

const AddFormPost = () => {
  const [title, setTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  const addPost = () => {
    if (title) {
      dispatch(postAdded(title));
    }
    setTitle('');
  };

  return (
    <div>
      <h2>Add new post</h2>
      <div>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <button type='submit' onClick={addPost}>
        Add post
      </button>
    </div>
  );
};

export default AddFormPost;
