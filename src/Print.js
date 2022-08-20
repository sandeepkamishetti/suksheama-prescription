import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import PrintPage from './PrintPage';

class Print extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>Print this out!</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <PrintPage ref={el => (this.componentRef = el)} medicinesHistory={this.props.medicinesHistory} />
      </div>
    );
  }
}

export default Print