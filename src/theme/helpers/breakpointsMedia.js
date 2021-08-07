import { breakpoints } from '../../theme/breakpoints';
import { css } from 'styled-components';

export const breakpointsMedia = (cssByBreakpoints) => {
    const breakpointNames = Object.keys(cssByBreakpoints);

    return breakpointNames.map((breakpointName) => {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointName]}px) {
                ${cssByBreakpoints[breakpointName]} //css ex. "background: blue"
            }
        `
    });
};