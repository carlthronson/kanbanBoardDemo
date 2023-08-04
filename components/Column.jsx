import { Droppable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 300px;
    height: 475px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`   ;

const Title = styled.h2`
    padding: 8px;
    background-color: pink;
    text-align: center;
`   ;

const TaskList = styled.div`
    padding: 3px;
    transition: background-color 0.2s ease;
    background-color: f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`   ;

const Task = styled.div``;

export default function Column({ title, tasks, id }) {
    return (<Container className='column'>
        <Title
            style={{
                background: 'lightblue',
                position: 'sticky'
            }}>
            {title}
        </Title>
        <Droppable droppableId={id}>
            {(provided, snapshot) => {
                <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}>
                    {/* Provide your tasks */}
                    <Title task={{id:123, title: 'Make a progress board'}} index='1' ></Title>
                    {provided.placeholder}
                </TaskList>
            }}
        </Droppable>
    </Container>
    );
}