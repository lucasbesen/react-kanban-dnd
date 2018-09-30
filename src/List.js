import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import InnerQuoteList from './InnerQuoteList';

const Wrapper = styled.div`
  background-color: 'rgba(96, 115, 137, 0.04)';
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

const DropZone = styled.div`
  min-height: 250px;
  margin-bottom: 10px;
`;

const List = ({
  ignoreContainerClipping,
  isDropDisabled,
  listId,
  listType,
  column,
  renderCard,
  columnStyle,
  cardWrapperStyle,
}) => (
  <Droppable
    droppableId={listId || 'LIST'}
    type={listType}
    ignoreContainerClipping={ignoreContainerClipping}
    isDropDisabled={isDropDisabled}
  >
    {(dropProvided, dropSnapshot) => (
      <Wrapper
        style={columnStyle}
        isDraggingOver={dropSnapshot.isDraggingOver}
        isDropDisabled={isDropDisabled}
        {...dropProvided.droppableProps}
      >
        <div>
          <DropZone innerRef={dropProvided.innerRef}>
            <InnerQuoteList
              column={column}
              renderCard={renderCard}
              cardWrapperStyle={cardWrapperStyle}
            />
            {dropProvided.placeholder}
          </DropZone>
        </div>
      </Wrapper>
    )}
  </Droppable>
);

export default List;
