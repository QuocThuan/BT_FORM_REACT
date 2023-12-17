import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {xoaSinhVien} from './../redux/slides/nguoiDungSlice'


const Table = () => {
  const { arrSinhVien } = useSelector((state) => state.nguoiDungSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="">
          <tr className="text-xl font-bold bg-black text-white ">
            <th className="w-[212px]">Mã sinh viên</th>
            <th className="w-[400px]">Họ tên</th>
            <th className="w-[350px]">Số điện thoại</th>
            <th className="w-[400px]">Email</th>
            <th className="w-[150px]">Hành động</th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {arrSinhVien.map((item, index) => {
            return (
              <tr>
                <td>{item.maSinhVien}</td>
                <td>{item.hoTen}</td>
                <td>{item.soDT}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={()=>{dispatch(xoaSinhVien(item.maSinhVien))}} className="bg-red-500 p-2 mr-2">Xóa</button>
                  <button className="bg-yellow-500 p-2">Sửa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
