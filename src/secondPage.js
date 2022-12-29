import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Suggestion from "search-suggestion"; //Added by Sandeep for searching medicine
import Print from "./Print";
import TabletInfo from "./TabletData";

const items = [
  "BAKWELL AP",
  "THIOWELL",
  "GLENROL ",
  "KETOROL",
  "SEPIT MR",
  "SETOLAC MR",
  "FLAMINATE",
  "PIROWELL",
  "FLAMINATE SP",
  "AXOVIT",
  "ZINCOBION PLUS",
  "ENHANCE",
  "MYOTOP 150 MG",
  "NUSON 150 MG",
  "JOINT PLUS",
  "ALTRAJOINT C2",
  "ROSIFIT TRIO",
  "BOROFLEX",
  "ORCERIN C2",
  "JOINT PLUS SACHET",
  "RAAP DSR",
  "RQD",
  "QXOLE",
  "CALBONA K2",
  "MEGACEE",
  "OSTEOBION K2",
  "CLABONA XT",
  "CISSMORE",
  "CEFZUM",
  "QURECLAV 625",
  "FABUXA 80 MG",
  "FOLAX G",
];

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

  handleChange = (e) => {
    //const value = e.target.value;
    console.log("handleChange", e.target.value);
    const { name, value } = e.target;
    let filterData = [];
    if (value) {
      filterData = this.createData(value, items);
    }
    this.setState({
      [name]: filterData,
    });
  };

  createData = (word, data) => {
    const re = new RegExp(`${word.toLowerCase()}`);
    return data.filter((item) => re.test(item.toLowerCase()));
  };

  onChangeMorning1 = () => {
    this.setState((initialState) => ({
      isMorning1: !initialState.isMorning1,
    }));
  };
  onChangeAfterMorningFood1 = () => {
    this.setState((initialState) => ({
      isAfterMorningFood1: !initialState.isAfterMorningFood1,
    }));
  };
  onChangeBeforeMorningFood1 = () => {
    this.setState((initialState) => ({
      isBeforeMorningFood1: !initialState.isBeforeMorningFood1,
    }));
  };
  onChangeAfternoon1 = () => {
    this.setState((initialState) => ({
      isAfternoon1: !initialState.isAfternoon1,
    }));
  };
  onChangeAfterAfternoonFood1 = () => {
    this.setState((initialState) => ({
      isAfterAfternoonFood1: !initialState.isAfterAfternoonFood1,
    }));
  };
  onChangeBeforeAfternoonFood1 = () => {
    this.setState((initialState) => ({
      isBeforeAfternoonFood1: !initialState.isBeforeAfternoonFood1,
    }));
  };
  onChangeNight1 = () => {
    this.setState((initialState) => ({
      isNight1: !initialState.isNight1,
    }));
  };
  onChangeAfterNightFood1 = () => {
    this.setState((initialState) => ({
      isAfterNightFood1: !initialState.isAfterNightFood1,
    }));
  };
  onChangeBeforeNightFood1 = () => {
    this.setState((initialState) => ({
      isBeforeNightFood1: !initialState.isBeforeNightFood1,
    }));
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
  onChangeAfterMorningFood3 = () => {
    this.setState((initialState) => ({
      isAfterMorningFood3: !initialState.isAfterMorningFood3,
    }));
  };
  onChangeBeforeMorningFood3 = () => {
    this.setState((initialState) => ({
      isBeforeMorningFood3: !initialState.isBeforeMorningFood3,
    }));
  };
  onChangeAfternoon3 = () => {
    this.setState((initialState) => ({
      isAfternoon3: !initialState.isAfternoon3,
    }));
  };
  onChangeAfterAfternoonFood3 = () => {
    this.setState((initialState) => ({
      isAfterAfternoonFood3: !initialState.isAfterAfternoonFood3,
    }));
  };
  onChangeBeforeAfternoonFood3 = () => {
    this.setState((initialState) => ({
      isBeforeAfternoonFood3: !initialState.isBeforeAfternoonFood3,
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
  onChangeAfterMorningFood5 = () => {
    this.setState((initialState) => ({
      isAfterMorningFood5: !initialState.isAfterMorningFood5,
    }));
  };
  onChangeBeforeMorningFood5 = () => {
    this.setState((initialState) => ({
      isBeforeMorningFood5: !initialState.isBeforeMorningFood5,
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

  onChangeMorning6 = () => {
    this.setState((initialState) => ({
      isMorning6: !initialState.isMorning6,
    }));
  };
  onChangeAfterMorningFood6 = () => {
    this.setState((initialState) => ({
      isAfterMorningFood6: !initialState.isAfterMorningFood6,
    }));
  };
  onChangeBeforeMorningFood6 = () => {
    this.setState((initialState) => ({
      isBeforeMorningFood6: !initialState.isBeforeMorningFood6,
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

  handleChangeSelect = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleSubmit = () => {
    const state = this.state;
    const medicinesData = {
      medicine1: state.selectedOption?.value,
      isMorning1: state.isMorning1,
      isAfternoon1: state.isAfternoon1,
      isNight1: state.isNight1,
      isAfterMorningFood1: state.isAfterMorningFood1,
      isAfterAfternoonFood1: state.isAfterAfternoonFood1,
      isAfterNightFood1: state.isAfterNightFood1,
      isBeforeMorningFood1: state.isBeforeMorningFood1,
      isBeforeAfternoonFood1: state.isBeforeAfternoonFood1,
      isBeforeNightFood1: state.isBeforeNightFood1,
      medicine2: document.getElementsByName("medicine2")[0].value,
      isMorning2: state.isMorning2,
      isAfternoon2: state.isAfternoon2,
      isNight2: state.isNight2,
      isAfterMorningFood2: state.isAfterMorningFood2,
      isAfterAfternoonFood2: state.isAfterAfternoonFood2,
      isAfterNightFood2: state.isAfterNightFood2,
      isBeforeMorningFood2: state.isBeforeMorningFood2,
      isBeforeAfternoonFood2: state.isBeforeAfternoonFood2,
      isBeforeNightFood2: state.isBeforeNightFood2,
      medicine3: document.getElementsByName("medicine3")[0].value,
      isMorning3: state.isMorning3,
      isAfternoon3: state.isAfternoon3,
      isNight3: state.isNight3,
      isAfterMorningFood3: state.isAfterMorningFood3,
      isAfterAfternoonFood3: state.isAfterAfternoonFood3,
      isAfterNightFood3: state.isAfterNightFood3,
      isBeforeMorningFood3: state.isBeforeMorningFood3,
      isBeforeAfternoonFood3: state.isBeforeAfternoonFood3,
      isBeforeNightFood3: state.isBeforeNightFood3,
      medicine4: document.getElementsByName("medicine4")[0].value,
      isMorning4: state.isMorning4,
      isAfternoon4: state.isAfternoon4,
      isNight4: state.isNight4,
      isAfterMorningFood4: state.isAfterMorningFood4,
      isAfterAfternoonFood4: state.isAfterAfternoonFood4,
      isAfterNightFood4: state.isAfterNightFood4,
      isBeforeMorningFood4: state.isBeforeMorningFood4,
      isBeforeAfternoonFood4: state.isBeforeAfternoonFood4,
      isBeforeNightFood4: state.isBeforeNightFood4,
      medicine5: document.getElementsByName("medicine5")[0].value,
      isMorning5: state.isMorning5,
      isAfternoon5: state.isAfternoon5,
      isNight5: state.isNight5,
      isAfterMorningFood5: state.isAfterMorningFood5,
      isAfterAfternoonFood5: state.isAfterAfternoonFood5,
      isAfterNightFood5: state.isAfterNightFood5,
      isBeforeMorningFood5: state.isBeforeMorningFood5,
      isBeforeAfternoonFood5: state.isBeforeAfternoonFood5,
      isBeforeNightFood5: state.isBeforeNightFood5,
      medicine6: document.getElementsByName("medicine6")[0].value,
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
    const { selectedOption } = this.state;

    return (
      <>
        {this.state.medicinesTab && (
          <div className="App container">
            {/*use this arrow to go back to previous page */}
            <i class="arrow left" onClick={this.handleBack}></i>
            <h2>Medicines</h2>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine1:</label>
              </div>
              <div className="col-4">
                {/* <input type="text" name="medicine1" value={this.state.medicine1} onChange={this.onChangeInput} /> */}
                <Select
                  value={selectedOption}
                  onChange={this.handleChangeSelect}
                  options={this.state.TabletInfoArr}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.selectedOption?.foodRelation?.includes(
                          1
                        )}
                        value={this.state.selectedOption?.foodRelation?.includes(
                          1
                        )}
                        onChange={this.onChangeBeforeMorningFood1}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.selectedOption?.foodRelation?.includes(
                          2
                        )}
                        onChange={this.onChangeAfterMorningFood1}
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
                        checked={this.state.selectedOption?.foodRelation?.includes(
                          3
                        )}
                        onChange={this.onChangeBeforeAfternoonFood1}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.selectedOption?.foodRelation?.includes(
                          4
                        )}
                        onChange={this.onChangeAfterAfternoonFood1}
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
                        checked={this.state.selectedOption?.foodRelation?.includes(
                          5
                        )}
                        onChange={this.onChangeBeforeNightFood1}
                        className="form-check-input pr-2"
                      />
                      Before Food
                    </label>
                  </div>
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.selectedOption?.foodRelation?.includes(
                          6
                        )}
                        onChange={this.onChangeAfterNightFood1}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Duration:</label>
              </div>
              <div className="col-8">
                <input
                  readOnly
                  type="text"
                  name="duration1"
                  value={this.state.selectedOption?.timing}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine2:</label>
              </div>
              <div className="col-8">
                {/* <input type="text" name="medicine2" value={this.state.medicine2} onChange={this.onChangeInput} /> */}
                <Suggestion
                  getDisplayName={(item) => item}
                  items={this.state.medicine2}
                >
                  {({
                    getInputProps,
                    getListItemProps,
                    getItemProps,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    items,
                    isOpen,
                    clearInputValue,
                  }) => (
                    <div>
                      <input
                        name="medicine2"
                        {...getInputProps({
                          placeholder: "Select medicine",
                          onChange: this.handleChange,
                        })}
                      />
                      {isOpen && (
                        <div {...getListItemProps()}>
                          {items.map((item, index) => (
                            <div
                              {...getItemProps({ item, index })}
                              key={item}
                              style={{
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "rgb(232, 232, 232)"
                                    : "white",
                                fontWeight:
                                  selectedItem && selectedItem === item
                                    ? "bold"
                                    : "normal",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Suggestion>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood2}
                        onChange={this.onChangeBeforeMorningFood2}
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
                        onChange={this.onChangeAfterMorningFood2}
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
                        onChange={this.onChangeBeforeAfternoonFood2}
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
                        onChange={this.onChangeAfterAfternoonFood2}
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
                        onChange={this.onChangeBeforeNightFood2}
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
                        onChange={this.onChangeAfterNightFood2}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Duration:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="duration2"
                  value={this.state.duration2}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine3:</label>
              </div>
              <div className="col-8">
                {/* <input type="text" name="medicine3" value={this.state.medicine3} onChange={this.onChangeInput} /> */}
                <Suggestion
                  getDisplayName={(item) => item}
                  items={this.state.medicine3}
                >
                  {({
                    getInputProps,
                    getListItemProps,
                    getItemProps,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    items,
                    isOpen,
                    clearInputValue,
                  }) => (
                    <div>
                      <input
                        name="medicine3"
                        {...getInputProps({
                          placeholder: "Select medicine",
                          onChange: this.handleChange,
                        })}
                      />
                      {isOpen && (
                        <div {...getListItemProps()}>
                          {items.map((item, index) => (
                            <div
                              {...getItemProps({ item, index })}
                              key={item}
                              style={{
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "rgb(232, 232, 232)"
                                    : "white",
                                fontWeight:
                                  selectedItem && selectedItem === item
                                    ? "bold"
                                    : "normal",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Suggestion>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood3}
                        onChange={this.onChangeBeforeMorningFood3}
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
                        onChange={this.onChangeAfterMorningFood3}
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
                        onChange={this.onChangeBeforeAfternoonFood3}
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
                        onChange={this.onChangeAfterAfternoonFood3}
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
                        onChange={this.onChangeBeforeNightFood3}
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
                        onChange={this.onChangeAfterNightFood3}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Duration:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="duration3"
                  value={this.state.duration3}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine4:</label>
              </div>
              <div className="col-8">
                {/* <input type="text" name="medicine4" value={this.state.medicine4} onChange={this.onChangeInput} /> */}
                <Suggestion
                  getDisplayName={(item) => item}
                  items={this.state.medicine4}
                >
                  {({
                    getInputProps,
                    getListItemProps,
                    getItemProps,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    items,
                    isOpen,
                    clearInputValue,
                  }) => (
                    <div>
                      <input
                        name="medicine4"
                        {...getInputProps({
                          placeholder: "Select medicine",
                          onChange: this.handleChange,
                        })}
                      />
                      {isOpen && (
                        <div {...getListItemProps()}>
                          {items.map((item, index) => (
                            <div
                              {...getItemProps({ item, index })}
                              key={item}
                              style={{
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "rgb(232, 232, 232)"
                                    : "white",
                                fontWeight:
                                  selectedItem && selectedItem === item
                                    ? "bold"
                                    : "normal",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Suggestion>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood4}
                        onChange={this.onChangeBeforeMorningFood4}
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
                        onChange={this.onChangeAfterMorningFood4}
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
                        onChange={this.onChangeBeforeAfternoonFood4}
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
                        onChange={this.onChangeAfterAfternoonFood4}
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
                        onChange={this.onChangeBeforeNightFood4}
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
                        onChange={this.onChangeAfterNightFood4}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Duration:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="duration4"
                  value={this.state.duration4}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine5:</label>
              </div>
              <div className="col-8">
                {/* <input type="text" name="medicine5" value={this.state.medicine5} onChange={this.onChangeInput} /> */}
                <Suggestion
                  getDisplayName={(item) => item}
                  items={this.state.medicine5}
                >
                  {({
                    getInputProps,
                    getListItemProps,
                    getItemProps,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    items,
                    isOpen,
                    clearInputValue,
                  }) => (
                    <div>
                      <input
                        name="medicine5"
                        {...getInputProps({
                          placeholder: "Select medicine",
                          onChange: this.handleChange,
                        })}
                      />
                      {isOpen && (
                        <div {...getListItemProps()}>
                          {items.map((item, index) => (
                            <div
                              {...getItemProps({ item, index })}
                              key={item}
                              style={{
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "rgb(232, 232, 232)"
                                    : "white",
                                fontWeight:
                                  selectedItem && selectedItem === item
                                    ? "bold"
                                    : "normal",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Suggestion>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood5}
                        onChange={this.onChangeBeforeMorningFood5}
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
                        onChange={this.onChangeAfterMorningFood5}
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
                        onChange={this.onChangeBeforeAfternoonFood5}
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
                        onChange={this.onChangeAfterAfternoonFood5}
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
                        onChange={this.onChangeBeforeNightFood5}
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
                        onChange={this.onChangeAfterNightFood5}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Duration:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="duration5"
                  value={this.state.duration5}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine6:</label>
              </div>
              <div className="col-8">
                {/* <input type="text" name="medicine6" value={this.state.medicine6} onChange={this.onChangeInput} /> */}
                <Suggestion
                  getDisplayName={(item) => item}
                  items={this.state.medicine6}
                >
                  {({
                    getInputProps,
                    getListItemProps,
                    getItemProps,
                    inputValue,
                    selectedItem,
                    highlightedIndex,
                    items,
                    isOpen,
                    clearInputValue,
                  }) => (
                    <div>
                      <input
                        name="medicine6"
                        {...getInputProps({
                          placeholder: "Select medicine",
                          onChange: this.handleChange,
                        })}
                      />
                      {isOpen && (
                        <div {...getListItemProps()}>
                          {items.map((item, index) => (
                            <div
                              {...getItemProps({ item, index })}
                              key={item}
                              style={{
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "rgb(232, 232, 232)"
                                    : "white",
                                fontWeight:
                                  selectedItem && selectedItem === item
                                    ? "bold"
                                    : "normal",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Suggestion>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label className="form-check-label">Morning</label>
                <div className="row">
                  <div className="col-6">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        checked={this.state.isBeforeMorningFood6}
                        onChange={this.onChangeBeforeMorningFood6}
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
                        onChange={this.onChangeAfterMorningFood6}
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
                        onChange={this.onChangeBeforeAfternoonFood6}
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
                        onChange={this.onChangeAfterAfternoonFood6}
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
                        onChange={this.onChangeBeforeNightFood6}
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
                        onChange={this.onChangeAfterNightFood6}
                        className="form-check-input pr-2"
                      />
                      After Food
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Duration:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="duration6"
                  value={this.state.duration6}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine7:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="medicine7"
                  value={this.state.medicine7}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Medicine8:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="medicine8"
                  value={this.state.medicine8}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Diet:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="diet"
                  value={this.state.diet}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Investigations Adviced:</label>
              </div>
              <div className="col-8">
                <textarea
                  name="invAdviced"
                  value={this.state.invAdviced}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Physiotherapy Adviced:</label>
              </div>
              <div className="col-8">
                <textarea
                  name="phyAdviced"
                  value={this.state.phyAdviced}
                  onChange={this.onChangeInput}
                  rows="5"
                  cols="35"
                />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Review:</label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="review"
                  value={this.state.review}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <div className="row">
              <button onClick={this.handleSubmit}>Print</button>
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
