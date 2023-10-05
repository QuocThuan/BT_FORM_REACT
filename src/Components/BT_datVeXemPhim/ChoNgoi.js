import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";

class ChoNgoi extends Component {
  arr = ["A", "B", "C", "D", "E", "", "F", "G", "H", "I", "J"];
  render() {
    return (
      <div className="pt-3 px-4">
        <ul className="px-4">
          <li className="choNgoi chon text-white">Selected Seat</li>
          <li className="choNgoi duocDat text-white">Reserved Seat</li>
          <li className="choNgoi trong text-white">Empty Seat</li>
        </ul>
        <div
          className=" w-50 justify-content-center px-4 mx-auto"
          style={{
            backgroundColor: "orange",
            display: this.props.display,
          }}
        >
          Please Select your Seats NOW!
        </div>
        <div className="px-4 text-white">
          <table className="text-center w-100">
            <thead>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th></th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
            </thead>
            <tbody>
              {this.arr.map((item, index) => {
                return item === "" ? (
                  <tr className="loiDi2"></tr>
                ) : (
                  <tr key={index}>
                    <td>{item}</td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}1`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}2`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}3`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}4`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}5`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}6`}
                      ></input>
                    </td>
                    <td class="loiDi"></td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}7`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}8`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}9`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}10`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}11`}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="ghe"
                        value={`${item}12`}
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="screen px-4">SCREEN THIS WAY</div>
        <div className="buttonConfirm text-center mt-3">
          <button
            className="btn btn-light px-4 py-2 "
            onClick={this.props.handleConfirm}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.datVeReducer.display,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleConfirm: () => {
      const arrSeat = [];
      const arrInput = document.querySelectorAll("input.ghe:checked");
      for (let item of arrInput) {
        arrSeat.push(item.value);
      }
      console.log(arrSeat);
      dispatch({
        type: "HANDLE_CONFIRM",
        payload: {
          arrSeat,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoNgoi);
