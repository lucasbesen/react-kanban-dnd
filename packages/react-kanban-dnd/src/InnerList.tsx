import * as React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import idx from 'idx';

import Card from './Card';
import { ColumnInterface } from './ReactKanban';

export interface InnerListProps {
  column: ColumnInterface;
  renderCard: Function;
  cardWrapperStyle: Object;
}

export default class InnerList extends React.Component<InnerListProps, {}> {
  render() {
    const { column, cardWrapperStyle } = this.props;
    return idx(column, _ => _.rows[0])
      ? column.rows.map((row, index: number) => (
          <Draggable key={row.id} draggableId={row.id} index={index}>
            {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
              <Card
                key={index}
                row={row}
                isDragging={dragSnapshot.isDragging}
                provided={dragProvided}
                dragSnapshot={dragSnapshot}
                renderCard={this.props.renderCard}
                cardWrapperStyle={cardWrapperStyle}
              />
            )}
          </Draggable>
        ))
      : [];
  }
}
