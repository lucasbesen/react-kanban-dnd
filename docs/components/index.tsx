/* tslint:disable-next-line */
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #607389;
  margin-right: 5px;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #607389;
`;

export const Title = styled.span`
  font-size: 21px;
  color: #607389;
  font-weight: 600;
  align-self: center;
`;
