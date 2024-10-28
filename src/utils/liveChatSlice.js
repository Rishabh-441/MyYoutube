import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: [
            {
                name: "Rishabh Tiwari",
                message: "Hey bero how are you???"
            }
        ]
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(20, 1);
            state.messages.unshift(action.payload);
            
        }
    }
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;