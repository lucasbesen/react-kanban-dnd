import * as React from 'react';
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DroppableProps,
} from 'react-beautiful-dnd';
import styledComponents from 'styled-components';

import InnerList from './InnerList';
import { ColumnInterface } from './ReactKanban';

const Wrapper = styledComponents<DroppableProps, any>('div')`
  background-color: 'rgba(96, 115, 137, 0.04)';
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }: { isDropDisabled: boolean }) =>
    isDropDisabled ? 0.5 : 'inherit'};
  padding: 10px;
  border-radius: 2px;
  border-left: 1px solid rgba(96, 115, 137, 0.12);
  border-right: 1px solid rgba(96, 115, 137, 0.12);
  border-bottom: 1px solid rgba(96, 115, 137, 0.12);
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  min-height: 250px;
  margin-bottom: 10px;
`;

const DropZone = styledComponents<DroppableProvided, any>('div')`

`;

const List = ({
  isDropDisabled,
  listId,
  column,
  renderCard,
  columnStyle,
  cardWrapperStyle,
}: {
  isDropDisabled?: boolean
  listId: string
  column: ColumnInterface
  renderCard: Function
  columnStyle: Object
  cardWrapperStyle: Object,
}) => (
  <Droppable droppableId={listId || 'LIST'} isDropDisabled={isDropDisabled} type="ROW">
    {(
      dropProvided: DroppableProvided,
      dropSnapshot: DroppableStateSnapshot,
    ) => (
      <Wrapper
        style={columnStyle}
        innerRef={dropProvided.innerRef}
        isDraggingOver={dropSnapshot.isDraggingOver}
        isDropDisabled={isDropDisabled}
        {...dropProvided.droppableProps}
      >
        <InnerList
          column={column}
          renderCard={renderCard}
          cardWrapperStyle={cardWrapperStyle}
        />
        {dropProvided.placeholder}
      </Wrapper>
    )}
  </Droppable>
);

export default List;
