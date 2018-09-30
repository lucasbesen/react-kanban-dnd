import * as React from 'react';
import styled from 'styled-components';

const Container = styled.a``;

const Content = styled.div`
  box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px rgba(0,0,0,0.2)` : 'none')};
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = ({ isDragging, provided, renderCard, row, cardWrapperStyle }) => (
  <Container
    innerRef={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  >
    <Content style={cardWrapperStyle} isDragging={isDragging}>
      {renderCard(row)}
    </Content>
  </Container>
);

export default Card;
