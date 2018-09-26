import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './Column';

export default class ReactKanban extends React.Component {
  render() {
    const { positionApplicationStatuses, jobRequest } = this.props;
    return (
      <DragDropContext>
        <Droppable droppableId="kanban" type="COLUMN" direction="horizontal" isDropDisabled={true}>
          {provided => (
            <div style={{ minWidth: '100vw', display: 'inline-flex' }} ref={provided.innerRef}>
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
