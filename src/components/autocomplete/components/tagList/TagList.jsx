import React from 'react';
import * as S from './TagList.styles';

const TagList = ({ selectedItems, handleRemove }) => {
  return (
    <S.TagsWrapper>
      {selectedItems.map(item => (
        <S.Tag key={item}>
            <span>{item}</span>
            <S.RemoveButton onClick={() => handleRemove(item)}>x</S.RemoveButton>
        </S.Tag>
      ))}
    </S.TagsWrapper>
  );
};

export default TagList;