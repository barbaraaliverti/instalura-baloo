import styled from 'styled-components';
import propToStyle from '../../../../theme/helpers/propToStyle';

const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flex')}
    ${propToStyle('flexDirection')}
    ${propToStyle('alignItems')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundPosition')}
    
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    
    ${propToStyle('width')}
    ${propToStyle('listStyle')}
    ${propToStyle('margin')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginRight')}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;

export default Box;
