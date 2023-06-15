import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledFeedbackOptionsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFeedbackButton = styled.button`
  width: 80px;
  height: 32px;
  display: block;

  background-color: rgb(218, 219, 218);
  color: rgb(59, 59, 59);

  border-style: none;
  border-radius: 4px;

  transition: box-shadow 150ms linear, background-color 100ms linear,
    color 100ms linear;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  ${props => {
    switch (props.colorState) {
      case 'good':
        return css`
          &:hover,
          &:focus {
            background-color: rgb(111, 214, 111);
            color: rgb(248, 248, 248);
          }
        `;
      case 'bad':
        return css`
          &:hover,
          &:focus {
            background-color: rgb(236, 104, 42);
            color: rgb(248, 248, 248);
          }
        `;
      default:
        return css`
          &:hover,
          &:focus {
            background-color: rgb(241, 241, 241);
          }
        `;
    }
  }}

  &:active {
    background-color: rgb(59, 59, 59);
    color: rgb(248, 248, 248);
  }
`;
