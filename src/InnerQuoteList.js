// @flow
import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import CandidateCard from './CandidateCard';

export default class InnerQuoteList extends React.Component {
  render() {
    return this.props.column && this.props.column.rows[0]
      ? this.props.column.rows.map((quote, index) => (
          <Draggable key={quote.id} draggableId={quote.id} index={index}>
            {(dragProvided, dragSnapshot) => (
              <CandidateCard
                key={quote.id}
                quote={quote}
                isDragging={dragSnapshot.isDragging}
                provided={dragProvided}
                row={quote}
              />
            )}
          </Draggable>
        ))
      : [];
  }
}
