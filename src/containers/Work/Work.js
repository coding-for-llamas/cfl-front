// @ts-nocheck
import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultWorkContent from './WorkContent';
import Footer from '../../components/Footer/Footer';

export class Work extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('My Work'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultWorkContent />
        </div>
        <Footer />
      </>
    );
  }
}

export default Work;
