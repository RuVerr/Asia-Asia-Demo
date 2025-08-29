import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Читаем из localStorage прямо при инициализации initialState
const savedUser = localStorage.getItem("user");
const parsedUser = savedUser ? JSON.parse(savedUser) : null;

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const stored = JSON.parse(localStorage.getItem("user"));
  if (!stored || !stored.id) throw new Error("Пользователь не найден");

  // const res = await fetch(`http://localhost:3004/user/${stored.id}`);
  if (!res.ok) throw new Error("Ошибка загрузки пользователя");

  return await res.json();
});

const authSlices = createSlice({
  name: "auth",
  initialState: {
    user: parsedUser,
    loading: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });

    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const { logout, login } = authSlices.actions;
export default authSlices.reducer;
