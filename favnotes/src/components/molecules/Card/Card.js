import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import LinkIcon from '../../../assets/icons/pen.svg';

const StyledWrapper = styled.div`
  min-height: 300px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({flex}) => flex && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

const DateInfo = styled(Paragraph)`
    font-weight: ${({theme}) => theme.bold};
    font-size: ${({theme}) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
    margin: 5px 0 0;
`;

const StyledAvater = styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({theme}) => theme.twitter};
    border-radius: 50px;
    position: absolute;
    right: 20px;
    top: 25px;
    z-index: 1;
`;

const StyledLinkButton = styled.a`
    display: block;
    width: 47px;
    height: 47px;
    border-radius: 50px;
    background: white url(${LinkIcon}) no-repeat;
    background-size: 60%;
    background-position: 50%;
    position: absolute;
    right: 20px;
    top: 25px;
`

const Card = ({cardType}) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <StyledAvater src='https://pbs.twimg.com/media/D_eP7UDWwAA2mA8.png'/>}
      {cardType === 'article' && <StyledLinkButton href='#'/>}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adispisicing elit. Suscipit nemo ducimus fuga
        repellendus illum
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
}

Card.defaultProps = {
    cardType: 'note',
}

export default Card;
