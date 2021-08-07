import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
};

const TextBase = styled.span`
    ${(props) => TextStyleVariants[props.variant]}
`;

const Text = ({ tag, variant, children }) => {
    return (
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>

    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
};

export default Text;

//p, h1-h6, span = tags
// estilos = variant