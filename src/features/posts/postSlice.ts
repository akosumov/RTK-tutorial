import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Post {
  id: string;
  title: string;
}

type PostsState = Post[];

const initialState: PostsState = [
  { id: '1', title: 'Hello  this is first post' },
  { id: '2', title: 'Hi this is second post' }
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title
          }
        };
      }
    }
  }
});

export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
