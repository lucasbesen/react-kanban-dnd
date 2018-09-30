import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Column from './Column';

const Container = styled.div`
  min-width: 100vw;
  display: inline-flex;
`;

export default class ReactKanban extends React.Component {
  render() {
    const {
      columns,
      onDragStart,
      onDragEnd,
      renderCard,
      columnWrapperStyle,
      columnStyle,
      columnTitleStyle,
    } = this.props;
    return (
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal" isDropDisabled={true}>
          {provided => (
            <Container innerRef={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Column
                  key={index}
                  index={index}
                  column={column}
                  renderCard={renderCard}
                  columnTitleStyle={columnTitleStyle}
                  columnStyle={columnStyle}
                  columnWrapperStyle={columnWrapperStyle}
                />
              ))}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
