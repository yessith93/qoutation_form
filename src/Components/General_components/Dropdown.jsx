import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const Dropdown = ({ label_text, options, onChange, previouslySelectedOption }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);

    // Open and close dropdown
    const handleLabelClick = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.style.maxHeight = isOpen ? `${listRef.current.scrollHeight}px` : "0px";
        }
    }, [isOpen]);

    // Change the label when an option is clicked and select the option
    const handleOptionClick = useCallback((option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    }, [onChange]);

    // Select the first option when there is only one option
    useEffect(() => {
        if (options.length === 1) {
            setSelectedOption(options[0]);
            onChange(options[0]);
        } else if (previouslySelectedOption && options.find(o => o.id === previouslySelectedOption.id)) {
            setSelectedOption(previouslySelectedOption);
            onChange(previouslySelectedOption);
        } else {
            setSelectedOption(null); // Clear if no valid selection
        }
    }, [options, previouslySelectedOption]);

    const renderedOptions = useMemo(() => options.map(option => (
        <li
            key={option.id}
            data-id={option.id}
            onClick={() => handleOptionClick(option)}
            role="option"
            aria-selected={selectedOption?.id === option.id}
        >
            <a>{option.name}</a>
        </li>
    )), [options, handleOptionClick, selectedOption]);

    return (
        <div
            className={`enc-select ${options.length === 0 ? 'disable' : ''}`}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-disabled={options.length === 0}
        >
            <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                <div
                    className="enc-select"
                    onClick={handleLabelClick}
                    aria-controls="dropdown-list"
                    aria-label={label_text}
                >
                    <p className="drop-txt">
                        {selectedOption ? selectedOption.name : label_text}
                    </p>
                    <figure className="ic-arrow">
                        <img src="/icons/ic_arrow_d.svg" alt="" />
                    </figure>
                </div>
                <div
                    className="list-select"
                    ref={listRef}
                    id="dropdown-list"
                    role="listbox"
                >
                    <div className="article-inner">
                        <ul>
                            {options.length > 0 ? (
                                renderedOptions
                            ) : (
                                <li role="option" aria-disabled="true">No hay versiones disponibles</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;