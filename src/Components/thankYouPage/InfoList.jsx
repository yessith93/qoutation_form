import styles from '../../assets/css/quotation/Components/thankYouPage/InfoList.module.css';
console.log(styles);
const InfoList = ({ items }) => (
    <ul className={`${styles.info_list} info-list`}>
      {items.map((item, index) => (
        <li key={index}>
          <p className="pref">{item.label}</p>
          <p className="txt">{item.value}</p>
        </li>
      ))}
    </ul>
  );

  export default InfoList;