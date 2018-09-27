// @flow
import * as React from 'react';

import InnerQuoteList from './InnerQuoteList';

export default class InnerList extends React.Component {
  render() {
    const { column, dropProvided } = this.props;
    const title = this.props.title ? (
      <h4
        style={{
          userSelect: 'none',
          position: 'relative',
          padding: 10,
          transition: 'background-color ease 0.2s',
          flexGrow: 1,
        }}
      >
        {this.props.title}
      </h4>
    ) : null;

    return (
      <div>
        {title}
        <div style={{ minHeight: 250, marginBottom: 10 }} ref={dropProvided.innerRef}>
          <InnerQuoteList column={column} />
          {dropProvided.placeholder}
        </div>
      </div>
    );
  }
}
