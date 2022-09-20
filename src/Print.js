import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import PrintPage from './PrintPage';

class Print extends React.PureComponent {
  render() {
    return (
      <div>
        <PrintPage ref={el => (this.componentRef = el)} medicinesHistory={this.props.medicinesHistory} />
        <ReactToPrint content={() => this.componentRef}>
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
