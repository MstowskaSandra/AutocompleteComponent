import styled from "styled-components";

export const Suggestion = styled.li`
    list-style: none;
    padding: 0.5rem 0.75rem;
    background-color: ${({ isActive }) => (isActive ? "#bde4ff" : "#f7f7f7")};
    border-top: 1px solid #ddd;
    cursor: pointer;
    font-size: 0.75rem;


    &:hover {
        background-color: #d4d4d4;
    }

    &:first-child {
        border-top: none;
    }
`;

export const SuggestionsList = styled.ul`
  margin-top: 0.5rem;
  padding: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  background-color: #fff;
  max-height: 12rem;
  overflow-y: auto;
`;