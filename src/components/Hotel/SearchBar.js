import React from 'react'
import { NavLink } from 'react-router-dom';

import { 
  Sticky,
  ListFilterBlock,
  Row,
  ButtonCreate
} from '@flec/flec-brand-ui';

const ListSearchBar = ({ searchAction, location, buttonText }) => {
  return (
    <Sticky position="64px">
      <ListFilterBlock>
        <Row columns="4fr max-content" gap="40px">
          <ListFilterBlock.SearchBar />

          <ListFilterBlock.CTA>
            <NavLink to={location}>
              <ButtonCreate>{buttonText}</ButtonCreate>
            </NavLink>
          </ListFilterBlock.CTA>

        </Row>
      </ListFilterBlock>
    </Sticky>
  )
}

ListSearchBar.defaultProps = {
  buttonText: 'Add new',
  location: "/"
}

export default ListSearchBar;
