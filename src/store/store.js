import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import keywordSlice from "./keywordSlice";
import loginSlice from "./loginSlice";

const reducer = combineReducers({
	keyword: keywordSlice,
	auth: loginSlice,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
const persistor = persistStore(store);

export { store, persistor };
