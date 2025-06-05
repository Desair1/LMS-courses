import OnMainPageBtn from "../../entities/backwardButton/onMainPageBtn";
import styles from "./notFoundPage.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      Упс... Кажется такой страницы не сщуествует...
      <div className={styles.wrapperButton}>
        <OnMainPageBtn />
      </div>
    </div>
  );
};

export default PageNotFound;
