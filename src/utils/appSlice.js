import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
	name: 'app',
	initialState: {
		isMenuOpen: true
	},
	reducers: {
		toggleMenu: state => {
			state.isMenuOpen = !state.isMenuOpen;
		}
	}
});

export const { toggleMenu } = appSlice.actions;
//TODO: Why we are using appSlice.reducer here not appSlice.reducers
export default appSlice.reducer;
