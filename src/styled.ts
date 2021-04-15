import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 0 10px;
`;
export const MatrixRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;
export const SummaryItem = styled.div`
  margin-left: 25px;
  span {
    color: #686868;
  }
`;
