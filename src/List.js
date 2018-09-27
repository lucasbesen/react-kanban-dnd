// @flow
import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import InnerList from './InnerList';

export default class QuoteList extends React.Component {
  static defaultProps = {
    listId: 'LIST',
  };
  render() {
    const {
      ignoreContainerClipping,
      internalScroll,
      isDropDisabled,
      listId,
      listType,
      style,
      title,
      column,
    } = this.props;

    // const data = formatPositionApplications(positionApplicationStatus.positionApplications);

    return (
      <Droppable
        droppableId={listId}
        type={listType}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
      >
        {(dropProvided, dropSnapshot) => (
          <div
            style={{
              display: 'flex',
              backgroundColor: 'rgba(96, 115, 137, 0.04)',
              userSelect: 'none',
              paddingBottom: 0,
              transition: 'background-color 0.1s ease, opacity 0.1s ease',
              flexDirection: 'column',
              opacity: isDropDisabled ? 0.5 : 'inherit',
              padding: 10,
              borderRadius: 2,
              borderRight: '1px solid rgba(96, 115, 137, 0.12)',
              borderTop: '1px solid rgba(96, 115, 137, 0.12)',
              borderLeft: '1px solid rgba(96, 115, 137, 0.12)',
            }}
            {...dropProvided.droppableProps}
          >
            {internalScroll ? (
              <div style={{ overflowX: 'hidden', overflowY: 'auto', maxHeight: 300 }}>
                <InnerList column={column} title={title} dropProvided={dropProvided} />
              </div>
            ) : (
              <InnerList column={column} title={title} dropProvided={dropProvided} />
            )}
          </div>
        )}
      </Droppable>
    );
  }
}
