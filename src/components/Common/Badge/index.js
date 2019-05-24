import styled from 'styled-components';

import theme from '../../../styles/theme/index.js';

const Badge = styled.div`
  height: 35px;
  width: auto;
  padding: 0 20px;
  background-color: ${theme.colours.gold.main};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  @media (max-width: 768px) {

  }

  @media (max-width: 576px) {

  }
`;

export default Badge;