import style from "./List.module.css";

const List = ({ children }) => {
  return <ul className={style.list}>{children}</ul>;
};

export default List;
