import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 20rem;
    width: 100%;
    border: 2px solid #ccc;
    border-radius:  0.75rem;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 0.0625rem solid #ccc;
    font-size: 1rem;
    border-radius: 0.5rem;
    background-color: #fafafa;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: #0077ff;
        background-color: #fff;
    }
`;

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

export const TagsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 0.75rem;
    margin: 0.5rem 0 ;
    padding: 0 ;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
    background-color: #fff;
    max-height: 12rem;
    overflow-y: auto;
`;

export const Tag = styled.div`
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 0.25rem;
    margin-left: 0.25rem;
    margin-bottom: 0.25rem;
    border-radius: 5px;
`;

export const RemoveButton = styled.button`
    background: none;
    color: #888;
    border: none;
    cursor: pointer;

    &:hover {
        color: black;
    }
`;

export const AddButton = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  margin-left: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
`;