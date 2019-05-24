import styled from 'styled-components';

const VerticalOrientation = styled.div`

    display: flex;

  @media (min-width: 992px) {

    transform: rotate(270deg);
    transform-origin: 0;
    position: absolute;
    
    bottom: -23px;
    left: -30px;

    width: 624px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
  }


  @media (max-width: 1200px) {
    width: 574px;
  }

  
  @media (max-width: 991px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding-bottom: 16px;
    border-bottom: 1px solid grey;
    margin-bottom: 16px;
    width: 100%;
  }


`;

export default VerticalOrientation;