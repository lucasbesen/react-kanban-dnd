import * as React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  border-radius: 2px;
  border: 1px solid rgba(96, 115, 137, 0.12);
  background-color: ${({ isDragging }) => (isDragging ? '#ffffff' : '#ffffff')};
  box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px rgba(0,0,0,0.2)` : 'none')};
  padding: 9px 0px 9px 9px;
  min-height: 40px;
  margin-bottom: 8px;
  user-select: none;
  transition: background-color 0.5s ease;
  /* anchor overrides */
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
  }
  &:focus {
    outline: 2px solid purple;
    box-shadow: none;
  }
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = ({ isDragging, provided, renderCard, row }) => (
  <Container
    isDragging={isDragging}
    innerRef={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  >
    <Content>{renderCard(row)}</Content>
  </Container>
);

export default Card;
