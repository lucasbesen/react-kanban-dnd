// @flow
import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const Container = styled.a`
  border-radius: 2px;
  border: 1px solid rgba(96, 115, 137, 0.12);
  background-color: ${({ isDragging }) => (isDragging ? '#ffffff' : '#ffffff')};
  box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px rgba(0,0,0,0.2)` : 'none')};
  padding: 9px 0px 9px 9px;
  min-height: 40px;
  margin-bottom: 8px;
  user-select: none;
  transition: background-color 0.5s ease;
  /* anchor overrides */
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
  }
  &:focus {
    outline: 2px solid purple;
    box-shadow: none;
  }
  /* flexbox */
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  /* flex child */
  flex-grow: 1;
  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;
  /* flex parent */
  display: flex;
  flex-direction: column;
`;

const CandidateName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #607389;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0px !important;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #607389;
  font-family: 'Open Sans', sans-serif;
`;

const Value = styled.span`
  font-size: 12px;
  color: #607389;
  font-family: 'Open Sans', sans-serif;
  margin-left: 5px;
  margin-right: 9px;
`;

export default class QuoteItem extends React.PureComponent {
  state = {
    anchorEl: null,
  };

  handleOpenMenu = event => this.setState({ anchorEl: event.currentTarget });

  handleCloseMenu = () => this.setState({ anchorEl: null });

  handleViewCandidate = () =>
    this.props.history.push(routeTo('candidates.view', { id: this.props.row.candidate.id }));

  handleViewCandidateAllInfo = () => {
    const {
      history,
      row: { candidate, jobRequest },
    } = this.props;
    history.push(
      routeTo('candidates.view.allInfo', { id: candidate.id, jobRequestId: jobRequest.id }),
    );
  };

  handleRemoveCandidateApplication = () => {
    const { row, showSnackbar } = this.props;

    const input = {
      id: row.id,
    };

    const onError = () => {
      showSnackbar({
        message: 'Ocorreu um erro ao realizar a operação',
      });
    };

    const onCompleted = ({ PositionApplicationRemove }) => {
      if (PositionApplicationRemove.error) {
        return onError();
      }
      showSnackbar({ message: 'Operação feita com êxito!' });
    };
  };

  render() {
    const {
      isDragging,
      provided,
      row: { candidate },
    } = this.props;
    const { anchorEl } = this.state;

    const candidateDocumentStatus = `${candidate.completedDoc} / ${candidate.wrongDoc +
      candidate.pendingDoc +
      candidate.inAnalysisDoc +
      candidate.completedDoc}`;

    const examStatus = `${candidate.jobExamApprovedApplicationCount}/${
      candidate.jobExamCandidateApplicationCount
    }`;

    return (
      <Container
        isDragging={isDragging}
        innerRef={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Content>
          <InfoWrapper>
            <CandidateName>{candidate.name}</CandidateName>
            <Icon onClick={() => console.log(1)}>more_vert</Icon>
          </InfoWrapper>
          <InfoWrapper>
            <Wrapper>
              <Title>Entrevistas:</Title>
              <Value>{candidate.interviewsCount}</Value>
            </Wrapper>
            <Wrapper>
              <Title>Documentos:</Title>
              <Value>{candidateDocumentStatus}</Value>
            </Wrapper>
          </InfoWrapper>
          <InfoWrapper>
            <Wrapper>
              <Title>Prova:</Title>
              <Value>{examStatus}</Value>
            </Wrapper>
          </InfoWrapper>
        </Content>
      </Container>
    );
  }
}
