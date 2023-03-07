import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({theme}) => theme.note};
  /* background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'}; */
  width: 22rem;
  height: 4.7rem;
  border: none;
  border-radius: 5rem;
  font-weight: 300;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    transform: scale(1.05);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
    `}
`;

export default Button;
