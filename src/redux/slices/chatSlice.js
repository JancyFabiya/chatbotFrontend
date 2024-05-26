import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  messages: [],
  status: 'idle',
  error: null,
};

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message, { getState }) => {
    const { messages } = getState().chat;
    const response = await axios.post('http://localhost:8080', {
      chats: [...messages, { role: 'user', content: message }],
    });
    console.log('res',response);

    return { role: 'bot', content: response.data.output };
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addUserMessage } = chatSlice.actions;

export default chatSlice.reducer;