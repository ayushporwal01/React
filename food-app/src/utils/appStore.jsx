const { configureStore, createReducer } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: createReducer,
  },
});

export default appStore;
