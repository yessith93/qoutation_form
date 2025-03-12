import { useState,useEffect,useRef } from 'react';
const Dropdown = ({ label_text, options, onChange,previouslySelectedOption}) => {
    const [labelText, setLabelText] = useState(label_text);
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);
    //open and close dropdown
     const handleLabelClick = () => setIsOpen((prev) => !prev);
    
    //change the label when an option is clicked and select the option
    const handleOptionClick = (option) => { 
        setLabelText(option.name);
        setIsOpen(false);
        onChange(option);        
    }
    //select the first option when there is only one option
    useEffect(() => {
        if (options.length === 1) {
            handleOptionClick(options[0]);
        }else{
            setLabelText(label_text);
        }
        if (previouslySelectedOption && previouslySelectedOption.name && previouslySelectedOption.name.length > 0 && options.length>1) {
            if (options.find(o => o.id === previouslySelectedOption.id)) {
                handleOptionClick(previouslySelectedOption);
            }
        }
    }, [options,previouslySelectedOption]);

    return (
        <div className={`enc-select ${options.length === 0  ? 'disable' :  ''} `} >
            <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                <div className="enc-select" onClick={handleLabelClick}>
                    <p className="drop-txt">{labelText}</p>
                    <figure className="ic-arrow">
                        <img src="/icons/ic_arrow_d.svg" alt="" />
                    </figure>
                </div>
                <div 
                    className="list-select" 
                    ref={listRef} 
                    style={{ maxHeight: isOpen ? `${listRef.current?.scrollHeight}px` : '0px' }}
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