import styled from "styled-components";

const Input = styled.input`
    padding: 1.5rem 3rem;
    font-size: ${({theme}) => theme.fontSize.s};
    font-weight: ${({theme}) => theme.bold};
    background-color: ${({theme}) => theme.grey100};
    border: none;
    border-radius: 50px;

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${({theme}) => theme.grey300};
    }
`;

export default Input;
