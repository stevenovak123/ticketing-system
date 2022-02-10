import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initalState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		console.log(user)
	}
)
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	console.log(user)
})

export const authSlice = createSlice({
	name: 'auth',
	initalState,
	reducers: {},
	extraReducers: (builder) => {},
})

export default authSlice.reducer