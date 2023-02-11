import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Print from "./Print";
import TabletInfo from "./TabletData";

class SecondPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      letterHeadTab: false,
      medicinesTab: true,
      TabletInfoArr: TabletInfo,
      medicine1: [],
      medicine1Res: "",
      isMorning1: false,
      isAfternoon1: false,
      isNight1: false,
      isAfterMorningFood1: false,
      isAfterAfternoonFood1: false,
      isAfterNightFood1: false,
      isBeforeMorningFood1: false,
      isBeforeAfternoonFood1: false,
      isBeforeNightFood1: false,
      medicine2: [],
      isMorning2: false,
      isAfternoon2: false,
      isNight2: false,
      isAfterMorningFood2: false,
      isAfterAfternoonFood2: false,
      isAfterNightFood2: false,
      isBeforeMorningFood2: false,
      isBeforeAfternoonFood2: false,
      isBeforeNightFood2: false,
      medicine3: [],
      isMorning3: false,
      isAfternoon3: false,
      isNight3: false,
      isAfterMorningFood3: false,
      isAfterAfternoonFood3: false,
      isAfterNightFood3: false,
      isBeforeMorningFood3: false,
      isBeforeAfternoonFood3: false,
      isBeforeNightFood3: false,
      medicine4: [],
      isMorning4: false,
      isAfternoon4: false,
      isNight4: false,
      isAfterMorningFood4: false,
      isAfterAfternoonFood4: false,
      isAfterNightFood4: false,
      isBeforeMorningFood4: false,
      isBeforeAfternoonFood4: false,
      isBeforeNightFood4: false,
      medicine5: [],
      isMorning5: false,
      isAfternoon5: false,
      isNight5: false,
      isAfterMorningFood5: false,
      isAfterAfternoonFood5: false,
      isAfterNightFood5: false,
      isBeforeMorningFood5: false,
      isBeforeAfternoonFood5: false,
      isBeforeNightFood5: false,
      medicine6: [],
      isMorning6: false,
      isAfternoon6: false,
      isNight6: false,
      isAfterMorningFood6: false,
      isAfterAfternoonFood6: false,
      isAfterNightFood6: false,
      isBeforeMorningFood6: false,
      isBeforeAfternoonFood6: false,
      isBeforeNightFood6: false,
      duration1: "",
      duration2: "",
      duration3: "",
      duration4: "",
      duration5: "",
      duration6: "",
      medicine7: "",
      medicine8: "",
      diet: "",
      invAdviced: "",
      phyAdviced: "",
      review: "",
      remarks: "",
      medicinesHistory: "",
      patientHistory: this.props.patientHistory,
    };
  }

  componentDidMount() {
    this.setState({ patientHistory: this.props.patientHistory });
    console.log(this.props.patientHistory, "Patient History");
  }

  onChangeInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createData = (word, data) => {
    const re = new RegExp(`${word.toLowerCase()}`);
    return data.filter((item) => re.test(item.toLowerCase()));
  };

  onChangeMorning2 = () => {
    this.setState((initialState) => ({
      isMorning2: !initialState.isMorning2,
    }));
  };
  onChangeAfterMorningFood2 = () => {
    this.setState((initialState) => ({
      isAfterMorningFood2: !initialState.isAfterMorningFood2,
    }));
  };
  onChangeBeforeMorningFood2 = () => {
    this.setState((initialState) => ({
      isBeforeMorningFood2: !initialState.isBeforeMorningFood2,
    }));
  };
  onChangeAfternoon2 = () => {
    this.setState((initialState) => ({
      isAfternoon2: !initialState.isAfternoon2,
    }));
  };
  onChangeAfterAfternoonFood2 = () => {
    this.setState((initialState) => ({
      isAfterAfternoonFood2: !initialState.isAfterAfternoonFood2,
    }));
  };
  onChangeBeforeAfternoonFood2 = () => {
    this.setState((initialState) => ({
      isBeforeAfternoonFood2: !initialState.isBeforeAfternoonFood2,
    }));
  };
  onChangeNight2 = () => {
    this.setState((initialState) => ({
      isNight2: !initialState.isNight2,
    }));
  };
  onChangeAfterNightFood2 = () => {
    this.setState((initialState) => ({
      isAfterNightFood2: !initialState.isAfterNightFood2,
    }));
  };
  onChangeBeforeNightFood2 = () => {
    this.setState((initialState) => ({
      isBeforeNightFood2: !initialState.isBeforeNightFood2,
    }));
  };

  onChangeMorning3 = () => {
    this.setState((initialState) => ({
      isMorning3: !initialState.isMorning3,
    }));
  };
  onChangeNight3 = () => {
    this.setState((initialState) => ({
      isNight3: !initialState.isNight3,
    }));
  };
  onChangeAfterNightFood3 = () => {
    this.setState((initialState) => ({
      isAfterNightFood3: !initialState.isAfterNightFood3,
    }));
  };
  onChangeBeforeNightFood3 = () => {
    this.setState((initialState) => ({
      isBeforeNightFood3: !initialState.isBeforeNightFood3,
    }));
  };

  onChangeMorning4 = () => {
    this.setState((initialState) => ({
      isMorning4: !initialState.isMorning4,
    }));
  };
  onChangeAfterMorningFood4 = () => {
    this.setState((initialState) => ({
      isAfterMorningFood4: !initialState.isAfterMorningFood4,
    }));
  };
  onChangeBeforeMorningFood4 = () => {
    this.setState((initialState) => ({
      isBeforeMorningFood4: !initialState.isBeforeMorningFood4,
    }));
  };
  onChangeAfternoon4 = () => {
    this.setState((initialState) => ({
      isAfternoon4: !initialState.isAfternoon4,
    }));
  };
  onChangeAfterAfternoonFood4 = () => {
    this.setState((initialState) => ({
      isAfterAfternoonFood4: !initialState.isAfterAfternoonFood4,
    }));
  };
  onChangeBeforeAfternoonFood4 = () => {
    this.setState((initialState) => ({
      isBeforeAfternoonFood4: !initialState.isBeforeAfternoonFood4,
    }));
  };
  onChangeNight4 = () => {
    this.setState((initialState) => ({
      isNight4: !initialState.isNight4,
    }));
  };
  onChangeAfterNightFood4 = () => {
    this.setState((initialState) => ({
      isAfterNightFood4: !initialState.isAfterNightFood4,
    }));
  };
  onChangeBeforeNightFood4 = () => {
    this.setState((initialState) => ({
      isBeforeNightFood4: !initialState.isBeforeNightFood4,
    }));
  };

  onChangeMorning5 = () => {
    this.setState((initialState) => ({
      isMorning5: !initialState.isMorning5,
    }));
  };

  onChangeAfternoon5 = () => {
    this.setState((initialState) => ({
      isAfternoon5: !initialState.isAfternoon5,
    }));
  };
  onChangeAfterAfternoonFood5 = () => {
    this.setState((initialState) => ({
      isAfterAfternoonFood5: !initialState.isAfterAfternoonFood5,
    }));
  };
  onChangeBeforeAfternoonFood5 = () => {
    this.setState((initialState) => ({
      isBeforeAfternoonFood5: !initialState.isBeforeAfternoonFood5,
    }));
  };
  onChangeNight5 = () => {
    this.setState((initialState) => ({
      isNight5: !initialState.isNight5,
    }));
  };
  onChangeAfterNightFood5 = () => {
    this.setState((initialState) => ({
      isAfterNightFood5: !initialState.isAfterNightFood5,
    }));
  };
  onChangeBeforeNightFood5 = () => {
    this.setState((initialState) => ({
      isBeforeNightFood5: !initialState.isBeforeNightFood5,
    }));
  };

  onChangeAfternoon6 = () => {
    this.setState((initialState) => ({
      isAfternoon6: !initialState.isAfternoon6,
    }));
  };
  onChangeAfterAfternoonFood6 = () => {
    this.setState((initialState) => ({
      isAfterAfternoonFood6: !initialState.isAfterAfternoonFood6,
    }));
  };
  onChangeBeforeAfternoonFood6 = () => {
    this.setState((initialState) => ({
      isBeforeAfternoonFood6: !initialState.isBeforeAfternoonFood6,
    }));
  };
  onChangeNight6 = () => {
    this.setState((initialState) => ({
      isNight6: !initialState.isNight6,
    }));
  };
  onChangeAfterNightFood6 = () => {
    this.setState((initialState) => ({
      isAfterNightFood6: !initialState.isAfterNightFood6,
    }));
  };
  onChangeBeforeNightFood6 = () => {
    this.setState((initialState) => ({
      isBeforeNightFood6: !initialState.isBeforeNightFood6,
    }));
  };

  handleMedicineOne = (medicineOne) => {
    this.setState({ medicineOne: medicineOne });

    if (medicineOne?.foodRelation?.includes(1)) {
      this.setState({ isBeforeMorningFood1: true });
    }
    if (medicineOne?.foodRelation?.includes(2)) {
      this.setState({ isAfterMorningFood1: true });
    }
    if (medicineOne?.foodRelation?.includes(3)) {
      this.setState({ isBeforeAfternoonFood1: true });
    }
    if (medicineOne?.foodRelation?.includes(4)) {
      this.setState({ isAfterAfternoonFood1: true });
    }
    if (medicineOne?.foodRelation?.includes(5)) {
      this.setState({ isBeforeNightFood1: true });
    }
    if (medicineOne?.foodRelation?.includes(6)) {
      this.setState({ isAfterNightFood1: true });
    }
  };

  handleMedicineTwo = (medicineTwo) => {
    this.setState({ medicineTwo: medicineTwo });

    if (medicineTwo?.foodRelation?.includes(1)) {
      this.setState({ isBeforeMorningFood2: true });
    }
    if (medicineTwo?.foodRelation?.includes(2)) {
      this.setState({ isAfterMorningFood2: true });
    }
    if (medicineTwo?.foodRelation?.includes(3)) {
      this.setState({ isBeforeAfternoonFood2: true });
    }
    if (medicineTwo?.foodRelation?.includes(4)) {
      this.setState({ isAfterAfternoonFood2: true });
    }
    if (medicineTwo?.foodRelation?.includes(5)) {
      this.setState({ isBeforeNightFood2: true });
    }
    if (medicineTwo?.foodRelation?.includes(6)) {
      this.setState({ isAfterNightFood2: true });
    }
  };

  handleMedicineThree = (medicineThree) => {
    this.setState({ medicineThree: medicineThree });

    if (medicineThree?.foodRelation?.includes(1)) {
      this.setState({ isBeforeMorningFood3: true });
    }
    if (medicineThree?.foodRelation?.includes(2)) {
      this.setState({ isAfterMorningFood3: true });
    }
    if (medicineThree?.foodRelation?.includes(3)) {
      this.setState({ isBeforeAfternoonFood3: true });
    }
    if (medicineThree?.foodRelation?.includes(4)) {
      this.setState({ isAfterAfternoonFood3: true });
    }
    if (medicineThree?.foodRelation?.includes(5)) {
      this.setState({ isBeforeNightFood3: true });
    }
    if (medicineThree?.foodRelation?.includes(6)) {
      this.setState({ isAfterNightFood3: true });
    }
  };

  handleMedicineFour = (medicineFour) => {
    this.setState({ medicineFour: medicineFour });

    if (medicineFour?.foodRelation?.includes(1)) {
      this.setState({ isBeforeMorningFood4: true });
    }
    if (medicineFour?.foodRelation?.includes(2)) {
      this.setState({ isAfterMorningFood4: true });
    }
    if (medicineFour?.foodRelation?.includes(3)) {
      this.setState({ isBeforeAfternoonFood4: true });
    }
    if (medicineFour?.foodRelation?.includes(4)) {
      this.setState({ isAfterAfternoonFood4: true });
    }
    if (medicineFour?.foodRelation?.includes(5)) {
      this.setState({ isBeforeNightFood4: true });
    }
    if (medicineFour?.foodRelation?.includes(6)) {
      this.setState({ isAfterNightFood4: true });
    }
  };

  handleMedicineFive = (medicineFive) => {
    this.setState({ medicineFive: medicineFive });
    if (medicineFive?.foodRelation?.includes(1)) {
      this.setState({ isBeforeMorningFood5: true });
    }
    if (medicineFive?.foodRelation?.includes(2)) {
      this.setState({ isAfterMorningFood5: true });
    }
    if (medicineFive?.foodRelation?.includes(3)) {
      this.setState({ isBeforeAfternoonFood5: true });
    }
    if (medicineFive?.foodRelation?.includes(4)) {
      this.setState({ isAfterAfternoonFood5: true });
    }
    if (medicineFive?.foodRelation?.includes(5)) {
      this.setState({ isBeforeNightFood5: true });
    }
    if (medicineFive?.foodRelation?.includes(6)) {
      this.setState({ isAfterNightFood5: true });
    }
  };

  handleMedicineSix = (medicineSix) => {
    this.setState({ medicineSix: medicineSix });

    if (medicineSix?.foodRelation?.includes(1)) {
      this.setState({ isBeforeMorningFood6: true });
    }
    if (medicineSix?.foodRelation?.includes(2)) {
      this.setState({ isAfterMorningFood6: true });
    }
    if (medicineSix?.foodRelation?.includes(3)) {
      this.setState({ isBeforeAfternoonFood6: true });
    }
    if (medicineSix?.foodRelation?.includes(4)) {
      this.setState({ isAfterAfternoonFood6: true });
    }
    if (medicineSix?.foodRelation?.includes(5)) {
      this.setState({ isBeforeNightFood6: true });
    }
    if (medicineSix?.foodRelation?.includes(6)) {
      this.setState({ isAfterNightFood6: true });
    }
  };

  handleSubmit = () => {
    const state = this.state;
    const medicinesData = {
      medicine1: state.medicineOne?.value,
      isMorning1: state.isMorning1,
      isAfternoon1: state.isAfternoon1,
      isNight1: state.isNight1,
      isAfterMorningFood1: state.isAfterMorningFood1,
      isAfterAfternoonFood1: state.isAfterAfternoonFood1,
      isAfterNightFood1: state.isAfterNightFood1,
      isBeforeMorningFood1: state.isBeforeMorningFood1,
      isBeforeAfternoonFood1: state.isBeforeAfternoonFood1,
      isBeforeNightFood1: state.isBeforeNightFood1,
      medicine2: state.medicineTwo?.value,
      isMorning2: state.isMorning2,
      isAfternoon2: state.isAfternoon2,
      isNight2: state.isNight2,
      isAfterMorningFood2: state.isAfterMorningFood2,
      isAfterAfternoonFood2: state.isAfterAfternoonFood2,
      isAfterNightFood2: state.isAfterNightFood2,
      isBeforeMorningFood2: state.isBeforeMorningFood2,
      isBeforeAfternoonFood2: state.isBeforeAfternoonFood2,
      isBeforeNightFood2: state.isBeforeNightFood2,
      medicine3: state.medicineThree?.value,
      isMorning3: state.isMorning3,
      isAfternoon3: state.isAfternoon3,
      isNight3: state.isNight3,
      isAfterMorningFood3: state.isAfterMorningFood3,
      isAfterAfternoonFood3: state.isAfterAfternoonFood3,
      isAfterNightFood3: state.isAfterNightFood3,
      isBeforeMorningFood3: state.isBeforeMorningFood3,
      isBeforeAfternoonFood3: state.isBeforeAfternoonFood3,
      isBeforeNightFood3: state.isBeforeNightFood3,
      medicine4: state.medicineFour?.value,
      isMorning4: state.isMorning4,
      isAfternoon4: state.isAfternoon4,
      isNight4: state.isNight4,
      isAfterMorningFood4: state.isAfterMorningFood4,
      isAfterAfternoonFood4: state.isAfterAfternoonFood4,
      isAfterNightFood4: state.isAfterNightFood4,
      isBeforeMorningFood4: state.isBeforeMorningFood4,
      isBeforeAfternoonFood4: state.isBeforeAfternoonFood4,
      isBeforeNightFood4: state.isBeforeNightFood4,
      medicine5: state.medicineFive?.value,
      isMorning5: state.isMorning5,
      isAfternoon5: state.isAfternoon5,
      isNight5: state.isNight5,
      isAfterMorningFood5: state.isAfterMorningFood5,
      isAfterAfternoonFood5: state.isAfterAfternoonFood5,
      isAfterNightFood5: state.isAfterNightFood5,
      isBeforeMorningFood5: state.isBeforeMorningFood5,
      isBeforeAfternoonFood5: state.isBeforeAfternoonFood5,
      isBeforeNightFood5: state.isBeforeNightFood5,
      medicine6: state.medicineSix?.value,
      isMorning6: state.isMorning6,
      isAfternoon6: state.isAfternoon6,
      isNight6: state.isNight6,
      isAfterMorningFood6: state.isAfterMorningFood6,
      isAfterAfternoonFood6: state.isAfterAfternoonFood6,
      isAfterNightFood6: state.isAfterNightFood6,
      isBeforeMorningFood6: state.isBeforeMorningFood6,
      isBeforeAfternoonFood6: state.isBeforeAfternoonFood6,
      isBeforeNightFood6: state.isBeforeNightFood6,
      duration1: state.duration1,
      duration2: state.duration2,
      duration3: state.duration3,
      duration4: state.duration4,
      duration5: state.duration5,
      duration6: state.duration6,
      medicine7: state.medicine7,
      medicine8: state.medicine8,
      diet: state.diet,
      invAdviced: state.invAdviced,
      phyAdviced: state.phyAdviced,
      review: state.review,
      remarks: state.remarks,
      patientHistory: state.patientHistory,
    };
    this.setState({
      medicinesHistory: medicinesData,
      letterHeadTab: true,
      medicinesTab: false,
    });
  };
  // onclick back function from icon to go to previous page
  handleBack = () => {
    // Callback function to go to parent component in the previous page
    this.props.onBackClick();
  };
  render() {
    //window.scrollTo(0,0);

    // Using this for binding state to first medicine dropwon, duration and timings
    const {
      medicineOne,
      medicineTwo,
      medicineThree,
      medicineFour,
      medicineFive,
      medicinesix,
    } = this.state;

    return (
      <>
        {this.state.medicinesTab && (
          <div className="App container">
            {/*use this arrow to go back to previous page */}
            <i className="arrow left" onClick={this.handleBack}></i>
            <h2>Medicines</h2>
            <div className="input_fields weight-field">
              <div className="col-6">
                <div className="medicine-field">
                  <label>Medicine1:</label>
                  <Select
                    className="medicine-dropdown"
                    value={medicineOne}
                    onChange={this.handleMedicineOne}
                    options={this.state.TabletInfoArr}
                  />
                </div>
              </div>
              <div className="col-6 duration-field">
                <label>Duration-1:</label>
                <input
                  type="text"
                  name="duration1"
                  value={this.state.duration1}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields input-fields">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        readOnly
                        checked={this.state.medicineOne?.foodRelation?.includes(
                          1
                        )}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        readOnly
                        checked={this.state.medicineOne?.foodRelation?.includes(
                          2
                        )}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Afternoon</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        readOnly
                        checked={this.state.medicineOne?.foodRelation?.includes(
                          3
                        )}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.medicineOne?.foodRelation?.includes(
                          4
                        )}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Night</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.medicineOne?.foodRelation?.includes(
                          5
                        )}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        readOnly
                        checked={this.state.medicineOne?.foodRelation?.includes(
                          6
                        )}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <div className="medicine-field">
                  <label>Medicine2:</label>
                  <Select
                    className="medicine-dropdown"
                    value={medicineTwo}
                    onChange={this.handleMedicineTwo}
                    options={this.state.TabletInfoArr}
                  />
                </div>
              </div>
              <div className="col-6 duration-field">
                <label>Duration-2:</label>
                <input
                  type="text"
                  name="duration2"
                  value={this.state.duration2}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields input-fields">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood2}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterMorningFood2}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Afternoon</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeAfternoonFood2}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterAfternoonFood2}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Night</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeNightFood2}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterNightFood2}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <div className="medicine-field">
                  <label>Medicine3:</label>
                  <Select
                    className="medicine-dropdown"
                    value={medicineThree}
                    onChange={this.handleMedicineThree}
                    options={this.state.TabletInfoArr}
                  />
                </div>
              </div>
              <div className="col-6 duration-field">
                <label>Duration-3:</label>
                <input
                  type="text"
                  name="duration3"
                  value={this.state.duration3}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields input-fields">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood3}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterMorningFood3}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Afternoon</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeAfternoonFood3}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterAfternoonFood3}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Night</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeNightFood3}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterNightFood3}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <div className="medicine-field">
                  <label>Medicine4:</label>
                  <Select
                    className="medicine-dropdown"
                    value={medicineFour}
                    onChange={this.handleMedicineFour}
                    options={this.state.TabletInfoArr}
                  />
                </div>
              </div>
              <div className="col-6 duration-field">
                <label>Duration-4:</label>
                <input
                  type="text"
                  name="duration4"
                  value={this.state.duration4}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields input-fields">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood4}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterMorningFood4}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Afternoon</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeAfternoonFood4}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterAfternoonFood4}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Night</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeNightFood4}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterNightFood4}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <div className="medicine-field">
                  <label>Medicine5:</label>
                  <Select
                    className="medicine-dropdown"
                    value={medicineFive}
                    onChange={this.handleMedicineFive}
                    options={this.state.TabletInfoArr}
                  />
                </div>
              </div>
              <div className="col-6 duration-field">
                <label>Duration-5:</label>
                <input
                  type="text"
                  name="duration5"
                  value={this.state.duration5}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields input-fields">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood5}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterMorningFood5}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Afternoon</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeAfternoonFood5}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterAfternoonFood5}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Night</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeNightFood5}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterNightFood5}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <div className="medicine-field">
                  <label>Medicine6:</label>
                  <Select
                    className="medicine-dropdown"
                    value={medicinesix}
                    onChange={this.handleMedicineSix}
                    options={this.state.TabletInfoArr}
                  />
                </div>
              </div>
              <div className="col-6 duration-field">
                <label>Duration-6:</label>
                <input
                  type="text"
                  name="duration6"
                  value={this.state.duration6}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields input-fields">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood6}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterMorningFood6}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Afternoon</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeAfternoonFood6}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterAfternoonFood6}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <label className="form-check-label">Night</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeNightFood6}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isAfterNightFood6}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <label>Medicine7:</label>
                <input
                  type="text"
                  name="medicine7"
                  value={this.state.medicine7}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-6">
                <label>Medicine8:</label>
                <input
                  type="text"
                  name="medicine8"
                  value={this.state.medicine8}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields weight-field" style = {{width: "85%"}}>
              <div className="col-6">
                <label>Diet:</label>
                <input
                  type="text"
                  name="diet"
                  value={this.state.diet}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-6">
                <label>Remarks:</label>
                <input
                  type="text"
                  name="remarks"
                  value={this.state.remarks}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-6">
                <label>Review:</label>
                <input
                  type="text"
                  name="review"
                  value={this.state.review}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields weight-field">
              <div className="col-6">
                <label>Investigations Adviced:</label>
                <textarea
                  name="invAdviced"
                  className="text-area"
                  value={this.state.invAdviced}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
              <div className="col-6">
                <label>Physiotherapy Adviced:</label>
                <textarea
                  name="phyAdviced"
                  className="text-area"
                  value={this.state.phyAdviced}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
            </div>
            <div className="button-field">
              <button className="next-button" onClick={this.handleSubmit}>
                Print
              </button>
            </div>
          </div>
        )}
        {this.state.letterHeadTab && (
          <>
            <Print medicinesHistory={this.state.medicinesHistory} />
          </>
        )}
      </>
    );
  }
}

export default SecondPage;