import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Table from "./Table";
import {themSinhVien} from './../redux/slides/nguoiDungSlice'

const BaiTapForm = () => {
  const dispatch = useDispatch();
    
  const formik = useFormik({
    initialValues: {
      maSinhVien: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    onSubmit: (value , {resetForm}) => {
        console.log(value)
        dispatch(themSinhVien(value));
        resetForm();
    },
    validationSchema: Yup.object({
      maSinhVien: Yup.string().required("Vui lòng không bỏ trống"),
      hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      soDT: Yup.string().required("Vui lòng không bỏ trống"),
      email: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  const { handleChange, handleSubmit, handleBlur, touched, errors } = formik;
  return (
    <div className="container">
      <p className="text-xl font-bold p-2 my-3 bg-black text-white">
        Thông tin sinh viên{" "}
      </p>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="grid grid-cols-2 gap-5 my-5">
          <div className="mb-1">
            <label
              htmlFor="maSinhVien"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mã sinh viên
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="maSinhVien"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
            {errors.maSinhVien && touched.maSinhVien && (
                <p className="text-red-500 text-sm mt-1">{errors.maSinhVien}</p>
              )}
          </div>
          <div className="mb-1">
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Họ tên
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="hoTen"
              id="hoTen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.hoTen && touched.hoTen && (
                <p className="text-red-500 text-sm mt-1">{errors.hoTen}</p>
              )}
          </div>
          <div className="mb-1">
            <label
              htmlFor="soDT"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Số điện thoại
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="soDT"
              id="soDT"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
            {errors.soDT && touched.soDT && (
                <p className="text-red-500 text-sm mt-1">{errors.soDT}</p>
              )}
          </div>
          <div className="mb-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Thêm sinh viên
        </button>
      </form>
      <div className="mt-4 w-full">
        <Table />
      </div>
    </div>
  );
};

export default BaiTapForm;
