const stateDatVeReducer = {
  value: {
    name: "",
    number: "",
  },
  display: "none",
  thongTinVe: {
    name: "",
    number: "",
    ghe: "",
  },
};

export const datVeReducer = (state = stateDatVeReducer, action) => {
  const newValue = { ...state.value };
  switch (action.type) {
    case "HANDLE_ON_CHANGE":
      const { id, value } = action.payload;
      newValue[id] = value;
      // console.log(newValue);
      return { ...state, value: newValue };
    case "HANDLE_SELECT":
      // console.log(state);
      // console.log(action.payload);
      if (newValue.name === "" && newValue.number === "") {
        alert("Please Enter your Name and Number of Seats");
        return { ...state, display: "none" };
      } else {
        const { display } = action.payload;
        return { ...state, display: display };
      }
    case "HANDLE_CONFIRM":
      // console.log(action.payload);
      // console.log(state);
      const { arrSeat } = action.payload;
      return {
        ...state,
        thongTinVe: { ...state.value, ghe: arrSeat.join(",") },
      };

    default:
      return state;
  }
};
