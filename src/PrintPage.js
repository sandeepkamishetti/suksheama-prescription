import React from "react"
import LetterHead from "./letterHead";
import LetterHeadBack from "./letterHeadBack";

const PrintTemplate = ({ medicinesHistory }) => {
    return (
      <>
        <LetterHead medicinesHistory={medicinesHistory} />
        <LetterHeadBack medicinesHistory={medicinesHistory}  />
      </>
    );
  };

export default class PrintPage extends React.PureComponent {
    
    constructor(props) {
        super(props);
    }
    

    render() {
        let printingPages = [];
        const { medicinesHistory } = this.props;

          const tempTemplate = <PrintTemplate medicinesHistory={medicinesHistory} />;
          
    
        return (
          <div>
            {/* map and create single component for each page */}
            {tempTemplate}
          </div>
        );
      }
  }