import React from 'react';

import { 
  Header, 
  Wrap, 
  H3, 
  ButtonSubmit,
  ButtonDiscreet
} from '@flec/flec-brand-ui';

const HeaderAction = props => {
  const { title, pristine, cancelAction, actionType } = props;

  const submitCopy = actionType === 'edit' ? 'Save changes' : 'Save';

  return (
    <Wrap spaceY="3" spaceX="6">
      <Header modifiers="tall">
        <Header.Left tight={true}>
          <H3>{title}</H3>
        </Header.Left>

        <Header.Right tight={true}>
          <ButtonDiscreet onClick={cancelAction}>Cancel</ButtonDiscreet>
          <ButtonSubmit disabled={pristine}>{submitCopy}</ButtonSubmit>
        </Header.Right>
      </Header>
    </Wrap>
  );
};

export default HeaderAction;