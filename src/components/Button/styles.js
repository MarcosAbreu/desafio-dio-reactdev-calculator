import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-family: 'Roboto';

    flex: 1;

    &:hover{
        opacity: 0.8;
        font-weight: bold;
    }
`