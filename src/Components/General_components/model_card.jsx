import arrow from '/icons/ic_arrow_r.svg';

const ModelCard = ({ model, versionName, noArrow = false,specifications=false }) => {
    const { name, img } = model;
    if (!!model) return <div>No model</div>
    return (
        <article className="car-item">
            <figure className="img-wrap">
                <img src={img} alt={name} />
            </figure>
            <div className="cont-subtit">
                <h3 className="subtit">{specifications ? "Modelo: ": ""}{name}</h3>
                {noArrow === true ? null : <img className="ic-arrow" src={arrow} alt="ic_arrow" />}
                {versionName && <h3 className="subtit version">{specifications? "Versión: ": ""}{versionName}</h3>}
            </div>
        </article>
    );
};
export default ModelCard;