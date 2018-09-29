import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Column from './Column';

const Container = styled.div`
  min-width: 100vw;
  display: inline-flex;
`;

export default class ReactKanban extends React.Component {
  render() {
    const {
      positionApplicationStatuses,
      jobRequest,
      onDragStart,
      onDragEnd,
      containerHeight,
      renderCard,
    } = this.props;
    return (
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
          ignoreContainerClipping={Boolean(containerHeight)}
          isDropDisabled={true}
        >
          {provided => (
            <Container innerRef={provided.innerRef} {...provided.droppableProps}>
              {positionApplicationStatuses.map((item, index) => (
                <Column
                  key={index}
                  positionApplicationStatus={item}
                  index={index}
                  kanban={jobRequest.kanban}
                  renderCard={renderCard}
                />
              ))}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
