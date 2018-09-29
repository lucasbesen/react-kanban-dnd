import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Card from './Card';

export default class InnerQuoteList extends React.Component {
  render() {
    return this.props.column && this.props.column.rows[0]
      ? this.props.column.rows.map((row, index) => (
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
