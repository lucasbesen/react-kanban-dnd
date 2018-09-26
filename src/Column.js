import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import idx from 'idx';

import List from './List';

export default class Column extends React.Component {
  render() {
    const { index, positionApplicationStatus, kanban } = this.props;
    const column = kanban.columns.reduce(
      (acc, column) =>
        column.positionApplicationStatus.id === positionApplicationStatus.id ? column : acc,
      null,
    );
    return (
      <Draggable draggableId={positionApplicationStatus.id} index={index} isDragDisabled={true}>
        {(provided, snapshot) => (
          <div
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              height: 300,
              marginBottom: 10,
            }}
            ref={provided.innerRef}
          >
            <div
              style={{
                height: 50,
                transition: 'background-color 0.1s ease',
                backgroundColor: 'rgba(96, 115, 137, 0.04)',
                borderRight: '1px solid rgba(96, 115, 137, 0.12)',
                borderTop: '1px solid rgba(96, 115, 137, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                borderLeft: '1px solid rgba(96, 115, 137, 0.12)',
              }}
            >
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#515c6a',
                  padding: 10,
                  transition: 'background-color ease 0.2s',
                  flexGrow: 1,
                  userSelect: 'none',
                  position: 'relative',
                }}
              >
                Status um
              </h4>
              <p
                style={{
                  borderRadius: 9,
                  backgroundColor: 'rgba(96, 115, 137, 0.16)',
                  padding: '0px 10px',
                  marginRight: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Open Sans',
                  color: '#515c6a',
                }}
              >
                {idx(column, _ => _.rowsCount) || 0}
              </p>
            </div>
            {/* <List
              key={index}
              listId={positionApplicationStatus.id}
              listType="QUOTE"
              positionApplicationStatus={positionApplicationStatus}
              column={column}
            /> */}
          </div>
        )}
      </Draggable>
    );
  }
}
