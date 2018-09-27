import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './Column';

export default class ReactKanban extends React.Component {
  render() {
    const { positionApplicationStatuses, jobRequest, onDragStart, onDragEnd } = this.props;
    return (
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable
          droppableId="kanban"
          type="COLUMN"
          direction="horizontal"
          ignoreContainerClipping={false}
          isDropDisabled={true}
        >
          {provided => (
            <div
              style={{ minWidth: '100vw', display: 'inline-flex' }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {positionApplicationStatuses.map((item, index) => (
                <Column
                  key={index}
                  positionApplicationStatus={item}
                  index={index}
                  kanban={jobRequest.kanban}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
