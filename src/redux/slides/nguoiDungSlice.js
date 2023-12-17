import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    arrSinhVien: [],
};

const nguoiDungSlice = createSlice({
    name: "nguoiDung",
    initialState,
    reducers: {
        themSinhVien: (state, action) => {
            // console.log(current(state));
            // console.log(action);
            const newArrSinhVien = [...state.arrSinhVien, action.payload];
            state.arrSinhVien = newArrSinhVien;
        },
        xoaSinhVien: (state, action) => {
            const newArrSinhVien = [...state.arrSinhVien];
            const index = newArrSinhVien.findIndex((sinhVien) => sinhVien.maSinhVien === action.payload);
            // phải chia 2 trường hợp -1 và khác -1
            newArrSinhVien.splice(index, 1);
            state.arrSinhVien = newArrSinhVien;
        }
    },
});

export const { themSinhVien, xoaSinhVien } = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;