import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  list-style-type: disc;
`;

export const Btn = styled.button`
  text-transform: capitalize;
  height: 20px;
  background-color: transparent;
  border: 1px solid #fbfbfb5f;
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  cursor: pointer;
  min-width: 70px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  align-items: center;
  margin-left: 10px;
  white-space: nowrap;
  &:hover {
    background-color: blue;
  }
`;
