import styled from'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: linear-gradient(to right, #26a7b8, #ffa500);
    white-space: nowrap;
    padding: ${({big}) => (big ? `14px 48x` : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'linear-gradient(to right, #ffa500, #26a7b8)': 'linear-gradient(to right, #d95858, #4b4b4b)')};
    }
`;