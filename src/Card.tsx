import * as React from 'react';
import styledComponents from 'styled-components';

import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import { RowInterface } from './ReactKanban';

interface ContentProps {
  isDragging: boolean;
}

const Container = styledComponents<DraggableProvided, any>('a')``;

const Content = styledComponents<ContentProps, any>('div')`
  box-shadow: ${({ isDragging }: { isDragging: boolean }) =>
    isDragging ? '2px 2px 1px rgba(0,0,0,0.2)' : 'none'};
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Card = ({
  isDragging,
  provided,
  dragSnapshot,
  renderCard,
  row,
  cardWrapperStyle,
}: {
  isDragging: boolean;
  provided: DraggableProvided;
  dragSnapshot: DraggableStateSnapshot
  renderCard: Function;
  row: RowInterface;
  cardWrapperStyle: Object;
}) => (
  <Container
    innerRef={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    isDragging={dragSnapshot.isDragging}
  >
    <Content style={cardWrapperStyle} isDragging={isDragging}>
      {renderCard(row)}
    </Content>
  </Container>
);

export default Card;
