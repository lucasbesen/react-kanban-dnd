import * as React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './Column';

const Container = styled.div`
  min-width: 100vw;
  display: inline-flex;
`;

export default class ReactKanban extends React.Component {
  render() {
    const { columns } = this.props;
    return (
      <DragDropContext>
        <Droppable droppableId="kanban" type="COLUMN" direction="horizontal" isDropDisabled={true}>
          {provided => (
            <Container innerRef={provided.innerRef} {...provided.droppableProps}>
              {columns.map((item, index) => (
                <Column key={index} />
              ))}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
