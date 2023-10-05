import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";

class ThongTinChoNgoi extends Component {
  render() {
    console.log(this.props.thongTinVe);
    return (
      <div className="mt-4 px-4">
        <div className="mt-4">
          <table>
            <tr>
              <td className="title">Name</td>
              <td className="trongTD"></td>
              <td className="title">Number of Seats</td>
              <td className="trongTD"></td>
              <td className="title">Seats</td>
            </tr>
            <tr className="trong"></tr>
            <tr>
              <td className="showThongTin text-dark">
                {this.props.thongTinVe.name}
              </td>
              <td className="trongTD"></td>
              <td className="showThongTin text-dark">
                {this.props.thongTinVe.number}
              </td>
              <td className="trongTD"></td>
              <td className="showThongTin text-dark">
                {this.props.thongTinVe.ghe}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thongTinVe: state.datVeReducer.thongTinVe,
  };
};

export default connect(mapStateToProps)(ThongTinChoNgoi);
