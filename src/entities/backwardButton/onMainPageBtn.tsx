import { useNavigate } from "react-router-dom";
import styles from "./onMainPageBtn.module.scss";

const OnMainPageBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={styles.onMainPageBtn} onClick={() => navigate("/")}>
        На главную
      </button>
    </>
  );
};

export default OnMainPageBtn;
