import styled from '@emotion/styled';

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

export const StyledGoodStat = styled.span`
  color: rgb(142, 201, 142);
`;

export const StyledNeutralStat = styled.span`
  color: rgb(156, 156, 156);
`;
export const StyledBadStat = styled.span`
  margin-bottom: 20px;
  color: rgb(221, 161, 112);
`;
