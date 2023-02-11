import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import PrintPage from './PrintPage';
import moment from 'moment';

class Print extends React.PureComponent {
  render() {
    console.log(this.props)
    const originalTitle = document.title;
    const date = moment(new Date()).format('DD/MM/YYYY').replace(' ', '_')
    const time = moment(new Date()).format('h:mm a').replace(' ', '_')
    const name = this.props.medicinesHistory.patientHistory.patientName.replace(' ', '_')
    const printTitle = `${name}_${date}_${time}`
    return (
      <div>
        <PrintPage ref={el => (this.componentRef = el)} medicinesHistory={this.props.medicinesHistory} />
        <ReactToPrint content={() => this.componentRef}
         onBeforePrint={() => document.title = printTitle}
         onAfterPrint={() => document.title = originalTitle}
        >
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div className='print'><button onClick={handlePrint}>Print this out!</button></div>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    );
  }
}

export default Print
