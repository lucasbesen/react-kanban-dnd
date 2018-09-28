// @flow
import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import InnerList from './InnerList';

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? 'rgba(96, 115, 137, 0.04)' : 'rgba(96, 115, 137, 0.04)'};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: 10px;
  border-radius: 2px;
  border-left: 1px solid rgba(96, 115, 137, 0.12);
  border-right: 1px solid rgba(96, 115, 137, 0.12);
  border-bottom: 1px solid rgba(96, 115, 137, 0.12);
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;
`;

export default class QuoteList extends React.Component {
  static defaultProps = {
    listId: 'LIST',
  };
  render() {
    const {
      ignoreContainerClipping,
      internalScroll,
      isDropDisabled,
      listId,
      listType,
      style,
      title,
      column,
    } = this.props;

    // const data = formatPositionApplications(positionApplicationStatus.positionApplications);

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
      >
        {(dropProvided, dropSnapshot) => (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            {...dropProvided.droppableProps}
          >
            {internalScroll ? (
              <ScrollContainer>
                <InnerList column={column} title={title} dropProvided={dropProvided} />
              </ScrollContainer>
            ) : (
              <InnerList column={column} title={title} dropProvided={dropProvided} />
            )}
          </Wrapper>
        )}
      </Droppable>
    );
  }
}
