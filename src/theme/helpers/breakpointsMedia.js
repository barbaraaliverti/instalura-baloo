import { css } from 'styled-components';
import { breakpoints } from '../breakpoints';

const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointNames = Object.keys(cssByBreakpoints);

  return breakpointNames.map((breakpointName) => css`
            @media screen and (min-width: ${breakpoints[breakpointName]}px) {
                ${cssByBreakpoints[breakpointName]} //css ex. "background: blue"
            }
        `);
};

export default breakpointsMedia;
