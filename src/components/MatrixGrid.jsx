import Box from "./Box";
import { useDispatch, useSelector } from "react-redux";
import {
  HandleEnterbutton,
  IncrementCount,
  FindSuccess,
} from "./Redux/Functions";
import { useState } from "react";
const Grid = () => {
  const { Grid2, player1, count } = useSelector((store) => store.GridStore);

  const [newValue, setNewValue] = useState("");
  const [newRow, setNewRow] = useState(10);
  const [newCol, setNewCol] = useState(10);
  const [whether, setWhethernot] = useState("");
  const dispatch = useDispatch();

  const FindErrorInput = (InputValue) => {
    console.log(InputValue);
    setWhethernot(InputValue);
  };

  const HandleEnterbutton2 = () => {
    if (newValue === "X" || newValue === "O") {
      dispatch(
        HandleEnterbutton({ data1: newValue, data2: newRow, data3: newCol })
      );

      dispatch(FindSuccess({ data1: newValue, data2: newRow, data3: newCol }));

      dispatch(
        IncrementCount({ data1: newValue, data2: newRow, data3: newCol })
      );
    }
  };

  const HandleInput = (value2, row, col) => {
    setNewValue(value2);
    setNewRow(row);
    setNewCol(col);
  };

  return (
    <>
      <div>
        <span
          className="PlayerBattle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {player1 ? (
            <p style={{ fontSize: "2rem" }}>Player 1 turn</p>
          ) : (
            <p style={{ fontSize: "2rem" }}>Player 2 turn </p>
          )}
        </span>

        {whether ? (
          <p
            className="ErrorMessages"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Please choose appropriate symbol
          </p>
        ) : null}

        <div
          className="Center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <div className="WholeBox">
            {Grid2.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((cell, columnIndex) => (
                  <span key={columnIndex}>
                    <Box
                      HandleInput={HandleInput}
                      FindErrorInput={FindErrorInput}
                      row={rowIndex}
                      col={columnIndex}
                    ></Box>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          className="btn btn-success Addbutton"
          style={{ marginTop: "5%", marginLeft: "47%" }}
          onClick={HandleEnterbutton2}
        >
          Success
        </button>
      </div>
    </>
  );
};

export default Grid;
