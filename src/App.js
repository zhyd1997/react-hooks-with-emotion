import React from 'react';
import styled from '@emotion/styled';
import './style.css';

/**
 * case 1: grid-row-gap: 8px;                                                   worked
 * case 2: grid-row-gap: var(--cx-spacing-1x);                                  not worked
 * case 3: grid-row-gap: ${({ gutter = 1 }) => `var(--cx-spacing-${gutter}x)`;} not worked
 * 
 * if we change case 2 and 3 with row-gap, all cases will worked.
 */

const StyledTitle = styled.div`
  display: grid;
  grid: auto-flow/0.5fr 1fr;
  ${({ gutter = 2 }) => `grid-row-gap: var(--cx-spacing-${gutter}x);`}
  padding: var(--cx-spacing-4x);
`

const App = ({ title }) => {
    return <StyledTitle >{title}</StyledTitle>
}

export default App;
