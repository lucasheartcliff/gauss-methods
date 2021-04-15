import styled from "styled-components";

export const Cell = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 550;
  display: flex;
  flex-direction: row;
  margin: 5px;

  .coordenates {
    font-size: 10px;
    color: #686868;
  }
`;
export const Matrix = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
