import InfoList from './InfoList';
const Info = ({ userInformation, additionalInfo }) => (
    <div className="cont-info">
        <div className="subtit only-desktop">Revisa tus datos <img src="/icons/ic_arrow_r.svg" alt="" /></div>
        <div className="row-info only-desktop">
            <InfoList items={userInformation} />
            <InfoList items={additionalInfo} />
        </div>
    </div>
);

export default Info;
