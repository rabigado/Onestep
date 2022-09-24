import styled from 'styled-components';

export const flex = styled.div`display: flex;`;
export const flexCenter = styled.div`display: flex; align-items: center;`;
export const flexColumn = styled.div`display: flex;flex-direction: column`;
export const flexColumnCenter = styled.div`display: flex;flex-direction: column;align-items: center;`;
export const LineDivider = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.primaryBackground};
`;
