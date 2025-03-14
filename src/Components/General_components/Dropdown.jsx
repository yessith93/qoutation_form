import { useState,useEffect,useRef } from 'react';
const Dropdown = ({ label_text, options, onChange,previouslySelectedOption}) => {
    const [labelText, setLabelText] = useState(label_text);
    const [selectedOption, setSelectedOption] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);
    //open and close dropdown
    const handleLabelClick = () => setIsOpen((prev) => !prev);
    //open and close dropdown
    useEffect(() => {
        if (listRef.current) {
            listRef.current.style.maxHeight = isOpen ? `${listRef.current.scrollHeight}px` : "0px";
        }
    }, [isOpen]);
    
    //change the label when an option is clicked and select the option
    const handleOptionClick = (option) => { 
        // setLabelText(option.name);
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);        
    }
    //select the first option when there is only one option
    useEffect(() => {
        if (options.length === 1) {
            setSelectedOption(options[0]);
            onChange(options[0]);
        }else if (previouslySelectedOption && options.find(o => o.id === previouslySelectedOption.id)) {
            setSelectedOption(previouslySelectedOption);
            onChange(previouslySelectedOption);
        }else {
            setSelectedOption(null); // Si no hay selección válida, limpiar
        }
    }, [options,previouslySelectedOption]);

    return (
        <div className={`enc-select ${options.length === 0  ? 'disable' :  ''} `} >
            <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                <div className="enc-select" onClick={handleLabelClick}>
                    <p className="drop-txt">{selectedOption ? selectedOption.name : label_text}</p>
                    <figure className="ic-arrow">
                        <img src="/icons/ic_arrow_d.svg" alt="" />
                    </figure>
                </div>
                <div 
                    className="list-select" 
                    ref={listRef} 
                >
                    <div className="article-inner">
                        <ul>
                            {options.length > 0 ? (
                                options.map((option) => (
                                    <li key={option.id} data-id={option.id} onClick={() => handleOptionClick(option)}>
                                        <a>{option.name}</a>
                                    </li>
                                ))
                            ) : (
                                <li>No hay versiones disponibles</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dropdown;