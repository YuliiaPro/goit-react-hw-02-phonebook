import styled from '@emotion/styled';

export const FormDiv = styled.div`
  max-width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 200px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const FormButton = styled.button`
  text-transform: capitalize;
  padding: 5px;
  background-color: transparent;
  border: 1px solid #fbfbfb5f;
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  cursor: pointer;
  min-width: 80px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  &:hover {
    background-color: blue;
  }
`;
