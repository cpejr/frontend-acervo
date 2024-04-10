import styled from "styled-components";
import { Upload as AntdUpload } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Upload = styled(AntdUpload)`
  width: 100%;
  .ant-upload.ant-upload-select {
    width: 100%;
  }
  .ant-upload-list-item-container {
    display: none;
  }
`;
export const StyledGhost = styled.input`
  width: 70%;
  height: 3rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${(props) => props?.color};
  font-size: 20px;
  background-color: inherit;
  padding-right: 25px;
  background: url(${(props) => props?.icon}) no-repeat;
  background-size: 40px;
  background-position: 95%;
  outline: none;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props?.color} solid`};
  &::placeholder {
    color: ${(props) => props?.color};
  }
  @media (max-width: 700px) {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

export const AddArchive = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.color};
`;
