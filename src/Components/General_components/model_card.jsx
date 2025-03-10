import arrow from '/icons/ic_arrow_r.svg';

const ModelCard = ({ model, noArrow = false }) => {
    const { name, img } = model;
    return (
        <article className="car-item">
            <figure className="img-wrap">
                <img src={img} alt={name} />
            </figure>
            <div className="cont-subtit">
                <h3 className="subtit">{name}</h3>
                {noArrow === true ? null : <img className="ic-arrow" src={arrow} alt="ic_arrow" />}
            </div>
        </article>
    );
};
export default ModelCard;