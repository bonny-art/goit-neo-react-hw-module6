import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { configureStore } from "@reduxjs/toolkit";

const contactsConfig = {
  key: "contacts",
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsConfig,
  contactsReducer
);

const rootReducer = {
  contacts: persistedContactsReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
