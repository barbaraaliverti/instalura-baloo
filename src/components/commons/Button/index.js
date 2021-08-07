import styled, { css } from 'styled-components';
import get from 'lodash/get';
import theme from '../../../theme';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css`
    color: ${ (props) => {
        return get(props.theme, `colors.${props.variant}.color`);        
    }};;
    background: transparent;
`;

const ButtonDefault = css`    
    color: ${ (props) => {
        return get(props.theme, `colors.${props.variant}.contrastText`);        
    }};;
    background-color: ${ (props) => {
        return get(props.theme, `colors.${props.variant}.color`);
    }};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    //font-size, font-weight e line-height
    ${TextStyleVariants.smallestException}
    opacity: 1;
    border-radius: 8px;
    ${(props) => {
        if(props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    transition: opacity${({ theme }) => theme.transition};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

