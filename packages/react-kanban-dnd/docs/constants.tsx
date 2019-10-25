/* tslint:disable-next-line */
import React from 'react';
import {
  RowWrapper,
  InfoWrapper,
  Label,
  Value,
  Wrapper,
  Title,
} from './components';

export const columns = [
  {
    id: 'column1',
    title: 'Column 1',
    rows: [
      {
        id: 'children1',
        name: 'John',
        age: '21',
      },
      {
        id: 'children2',
        name: 'Alex',
        age: '33',
      },
    ],
  },
  {
    id: 'column2',
    title: 'Column 2',
    rows: [
      {
        id: 'children3',
        name: 'Michael',
        age: '29',
      },
      {
        id: 'children4',
        name: 'Carl',
        age: '26',
      },
    ],
  },
  {
    id: 'column3',
    title: 'Column 3',
    rows: [
      {
        id: 'children5',
        name: 'Joelton',
        age: '25',
      },
      {
        id: 'children6',
        name: 'Steve',
        age: '26',
      },
    ],
  },
];

export const renderCard = row => (
  <RowWrapper>
    <InfoWrapper>
    <Label>Name:</Label>
    <Value>{row.name}</Value>
    </InfoWrapper>
    <InfoWrapper>
    <Label>Age:</Label>
    <Value>{row.age}</Value>
    </InfoWrapper>
  </RowWrapper>
);
