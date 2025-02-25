const ModelCard = ({ model, version }) => {
  if (!model || !version) {
    return <div className="car-card">Cargando modelo...</div>;
  }
  return (
    <article className="car-card">
      <figure className="img-wrap">
        <img src={model?.img} alt={model?.name || "Modelo"} />
        <h3 className="car-txt">{model?.name}</h3>
        <h3 className="car-txt">{version?.name}</h3>
      </figure>
    </article>
  );
};

export default ModelCard;
