import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../modules/login/redux/LoginSlice';
import registerReducer from '../modules/register/redux/RegisterSlice';
import forgotPasswordReducer from '../modules/forgot-password/redux/ForgotPasswordSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        forgotPassword: forgotPasswordReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch