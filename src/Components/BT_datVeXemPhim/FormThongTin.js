import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";

class FormThongTin extends Component {
  // handleSelectEmpty = () => {
  //   console.log(this.props);
  //   const { name, number } = this.props.giaTri;
  //   if (name == "" && number == "") {
  //     alert("Please Enter your Name and Number of Seats");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };
  render() {
    return (
      <div className="pt-5 px-4 ">
        <h2 className=" pb-3">
          Fill The Required Details Below And Select Your Seats
        </h2>
        <div className="row ">
          <div className="col-7">
            <div class="mb-3">
              <label for="" class="form-label text-white">
                Name <span className="text-danger">*</span>
              </label>
              <input
                onChange={this.props.handleOnChange}
                type="text"
                class="form-control text-dark"
                name=""
                id="name"
              />
            </div>
          </div>
          <div className="col-5">
            <div class="mb-3">
              <label for="" class="form-label text-white">
                Number of Seats <span className="text-danger">*</span>
              </label>
              <input
                onChange={this.props.handleOnChange}
                type="text"
                class="form-control text-dark"
                name=""
                id="number"
              />
            </div>
          </div>
        </div>
        <button
          onClick={this.props.handleSelect}
          className="btn btn-light px-4 py-1 mb-3 "
        >
          Start Selecting
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    giaTri: state.datVeReducer.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnChange: (event) => {
      const { id, value } = event.target;
      dispatch({
        type: "HANDLE_ON_CHANGE",
        payload: {
          id,
          value,
        },
      });
    },
    handleSelect: () => {
      // const select = handleSelectEmpty();
      dispatch({
        type: "HANDLE_SELECT",
        payload: {
          display: "flex",
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormThongTin);
