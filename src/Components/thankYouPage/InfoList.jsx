const InfoList = ({ items }) => (
    <ul className="info-list">
      {items.map((item, index) => (
        <li key={index}>
          <p className="pref">{item.label}</p>
          <p className="txt">{item.value}</p>
        </li>
      ))}
    </ul>
  );

  export default InfoList;