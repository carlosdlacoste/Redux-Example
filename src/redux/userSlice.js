import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("getUser", async () =>{
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await resp.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})

const initialState = {
    name: "",
    username: "",
    email: "",
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // addUser: (state, action) => {
        //     const {name, username, email} = action.payload
        //     state.name = name
        //     state.username = username
        //     state.email = email
        //     state.loading = false
        //     state.error = null
        // },
        changeEmail: (state, action) => {
            state.email = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                const {name, username, email} = action.payload
                state.name = name
                state.username = username
                state.email = email
                state.loading = false
                state.error = null
            })
            .addCase(getUser.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const {addUser, changeEmail} = userSlice.actions
export default userSlice.reducer