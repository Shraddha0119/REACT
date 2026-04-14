import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const api = "https://jsonplaceholder.typicode.com/users"

export const userAPI = createAsyncThunk("user/fetchUsers", async () => {
  const user = await fetch(api);
  return user.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAPI.pending, (state) => {
        // state.loading = true;
      })
      .addCase(userAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        // state.loading = false;
        // state.error = false;
      })
      .addCase(userAPI.rejected, (state) => {
        // state.error = true;
        // state.loading = false;
      });
  },
});

export default userSlice.reducer