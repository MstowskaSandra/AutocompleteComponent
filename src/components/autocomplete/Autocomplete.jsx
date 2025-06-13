import React, { useState }from 'react'
import * as S from './Autocomplete.styles';

const Autocomplete = ({ options }) => {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const suggestions = options.filter( option => option.toLowerCase().includes(value.toLowerCase()));
    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSuggestionClick = (suggestion) => {
        if (!selectedItems.includes(suggestion)) {
        setSelectedItems(prev => [...prev, suggestion]);
        }
        setValue("");
        setShowSuggestions(false);
    };

    const handleRemove = (itemToRemove) => {
        setSelectedItems(prev => prev.filter(item => item !== itemToRemove));
    }

  return (
    <S.Container>
        <S.Input 
          placeholder='Search'
          value={value}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
        />
        <S.TagsWrapper>
          {selectedItems.map(item => (
            <S.Tag key={item}>
                <span>{item}</span>
                <S.RemoveButton onClick={() => handleRemove(item)}>x</S.RemoveButton>
            </S.Tag>
          ))}
        </S.TagsWrapper>
        {showSuggestions && (
            <S.SuggestionsList>
                {suggestions.map(suggestion => (
                    <S.Suggestion onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                        {suggestion}
                    </S.Suggestion> 
                ))}
            </S.SuggestionsList>
        )}  
    </S.Container>
  );
};

export default Autocomplete;