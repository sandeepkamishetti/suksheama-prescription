import React, { Component } from 'react';
import './App.css';
import './Styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      patientInfo: [
        {
          patientName: "",
          age: 0,
          gender: "",
          address: "",
          patientWeight: 0,
          patientBloodPressure: 0,
          patientBodyTemperatute: 0,
          timeOfVisit: "",
          dateOfVisit: "",
          presentComplaints: "",
          pastHistory: "",
          findings: "",
          provisionalDiagnosis: ""
        }
      ],
      treatmentAdviced: [
        { medicine: "" },
        { investigations: "" },
        { physiotherapy: "" }
      ],
      review: ""
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    var newPatientInfoArray = [...this.state.patientInfo];
    switch (name) {
      case ("patientName"):
        newPatientInfoArray[0].patientName = value;
        break;
      case ("age"):
        newPatientInfoArray[0].age = value;
        break;
      case ("gender"):
        newPatientInfoArray[0].gender = value;
        break;
      case ("address"):
        newPatientInfoArray[0].address = value;
        break;
      case ("patientWeight"):
        newPatientInfoArray[0].patientWeight = value;
        break;
      case ("patientBloodPressure"):
        newPatientInfoArray[0].patientBloodPressure = value;
        break;
      case ("patientBodyTemperatute"):
        newPatientInfoArray[0].patientBodyTemperatute = value;
        break;
      case ("timeOfVisit"):
        newPatientInfoArray[0].timeOfVisit = value;
        break;
      case ("dateOfVisit"):
        newPatientInfoArray[0].dateOfVisit = value;
        break;
      case ("presentComplaints"):
        newPatientInfoArray[0].presentComplaints = value;
        break;
      case ("pastHistory"):
        newPatientInfoArray[0].pastHistory = value;
        break;
      case ("findings"):
        newPatientInfoArray[0].findings = value;
        break;
      case ("provisionalDiagnosis"):
        newPatientInfoArray[0].provisionalDiagnosis = value;
        break;
      default: ;
    }

    console.log(e)
    this.setState({
      patientInfo: newPatientInfoArray
    }, console.log(this.state))
  }

  render() {
    //var arrayName;
    return (<form>
      <div className='name-age-gender'>
        <label className='name'>
          Name:
          <input
            name="patientName"
            type="text"
            value={this.state.patientInfo.patientName}
            onChange={this.handleInputChange} />
        </label>
        <label className='age'>
          Age:
          <input
            name="age"
            type="number"
            value={this.state.patientInfo.age}
            onChange={this.handleInputChange} />
        </label>
        <label className='gender'>
          Gender:
          <input type="radio" className="radioButton" name="gender" value="Male" onChange={(e) => this.handleInputChange(e)}></input>
          <label className=""><i className="fas fa-male"></i></label>
          <input type="radio" className="radioButton" name="gender" value="Female" onChange={(e) => this.handleInputChange(e)}></input>
          <label className=""><i className="fas fa-female"></i></label>
        </label>
      </div>
      <div className='address-weight-bp'>
        <label className='address'>
          Address:
          <input
            name="address"
            type="text"
            value={this.state.patientInfo.address}
            onChange={this.handleInputChange} />
        </label>
        <label className='weight'>
          Weight:
          <input
            name="patientWeight"
            type="number"
            value={this.state.patientInfo.patientWeight}
            onChange={this.handleInputChange} />
        </label>
        <label className='bp'>
          Blood Pressure:
          <input
            name="patientBloodPressure"
            type="number"
            value={this.state.patientInfo.patientBloodPressure}
            onChange={this.handleInputChange} />
        </label>
      </div>
      <div className='temp-time-date'>
        <label className='temp'>
          Body Temperature:
          <input
            name="patientBodyTemperatute"
            type="number"
            value={this.state.patientInfo.patientBodyTemperatute}
            onChange={this.handleInputChange} />
        </label>
        <label className='time'>
          Visited At:
          <input
            name="timeOfVisit"
            type="time"
            value={this.state.patientInfo.timeOfVisit}
            onChange={this.handleInputChange} />
        </label>
        <label className='date'>
          Visited on:
          <input
            name="dateOfVisit"
            type="date"
            value={this.state.patientInfo.dateOfVisit}
            onChange={this.handleInputChange} />
        </label>
      </div>
      <div className='complaint-history-findings'>
        <label className='complaint'>
          Present Complaints and Duration:
          <textarea
            name="presentComplaints"
            type="text"
            value={this.state.patientInfo.presentComplaints}
            onChange={this.handleInputChange} />
        </label>
        <label className='history'>
          Past History:
          <textarea
            name="pastHistory"
            type="text"
            value={this.state.patientInfo.pastHistory}
            onChange={this.handleInputChange} />
        </label>
        <label className='findings'>
          Findings:
          <textarea
            name="findings"
            type="text"
            value={this.state.patientInfo.findings}
            onChange={this.handleInputChange} />
        </label>
      </div>
      <label className='diagnosis'>
        Provisional Diagnosis:
        <textarea
          name="provisionalDiagnosis"
          type="text"
          value={this.state.patientInfo.provisionalDiagnosis}
          onChange={this.handleInputChange} />
      </label>
      {/*<label>
      Is going:
      <input
        name="isGoing"
        type="checkbox"
        checked={this.state.isGoing}
        onChange={this.handleInputChange} />
    </label>
    <br />
    <label>
      Number of guests:
      <input
        name="numberOfGuests"
        type="number"
        value={this.state.numberOfGuests}
        onChange={this.handleInputChange} />
    </label>*/}
    </form>
    )
  }
}
export default App;
