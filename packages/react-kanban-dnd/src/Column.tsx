import * as React from 'react';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import styledComponents from 'styled-components';

import List from './List';
import { ColumnInterface } from './ReactKanban';

export interface ColumnProps {
  index: number;
  column: ColumnInterface;
  renderCard: Function;
  columnWrapperStyle: Object;
  columnStyle: Object;
  columnTitleStyle: Object;
  columnHeaderStyle: Object;
  cardWrapperStyle: Object;
}

interface DraggingProps {
  isDragging: boolean;
}

const Title = styledComponents<DraggingProps, any>('h4')`
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
const Container = styledComponents.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-bottom: 10px;
  width: 270px;
`;

const Header = styledComponents<DraggingProps, any>('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border-left: 1px solid rgba(96, 115, 137, 0.12);
  border-right: 1px solid rgba(96, 115, 137, 0.12);
  border-top: 1px solid rgba(96, 115, 137, 0.12);
  background-color: 'rgba(96, 115, 137, 0.04)';
  transition: background-color 0.1s ease;
  &:hover {
    background-color: rgba(96, 115, 137, 0.04);
  }
  height: 50px;
`;

const Wrapper = styledComponents<DraggableProvided, any>('div')``;

export default class Column extends React.Component<ColumnProps, {}> {
  render() {
    const {
      index,
      column,
      renderCard,
      columnWrapperStyle,
      columnStyle,
      columnTitleStyle,
      columnHeaderStyle,
      cardWrapperStyle,
    } = this.props;

    return (
      <Draggable draggableId={column.id} index={index} isDragDisabled={false}>
        {(provided: DraggableProvided) => (
          <Wrapper
            innerRef={provided.innerRef}
            {...provided.draggableProps}
          >
            <Container style={columnWrapperStyle}>
              <Header
                {...provided.dragHandleProps}
                style={columnHeaderStyle}
              >
                <Title
                  style={columnTitleStyle}
                  {...provided.dragHandleProps}
                >
                  {column.title}
                </Title>
              </Header>
              <List
                key={index}
                columnStyle={columnStyle}
                listId={column.id}
                column={column}
                renderCard={renderCard}
                cardWrapperStyle={cardWrapperStyle}
              />
            </Container>
          </Wrapper>
        )}
      </Draggable>
    );
  }
}
