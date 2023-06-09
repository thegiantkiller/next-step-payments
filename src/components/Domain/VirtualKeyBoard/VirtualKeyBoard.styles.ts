import styled from 'styled-components';
import { FormInput } from '../../UI/';

export const Layout = styled.div`
  width: 385px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  height: fit-content;
  border-radius: 5px 5px 15px 15px;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  z-index: 9999;
`;

export const KeyContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 125px);
  grid-template-rows: repeat(4, 125px);
`;
export const Key = styled.button`
  background-color: green;
  color: white;
  border: none;
  text-align: center;
  font-size: 24px;
  padding: 25px 0px;
  cursor: pointer;
  :hover {
    background-color: bisque;
  }
`;

export const PasswordInput = styled(FormInput)`
  font-size: 50px;
  border-bottom: 1px solid green;
  margin-bottom: 20px;
  width: 75%;
`;
export const Title = styled.h1`
  padding: 10px;
`;
