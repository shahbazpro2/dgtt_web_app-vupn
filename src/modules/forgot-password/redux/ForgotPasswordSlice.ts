import { createSlice } from "@reduxjs/toolkit";

interface ForgotPasswordState {
    modalVisible: boolean,
}

const initialState: ForgotPasswordState = {
    modalVisible: false,
}

export const forgotPasswordSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleForgotPasswordModal: (state) => {
            state.modalVisible = !state.modalVisible;
        }
    }
})

export const { toggleForgotPasswordModal } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;