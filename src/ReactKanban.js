import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Column from './Column';

const Container = styled.div`
  min-width: 100vw;
  display: inline-flex;
`;

export default class ReactKanban extends React.Component {
  state = {
    columns: this.props.columns || [],
  };

  handleDrag = result => {
    const { columns } = this.state;
    const { onDragEnd } = this.props;
    const destination = result.destination;

    // Dropped nowhere
    if (!result.destination) return;
    // Didn't move anywhere - can bail early
    if (
      result.source.droppableId === destination.droppableId &&
      result.source.index === destination.index
    )
      return;

    // TODO: Move to an functional way
    let removedRow = null;

    columns.map(column => {
      let rows = column.rows.filter(row => {
        if (row.id === result.draggableId) {
          removedRow = row;
          return false;
        }
        return true;
      });
      column.rows = rows;
    });

    columns.map(column => {
      if (column.id === destination.droppableId && removedRow) {
        column.rows.push(removedRow);
      }
    });
    this.setState({ columns });
    return onDragEnd(result);
  };

  render() {
    const {
      onDragStart,
      renderCard,
      columnWrapperStyle,
      columnHeaderStyle,
      columnStyle,
      columnTitleStyle,
      cardWrapperStyle,
    } = this.props;
    const { columns } = this.state;
    return (
      <DragDropContext onDragStart={onDragStart} onDragEnd={this.handleDrag}>
        <Droppable droppableId="board" isDropDisabled={true}>
          {provided => (
            <Container innerRef={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Column
                  key={index}
                  index={index}
                  column={column}
                  renderCard={renderCard}
                  columnHeaderStyle={columnHeaderStyle}
                  columnTitleStyle={columnTitleStyle}
                  columnStyle={columnStyle}
                  columnWrapperStyle={columnWrapperStyle}
                  cardWrapperStyle={cardWrapperStyle}
                />
              ))}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
