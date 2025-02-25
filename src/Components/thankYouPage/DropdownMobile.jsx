import { useState } from 'react';

const DropdownMobile = ({ userInformation, additionalInfo }) => {
    const [showDetailsMobile, setShowDetailsMobile] = useState(false);

    const handleToggleDetailsMobile = () => {
        setShowDetailsMobile(!showDetailsMobile);
    };

    return (
        <div className="dropdown-container only-mobile">
            <div className="enc-select">
                <button className="btn-dropdown" onClick={handleToggleDetailsMobile} aria-expanded={showDetailsMobile} >
                    Ver detalle <img src="/src/assets/icons/ic_arrow_d.svg" alt="ic_arrow" />
                </button>
            </div>
            {showDetailsMobile && (
                <div className="list-select">
                    <div className="article-inner">
                        <div className="row-info">
                            <InfoList items={userInformation} />
                            <InfoList items={additionalInfo} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMobile;