import * as React from 'react'
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DragDropContextProps,
  DragUpdate,
  DropResult,
} from 'react-beautiful-dnd';
import styledComponents from 'styled-components';

import Column from './Column';

const Container = styledComponents<DroppableProvided, any>('div')`
  min-width: 100vw;
  display: inline-flex;
`;

export interface RowInterface {
  id: string;
}

export interface ColumnInterface {
  id: string;
  title: string;
  rows: Array<RowInterface>;
}

export interface ReactKanbanProps extends DragDropContextProps {
  columns: Array<ColumnInterface>;
  renderCard: Function;
  columnWrapperStyle: Object;
  columnHeaderStyle: Object;
  columnStyle: Object;
  columnTitleStyle: Object;
  cardWrapperStyle: Object;
}

export default class ReactKanban extends React.Component<ReactKanbanProps, {}> {
  state = {
    columns: this.props.columns || [],
  };

  handleDrag = (result: DragUpdate) => {
    const { columns } = this.state;
    const { onDragEnd } = this.props;
    const destination = result.destination;

    // Dropped nowhere
    if (!result.destination) return;
    // Didn't move anywhere - can bail early
    if (
      result.source.droppableId === destination.droppableId &&
      result.source.index === destination.index
    ) return;

    // TODO: Make this immutable
    let removedRow: RowInterface = null;

    columns.map((column: ColumnInterface) => {
      const rows = column.rows.filter((row) => {
        if (row.id === result.draggableId) {
          removedRow = row;
          return false;
        }
        return true;
      });
      column.rows = rows;
    });

    columns.map((column: ColumnInterface) => {
      if (column.id === destination.droppableId && removedRow) {
        column.rows.push(removedRow);
      }
    });
    this.setState({ columns });

    const dropReason: DropResult = {
      reason: 'DROP',
      ...result,
    };

    return onDragEnd(dropReason, null);
  }

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
          {(provided: DroppableProvided) => (
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
