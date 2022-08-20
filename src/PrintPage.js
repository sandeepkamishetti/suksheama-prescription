import React from "react"
import LetterHead from "./letterHead";
import LetterHeadBack from "./letterHeadBack";
import styled from "styled-components";

const PageBreakWrapper = styled.div`
  && {
    page-break-after: always;
  }
`

const PrintTemplate = ({ medicinesHistory }) => {
    return (
      <>
        <LetterHead medicinesHistory={medicinesHistory} />
        <PageBreakWrapper>&nbsp;</PageBreakWrapper>
        <LetterHeadBack medicinesHistory={medicinesHistory}  />
      </>
    );
  };

export default class PrintPage extends React.PureComponent {
    render() {
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