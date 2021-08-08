import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/helpers/breakpointsMedia';
import { propToStyle } from '../../../theme/helpers/propToStyle';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};;
    background: transparent;
`;

const ButtonDefault = css`    
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};;
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    
    opacity: 1;
    border-radius: 8px;
    ${(props) => {
    if (props.ghost) {
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

    //alignment
    ${propToStyle('alignText')}
    ${propToStyle('display')}
    ${propToStyle('margin')}

    //media query - font-size, font-weight e line-height
    ${breakpointsMedia({
    xs: css`
        /* All devices */
            ${TextStyleVariants.smallestException}
        `,
    md: css`
        /* From md breakpoint */
            ${TextStyleVariants.paragraph1}
        `,
  })}

`;

export default Button;
