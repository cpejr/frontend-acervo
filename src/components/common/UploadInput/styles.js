import styled from "styled-components";
import { Upload as AntdUpload } from "antd";

export const Upload = styled(AntdUpload)`
  width: 100%;
  .ant-upload.ant-upload-select {
    width: 100%;
  }
  .ant-upload-list-item-container {
    width: 70%;
    align-self: center;
    margin-left: 15%;
    z-index: 1;
  }
`;
