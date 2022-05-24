import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	msgs: [],
	books: [],
	orders: [],
	mesg: [],
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setBooks: (state, action) => {
			if (action.payload.books === null) {
				state.books = [];
			} else {
				state.books = action.payload.books;
			}
		},
		setMsgs: (state, action) => {
			if (action.payload.msgs === null) {
				state.msgs = [];
			} else {
				state.msgs = action.payload.msgs;
			}
		},
		setOrders: (state, action) => {
			if (action.payload.orders === null) {
				state.orders = [];
			} else {
				state.orders = action.payload.orders;
			}
		},
		setChat: (state, action) => {
			if (action.payload.mesg === null) {
				state.mesg = [];
			} else {
				state.mesg = action.payload.mesg;
			}
		},
	},
});

export const { setBooks, setMsgs, setOrders, setChat } = projectSlice.actions;

export default projectSlice.reducer;
