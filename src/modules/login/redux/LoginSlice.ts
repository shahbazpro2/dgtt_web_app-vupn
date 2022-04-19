import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
    modalVisible: boolean,
}

const initialState: LoginState = {
    modalVisible: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleLoginModal: (state) => {
            state.modalVisible = !state.modalVisible;
        }
    }
})

export const { toggleLoginModal } = loginSlice.actions;
export default loginSlice.reducer;