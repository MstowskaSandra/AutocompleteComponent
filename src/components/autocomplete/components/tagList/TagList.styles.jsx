import styled from "styled-components";

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
