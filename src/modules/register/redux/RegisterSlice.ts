import { createSlice } from "@reduxjs/toolkit";

interface RegisterState {
    modalVisible: boolean,
}

const initialState: RegisterState = {
    modalVisible: false,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        toggleRegisterModal: (state) => {
            state.modalVisible = !state.modalVisible;
        }
    }
})

export const { toggleRegisterModal } = registerSlice.actions;
export default registerSlice.reducer;