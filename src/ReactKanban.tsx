import * as React from 'react';
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
  rows: RowInterface[];
}

export interface ReactKanbanProps extends DragDropContextProps {
  columns: ColumnInterface[];
  renderCard: Function;
  columnWrapperStyle: Object;
  columnHeaderStyle: Object;
  columnStyle: Object;
  columnTitleStyle: Object;
  cardWrapperStyle: Object;
}
// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = list;
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class ReactKanban extends React.Component<ReactKanbanProps, {}> {
  state = {
    columns: this.props.columns || [],
    ordered: Object.keys(this.props.columns),
  };

  getColumnIndexById = (columns: ColumnInterface[], id: string) => {
    return columns.map((column) => { return column.id; }).indexOf(id);
  }

  handleDrag = (result: DragUpdate) => {
    const { columns } = this.state;
    const { onDragEnd } = this.props;
    const { source, destination } = result;
    // Dropped nowhere
    if (!destination) return;
    // Didn't move anywhere - can bail early
    if (result.type === 'COLUMN') {
      const ordered: string[] = reorder(
        this.state.ordered,
        source.index,
        destination.index,
      );

      this.setState({
        ordered,
      });
    } else {
      /* tslint:disable-next-line */
      const stillOnSamePlace = source.droppableId === destination.droppableId && source.index === destination.index;
      if (stillOnSamePlace) {
        return;
      }
      const newColumns = [...columns];
      const sourceIndex = this.getColumnIndexById(columns, source.droppableId);
      const destinationIndex = this.getColumnIndexById(columns, destination.droppableId);
      const newSourceRows: RowInterface[] = columns[sourceIndex].rows;
      const newDestinationRows: RowInterface[] = columns[destinationIndex].rows;
      const [removed] = newSourceRows.splice(source.index, 1);
      newDestinationRows.splice(destination.index, 0, removed);
      newColumns[sourceIndex].rows = newSourceRows;
      newColumns[destinationIndex].rows = newDestinationRows;
      this.setState({ newColumns });
    }
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
    const { columns, ordered } = this.state;
    return (
      <DragDropContext onDragStart={onDragStart} onDragEnd={this.handleDrag}>
        <Droppable droppableId="board" isDropDisabled={false} type="COLUMN" direction="horizontal" >
          {(provided: DroppableProvided) => (
            <Container innerRef={provided.innerRef} {...provided.droppableProps}>
              {ordered.map((key: any, index) => (
                <Column
                  key={index}
                  index={index}
                  column={columns[key]}
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
