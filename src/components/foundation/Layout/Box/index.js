import styled from 'styled-components';
import { propToStyle } from '../../../../theme/helpers/propToStyle';

export const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flex')}
    ${propToStyle('flexDirection')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
`;