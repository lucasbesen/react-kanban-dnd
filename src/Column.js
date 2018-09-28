import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import idx from 'idx';
import styled from 'styled-components';

import List from './List';

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
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  color: #515c6a;
`;
const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-bottom: 10px;
  width: 270px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border-left: 1px solid rgba(96, 115, 137, 0.12);
  border-right: 1px solid rgba(96, 115, 137, 0.12);
  border-top: 1px solid rgba(96, 115, 137, 0.12);
  background-color: ${({ isDragging }) =>
    isDragging ? 'rgba(96, 115, 137, 0.04)' : 'rgba(96, 115, 137, 0.04)'};
  transition: background-color 0.1s ease;
  &:hover {
    background-color: rgba(96, 115, 137, 0.04);
  }
  height: 50px;
`;

const Counter = styled.p`
  padding: 0px 10px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  color: #515c6a;
  background-color: rgba(96, 115, 137, 0.16);
  border-radius: 9px;
`;

export default class Column extends React.Component {
  render() {
    const { index, positionApplicationStatus, kanban } = this.props;
    const column = kanban.columns.reduce(
      (acc, column) =>
        column.positionApplicationStatus.id === positionApplicationStatus.id ? column : acc,
      null,
    );
    return (
      <Draggable draggableId={positionApplicationStatus.id} index={index} isDragDisabled={true}>
        {(provided, snapshot) => (
          <Container innerRef={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging}>
              <Title isDragging={snapshot.isDragging} {...provided.dragHandleProps}>
                {positionApplicationStatus.status}
              </Title>
              <Counter>{idx(column, _ => _.rowsCount) || 0}</Counter>
            </Header>
            <List
              key={index}
              listId={positionApplicationStatus.id}
              listType="QUOTE"
              positionApplicationStatus={positionApplicationStatus}
              column={column}
            />
          </Container>
        )}
      </Draggable>
    );
  }
}
