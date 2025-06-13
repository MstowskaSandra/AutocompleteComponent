import React from 'react'
import * as S from './SuggestionsList.styles';

const SuggestionsList = ({ suggestions, handleSuggestionClick, highlightedIndex, suggestionRefs }) => {
  return (
    <S.SuggestionsList>
        {suggestions.map((suggestion, index) => (
            <S.Suggestion 
                onClick={() => handleSuggestionClick(suggestion)} 
                key={suggestion}
                ref={(el) => (suggestionRefs.current[index] = el)}
                isActive={highlightedIndex === index}
                >
                {suggestion}
            </S.Suggestion> 
        ))}
    </S.SuggestionsList>
  );
};

export default SuggestionsList;