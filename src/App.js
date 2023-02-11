import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SecondPage from "./secondPage";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      sex: "",
      co: "",
      weight: "",
      bp: "",
      temp: "",
      time: "",
      date: "",
      presentComplaints: "",
      pastHistory: "",
      findings: "",
      provDiagnosis: "",
      doctorTab: true,
      patientHistory: "",
      medicinePageTab: false,
      isHtn: false,
      isDm: false,
      isBa: false,
      isCad: false,
      isCkd: false,
      isThyroid: false,
      isDrug: false,
      userLoggedIn: false,
    };
  }
  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onChangeHtn = () => {
    this.setState((initialState) => ({
      isHtn: !initialState.isHtn,
    }));
  };
  onChangeDm = () => {
    this.setState((initialState) => ({
      isDm: !initialState.isDm,
    }));
  };
  onChangeBa = () => {
    this.setState((initialState) => ({
      isBa: !initialState.isBa,
    }));
  };
  onChangeCad = () => {
    this.setState((initialState) => ({
      isCad: !initialState.isCad,
    }));
  };
  onChangeCkd = () => {
    this.setState((initialState) => ({
      isCkd: !initialState.isCkd,
    }));
  };
  onChangeThyroid = () => {
    this.setState((initialState) => ({
      isThyroid: !initialState.isThyroid,
    }));
  };
  onChangeDrug = () => {
    this.setState((initialState) => ({
      isDrug: !initialState.isDrug,
    }));
  };

  handleSubmit = () => {
    const state = this.state;
    const userData = {
      patientName: state.name,
      age: state.age,
      sex: state.sex,
      co: state.co,
      weight: state.weight,
      bp: state.bp,
      temp: state.temp,
      time: state.time,
      date: state.date,
      presentComplaints: state.presentComplaints,
      pastHistory: state.pastHistory,
      findings: state.findings,
      provDiagnosis: state.provDiagnosis,
      isHtn: state.isHtn,
      isDm: state.isDm,
      isBa: state.isBa,
      isCad: state.isCad,
      isCkd: state.isCkd,
      isThyroid: state.isThyroid,
      isDrug: state.isDrug,
    };
    this.setState({
      patientHistory: userData,
      doctorTab: false,
      medicinePageTab: true,
    });
  };

  onBackClick = () => {
    this.setState({
      doctorTab: true,
      medicinePageTab: false,
    });
  };

  render() {
    const date = moment(new Date()).format("YYYY-MM-DD");
    return (
      <>
        {this.state.doctorTab && (
          <div className="App container">
            <div className="input_fields patient-name">
              <div className="col-6">
                <label>Patient Name:</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeInput}
                />
              </div>
              <label>Age:</label>
              <div className="col-6">
                <input
                  type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields sex-field">
              <div className="col-6">
                <label className="sex">Sex:</label>
                <input
                  type="radio"
                  className="radioButton"
                  name="sex"
                  value="M"
                  onChange={(e) => this.onChangeInput(e)}
                ></input>
                <label className="">
                  <i className="fas fa-male"></i>
                </label>
                <input
                  type="radio"
                  className="radioButton"
                  name="sex"
                  value="F"
                  onChange={(e) => this.onChangeInput(e)}
                ></input>
                <label className="">
                  <i className="fas fa-female"></i>
                </label>
              </div>
              <div className="col-6">
                <label>C/o:</label>
                <input
                  type="text"
                  name="co"
                  value={this.state.co}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <label>Weight:</label>
                <input
                  type="text"
                  name="weight"
                  value={this.state.weight}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-6">
                <label>B.P:</label>
                <input
                  type="text"
                  name="bp"
                  value={this.state.bp}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <label>Temp.:</label>
                <input
                  type="text"
                  name="temp"
                  value={this.state.temp}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-6">
                <label>Time:</label>
                <input
                  type="time"
                  name="time"
                  value={this.state.time}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChangeInput}
                  min={date}
                />
              </div>
              <div className="col-6">
                <label>Present Complaints with Duration:</label>
                <textarea
                  name="presentComplaints"
                  className="text-area"
                  value={this.state.presentComplaints}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <label>Past History:</label>
                <textarea
                  name="pastHistory"
                  className="text-area"
                  value={this.state.pastHistory}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
              <div className="col-6">
                <label>Findings:</label>
                <textarea
                  name="findings"
                  className="text-area"
                  value={this.state.findings}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
            </div>
            <div className="input_fields weigth-field">
              <div className="col-8">
                <label>Provisional Diagnosis:</label>
                <textarea
                  name="provDiagnosis"
                  className="text-area"
                  value={this.state.provDiagnosis}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-1">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isHtn}
                    onChange={this.onChangeHtn}
                    className="form-check-input pr-2"
                  />
                  HTN
                </label>
              </div>
              <div className="col-1">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isDm}
                    onChange={this.onChangeDm}
                    className="form-check-input pr-2"
                  />
                  DM
                </label>
              </div>
              <div className="col-1">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isBa}
                    onChange={this.onChangeBa}
                    className="form-check-input pr-2"
                  />
                  BA
                </label>
              </div>
              <div className="col-1">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isCad}
                    onChange={this.onChangeCad}
                    className="form-check-input pr-2"
                  />
                  CAD
                </label>
              </div>
              <div className="col-1">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isCkd}
                    onChange={this.onChangeCkd}
                    className="form-check-input pr-2"
                  />
                  CKD
                </label>
              </div>
              <div className="col-3">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isThyroid}
                    onChange={this.onChangeThyroid}
                    className="form-check-input pr-2"
                  />
                  THYROID DISORDER
                </label>
              </div>
              <div className="col-3">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    checked={this.state.isDrug}
                    onChange={this.onChangeDrug}
                    className="form-check-input pr-2"
                  />
                  DRUG ALLERGIES
                </label>
              </div>
            </div>
            <div className="button-field">
              <button className="next-button" onClick={this.handleSubmit}>
                Next
              </button>
            </div>
          </div>
        )}
        {this.state.medicinePageTab && (
          <SecondPage
            patientHistory={this.state.patientHistory}
            onBackClick={this.onBackClick}
          />
        )}
      </>
    );
  }
}

export default App;