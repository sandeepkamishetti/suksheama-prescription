import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class LetterHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientData: ""
        }
    }
    componentDidMount() {
        this.setState({ patientData: this.props.medicinesHistory ? this.props.medicinesHistory : {} });
    }
    render() {
        const patientInfo = this.state.patientData ? this.state.patientData.patientHistory : "";
        return (
            <div className="letter-head">
                <div className="patient-data-head">
                    <div className="row">
                        <div className="col-5">
                            {patientInfo ? patientInfo.patientName : ""}
                        </div>
                        <div className="col-1 age">
                            {patientInfo ? patientInfo.age : ""}
                        </div>
                        <div className="col-1 sex">
                            {patientInfo ? patientInfo.sex : ""}
                        </div>
                        <div className="col-1">
                            {patientInfo ? patientInfo.co : ""}
                        </div>
                    </div>
                    <div className="row header-2-data">
                        <div className="col-2">
                            {patientInfo ? patientInfo.weight : ""}
                        </div>
                        <div className="col-2 second-row">
                            {patientInfo ? patientInfo.bp : ""}
                        </div>
                        <div className="col-2">
                            {patientInfo ? patientInfo.temp : ""}
                        </div>
                        <div className="col-2">
                            {patientInfo ? patientInfo.time : ""}
                        </div>
                        <div className="col-2 second-column">
                            {patientInfo ? patientInfo.date : ""}
                        </div>

                    </div>
                    <div className="checkbox-area">
                        <div className="row">
                            <div className="col-1">
                                {patientInfo.isHtn === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="col-1">
                                {patientInfo.isDm === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="col-1">
                                {patientInfo.isBa === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="col-1">
                                {patientInfo.isCad === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="col-1">
                                {patientInfo.isCkd === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="col-2">
                                {patientInfo.isThyroid === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="col-2">
                                {patientInfo.isDrug === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="right-side-data">
                        <div className="present-complaints">
                            {patientInfo ? patientInfo.presentComplaints : ""}
                        </div>
                        <div className="past-history">
                            {patientInfo ? patientInfo.pastHistory : ""}
                        </div>
                        <div className="findings">
                            {patientInfo ? patientInfo.findings : ""}
                        </div>
                        <div className="provisional">
                            {patientInfo ? patientInfo.provDiagnosis : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LetterHead;