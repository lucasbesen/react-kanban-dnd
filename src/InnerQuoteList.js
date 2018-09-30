import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import idx from 'idx';

import Card from './Card';

export default class InnerQuoteList extends React.Component {
  render() {
    const { column } = this.props;
    return idx(column, _ => _.rows[0])
      ? column.rows.map((row, index) => (
          <Draggable key={row.id} draggableId={row.id} index={index}>
            {(dragProvided, dragSnapshot) => (
              <Card
                key={row.id}
                row={row}
                isDragging={dragSnapshot.isDragging}
                provided={dragProvided}
                renderCard={this.props.renderCard}
              />
            )}
          </Draggable>
        ))
      : [];
  }
}
