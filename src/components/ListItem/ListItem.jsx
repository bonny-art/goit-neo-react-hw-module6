import style from "./ListItem.module.css";

const ListItem = ({ children }) => {
  return <li className={style.item}>{children}</li>;
};
export default ListItem;
