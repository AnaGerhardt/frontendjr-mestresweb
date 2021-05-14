import styled from "styled-components";

export const TextInput = styled.input`
  outline: none;
  background: white;
  border: none;
  border-radius: 2rem;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  ::placeholder {
    opacity: 0.6;
  }
`;

export const MainButton = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 1.75rem;
  padding: 0.4rem;
  border: none;
  border-radius: 2rem;
  width: 100%;
`;
