import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { dateAndTime } from '../../common/date';

import { 
  Wrap, 
  Header,
  ButtonSecondary,
  ButtonDiscreet,
  CircularDelete,
  LinkBack,
  Text
} from '@flec/flec-brand-ui';

const HeaderViewAction = props => {
  const { 
    type, 
    toggleAction, 
    showConfirmModal, 
    previousRoute, 
    previousLabel, 
    verboseDeleteButton,
    verboseDeleteLabel,
    disableDelete,
    createdAt,
    updatedAt
  } = props;

  const dateFormat = 'D/M/YYYY h:mm';

  const createdAtFormat = createdAt && dateAndTime(createdAt);
  const updatedAtFormat = updatedAt && dateAndTime(updatedAt);

  return (
    <Wrap spaceY="2" spaceX="6">
      <Header modifiers="tall">
        <Header.Left tight={true}>
          <NavLink to={previousRoute}>
            <LinkBack>{previousLabel}</LinkBack>
          </NavLink>
        </Header.Left>

        <Header.Right tight={true}>
          <Header.Meta label="Last updated" data={`M. Smith, 28/3/2019 12:03`} />
          <Header.Meta label="Created" data={`M. Smith, 28/3/2019 10:34`} />
          {verboseDeleteButton ? 
            <ButtonDiscreet disabled={disableDelete} onClick={showConfirmModal}>
              {verboseDeleteLabel}
            </ButtonDiscreet>
          :
            <CircularDelete onClick={showConfirmModal} />
          }
          <ButtonSecondary onClick={toggleAction}>Edit {type}</ButtonSecondary>
        </Header.Right>
      </Header>
    </Wrap>
  );
};

HeaderViewAction.propTypes = {
  verboseDeleteButton: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
}

HeaderViewAction.defaultProps = {
  verboseDeleteButton: false,
  createdAt: '',
  updatedAt: '',
}

export default HeaderViewAction;