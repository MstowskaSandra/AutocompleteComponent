import React, { useState, useEffect, useRef }from 'react'
import * as S from './Autocomplete.styles';

const Autocomplete = ({ options }) => {
    const [value, setValue] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [localOptions, setLocalOptions] = useState(options);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const suggestions = localOptions.filter( option => option.toLowerCase().includes(value.toLowerCase()));
    const suggestionRefs = useRef([]);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        if (!selectedItems.includes(suggestion)) {
        setSelectedItems(prev => [...prev, suggestion]);
        }
        setValue("");
        setShowSuggestions(false);
        setHighlightedIndex(-1);
    };

    const handleRemove = (itemToRemove) => {
        setSelectedItems(prev => prev.filter(item => item !== itemToRemove));
    };

    const handleAddTag = () => {
        const trimmedValue = value.trim();

        if (!trimmedValue) return;

        if (!localOptions.includes(trimmedValue)) {
            setLocalOptions(prev => [...prev, trimmedValue]);
        }

        if (!selectedItems.includes(trimmedValue)) {
            setSelectedItems(prev => [...prev, trimmedValue]);
        }

        setValue("");
        setShowSuggestions(false);
    };

    const handleKeyDown = (event) => {
        if (!showSuggestions) return;

        switch (event.key) {
            case "ArrowDown": 
              setHighlightedIndex((prev) => prev < suggestions.length - 1 ? prev + 1 : 0);
              break;

            case "ArrowUp": 
              setHighlightedIndex((prev) => prev > 0 ? prev -1 : suggestions.length -1);
              break;
            
            case "Enter":
                if (highlightedIndex >= 0) {
                    handleSuggestionClick(suggestions[highlightedIndex]);
                }
                break;
                
            default:
                break;    
        }
    };

   useEffect(() => {
    if ( highlightedIndex >= 0 && suggestionRefs.current[highlightedIndex]) {
        suggestionRefs.current[highlightedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        });
    }
}, [highlightedIndex]);


  return (
    <S.Container>
        <S.InputWrapper>
            <S.Input 
            placeholder='Search'
            value={value}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            />
            <S.AddButton onClick={handleAddTag}>Add Tag</S.AddButton>
        </S.InputWrapper>
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
        )}  
    </S.Container>
  );
};

export default Autocomplete;