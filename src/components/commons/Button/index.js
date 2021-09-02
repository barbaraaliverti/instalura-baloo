/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Link from '../../Link';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/helpers/breakpointsMedia';
import propToStyle from '../../../theme/helpers/propToStyle';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};;
    background: transparent;
`;

const ButtonDefault = css`    
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};;
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonWrapper = styled.button`
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

    &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

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

const Button = ({ href, ...props }) => {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props} />
  );
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};

export default Button;
