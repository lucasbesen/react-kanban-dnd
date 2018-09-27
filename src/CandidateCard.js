// @flow
import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

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
      <a
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={{
          boxShadow: isDragging ? `2px 2px 1px rgba(0,0,0,0.2)` : 'none',
          minHeight: 40,
          marginBottom: 8,
          userSelect: 'none',
          transition: 'background-color 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          border: '1px solid rgba(96, 115, 137, 0.12)',
          backgroundColor: '#ffffff',
          padding: '9px 0px 9px 9px',
        }}
      >
        <div style={{ flexGrow: 1, flexBasis: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: '#607389',
                fontFamily: 'Open Sans',
                marginTop: 0,
              }}
            >
              {candidate.name}
            </p>
            <Icon onClick={() => console.log('xd')}>more_vert</Icon>
            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={this.handleCloseMenu}>
              <MenuItem key={`${candidate.id}-view`} onClick={this.handleViewCandidate}>
                Visualizar candidato
              </MenuItem>
              <MenuItem key={`${candidate.id}-view`} onClick={this.handleViewCandidateAllInfo}>
                Visualizar capa de contratação
              </MenuItem>
              <MenuItem
                key={`${candidate.id}-remove`}
                onClick={this.handleRemoveCandidateApplication}
              >
                Remover candidato
              </MenuItem>
            </Menu>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <span
                style={{ fontSize: 12, fontWeight: 600, color: '#607389', fontFamily: 'Open Sans' }}
              >
                Entrevistas:
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: '#607389',
                  fontFamily: 'Open Sans',
                  marginLeft: 5,
                  marginRight: 9,
                }}
              >
                {candidate.interviewsCount}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <span
                style={{ fontSize: 12, fontWeight: 600, color: '#607389', fontFamily: 'Open Sans' }}
              >
                Documentos:
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: '#607389',
                  fontFamily: 'Open Sans',
                  marginLeft: 5,
                  marginRight: 9,
                }}
              >
                {candidateDocumentStatus}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <span
              style={{ fontSize: 12, fontWeight: 600, color: '#607389', fontFamily: 'Open Sans' }}
            >
              Prova:
            </span>
            <span
              style={{
                fontSize: 12,
                color: '#607389',
                fontFamily: 'Open Sans',
                marginLeft: 5,
                marginRight: 9,
              }}
            >
              {examStatus}
            </span>
          </div>
        </div>
      </a>
    );
  }
}
