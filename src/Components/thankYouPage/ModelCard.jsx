const ModelCard = ({ model, version }) => (
  <article className="car-card">
    <figure className="img-wrap">
      <img src={model.img} alt={model.name} />
      <h3 className="car-txt">{model.name}</h3>
      <h3 className="car-txt">{version.name}</h3>
    </figure>
  </article>
);

export default ModelCard;