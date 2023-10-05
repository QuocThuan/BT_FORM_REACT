import React, { Component } from "react";
import FormThongTin from "./FormThongTin";
import "./style.scss";
import ChoNgoi from "./ChoNgoi";
import ThongTinChoNgoi from "./ThongTinChoNgoi";

export default class BaiTapDatVeXemPhim extends Component {
  render() {
    return (
      <div id="bg">
        <h1 className="text-center text-white py-3">MOVIE SEAT SELECTION</h1>
        <div className="content px-4">
          <FormThongTin />
          <ChoNgoi />
          <ThongTinChoNgoi />
        </div>
        <p className="mt-4 py-4 text-center text-white">
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          W3layouts
        </p>
      </div>
    );
  }
}
