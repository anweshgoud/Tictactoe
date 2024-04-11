import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const Grid2 = [];

for (let i = 0; i < 3; i++) {
  Grid2[i] = [];

  for (let j = 0; j < 3; j++) {
    Grid2[i][j] = " ";
  }
}

const GridFunctions = createSlice({
  name: "Grid2",
  initialState: { Grid2, player1: true, player2: false, count: 0 },
  reducers: {
    HandleEnterbutton: (state, action) => {
      const { data1, data2, data3 } = action.payload;
      const nextState = produce(state, (draft) => {
        draft.Grid2[data2][data3] = data1;
      });

      return nextState;
    },

    IncrementCount: (state, action) => {
      const newState = { ...state };
      const { data1, data2, data3 } = action.payload;
      newState.count = newState.count + 1;

      if (newState.count === 9) {
        console.log("Moves are over");
      }
    
      if (newState.count % 2 === 0) {
        newState.player1 = !newState.player1;
        newState.player2 = !newState.player2;
      } else {
        newState.player2 = !newState.player2;
        newState.player1 = !newState.player1;
      }
    
      GridFunctions.actions.FindSuccess(newState, { payload: { data1, data2, data3 } });
    
      return newState;
    },
    

    FindSuccess: (state, action) => {
      const newState = { ...state };
      const { data1, data2, data3 } = action.payload;

      if (newState.Grid2[data2][0] === data1 && newState.Grid2[data2][1] === data1 && newState.Grid2[data2][2] === data1) {
        if(newState.count%2===0){
          console.log("Player1 is winner");
        }
        else{
          console.log("Player2 is Winner");
        }
      }

      if (newState.Grid2[0][data3] === data1 && newState.Grid2[1][data3] === data1 && newState.Grid2[2][data3] === data1) {
        if(newState.count%2===0){
          console.log("Player1 is winner");
        }
        else{
          console.log("Player2 is Winner");
        }
      }

      if (data2 === data3 || data2 + data3 === 2) {
        if (newState.Grid2[0][0] === data1 && newState.Grid2[1][1] === data1 && newState.Grid2[2][2] === data1) {
          if(newState.count%2===0){
            console.log("Player1 is winner");
          }
          else{
            console.log("Player2 is Winner");
          }
        }
        if (newState.Grid2[0][2] === data1 && newState.Grid2[1][1] === data1 && newState.Grid2[2][0] === data1) {
          if(newState.count%2===0){
            console.log("Player1 is winner")
          }
          else{
            console.log("Player2 is Winner");
          }
        }
      }

      return newState;
    },
  },
});

export const { HandleEnterbutton, IncrementCount, FindSuccess } = GridFunctions.actions;
export default GridFunctions;
