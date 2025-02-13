import { useState,useEffect,useRef } from 'react';
const Dropdown = ({ label_text, options, onChange }) => {
    const [labelText, setLabelText] = useState(label_text);
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);

    const handleLabelClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && listRef.current) {
          listRef.current.style.maxHeight = listRef.current.scrollHeight + 'px';
        } else if (listRef.current) {
          listRef.current.style.maxHeight = '0px';
        }
      }, [isOpen]);
    
    useEffect(() => {
        setIsOpen(false);
    }, [labelText]);
  
      const handleOptionClick = (option) => { // Call the parent's onChange function
          setLabelText(option.name);
          onChange(option);
      }

    return (
        <div className="enc-select" style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
            <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                <div className="enc-select" onClick={handleLabelClick}>
                    <p className="drop-txt">{labelText}</p>
                    <figure className="ic-arrow">
                        <img src="/src/assets/icons/ic_arrow_d.svg" alt="" />
                    </figure>
                </div>
                <div className="list-select" ref={listRef} style={{ maxHeight: '0px' }}>
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