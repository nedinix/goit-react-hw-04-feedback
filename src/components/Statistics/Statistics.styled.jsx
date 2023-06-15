import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledStatisticsList = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li:not(:last-child) {
    margin-bottom: 4px;
  }

  li:nth-of-type(3) {
    margin-bottom: 20px;
  }
`;

export const StyledStatItem = styled.span`
  &:last-child {
    margin-bottom: 20px;
  }

  ${props => {
    switch (props.colorState) {
      case 'good':
        return css`
          color: rgb(142, 201, 142);
        `;
      case 'bad':
        return css`
          color: rgb(221, 161, 112);
        `;
      default:
        return css`
          color: rgb(156, 156, 156);
        `;
    }
  }}
`;
