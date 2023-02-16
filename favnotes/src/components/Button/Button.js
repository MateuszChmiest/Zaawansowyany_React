import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  width: ${({ width }) => width || '22rem'};
  height: 4.7rem;
  border: none;
  border-radius: 5rem;
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
    `}
`;

export default Button;
