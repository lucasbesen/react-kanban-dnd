import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import idx from 'idx';

import Card from './Card';

export default class InnerList extends React.Component {
  render() {
    const { column, cardWrapperStyle } = this.props;
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
                cardWrapperStyle={cardWrapperStyle}
              />
            )}
          </Draggable>
        ))
      : [];
  }
}
