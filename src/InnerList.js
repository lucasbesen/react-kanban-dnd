// @flow
import * as React from 'react';
import styled from 'styled-components';

import InnerQuoteList from './InnerQuoteList';

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: 250px;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  margin-bottom: 10px;
`;

const Title = styled.h4`
  padding: 10px;
  transition: background-color ease 0.2s;
  flex-grow: 1;
  user-select: none;
  position: relative;
  &:focus {
    outline: 2px solid purple;
    outline-offset: 2px;
  }
`;

/* stylelint-disable block-no-empty */
const Container = styled.div``;
/* stylelint-enable */

export default class InnerList extends React.Component {
  render() {
    const { column, dropProvided } = this.props;
    const title = this.props.title ? <Title>{this.props.title}</Title> : null;

    return (
      <Container>
        {title}
        <DropZone innerRef={dropProvided.innerRef}>
          <InnerQuoteList column={column} />
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  }
}
