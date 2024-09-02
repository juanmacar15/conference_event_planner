import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://pixabay.com/images/download/business-20031_640.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
  },
  {
      img: "https://cdn.pixabay.com/photo/2020/02/08/22/27/soundboks-4831442_960_720.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
  },
  {
      img: "https://cdn.pixabay.com/photo/2021/05/24/14/46/old-microphone-6279518_640.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
  },
  {
      img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
  },

  {
      img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
  },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item){
        item.quantity ++;
      }
      
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item && item.quantity > 0){
        item.quantity --;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
