import styled from "styled-components";

const Wrap = styled.div`

  padding-top: ${
    props => props.spaceTop
  };

  padding-bottom: ${
    props => props.spaceBottom
  };

  padding-left: ${
    props => props.spaceLeft
  };

  padding-right: ${
    props => props.spaceRight
  };

  ${props => props.backgroundImage &&
     `height: 100%;
      background-size: cover;
      background-repeat: no-repeat;`
  };

  ${props => props.dropShadow &&
     `
     -webkit-box-shadow: inset -42px -28px 150px 92px rgba(32,33,33,1);
     -moz-box-shadow: inset -42px -28px 150px 92px rgba(32,33,33,1);
     box-shadow: inset -42px -28px 150px 92px rgba(32,33,33,1);
     `
  };

  border: ${
    props => props.border
  };

  border-left: ${
    props => props.borderLeft
  };

`;

Wrap.defaultProps = {
  dropShadow: false
}

export default Wrap;
