
import styles from "./movie.module.css";
import { Link } from "react-router-dom";
function Movie({ id, summary, img, year, title, rating, runtime }) {
  return (
    <div className={styles.movie_list_container}>
      <div className={styles.movie_container}>
      <div className={styles.img_container}>
        {summary===""? <p className={styles.movie_summary}> 줄거리 없음</p>:<p className={styles.movie_summary}>줄거리 : <br/>{summary}</p>}
        
        <img className={styles.img_movie} src={img} />
      </div>
      <div className={styles.contents_container}>
        <div className={styles.movie_title_container}>
          <span className={styles.movie_year}>{year}년 개봉</span>
          <p className={styles.movie_title}>{title}</p>
        </div>
        <div className={styles.movie_option}>
          <span className={styles.movie_rating}>평점  {rating}점</span>
          <span className={styles.movie_runtime}>{Math.round(runtime / 60)}시간 {runtime % 60}분</span>

        </div>
      <Link to={`/movie/${id}`}>
        <button className={styles.btn_detail}>상세정보</button>
      </Link>

      </div>
      </div>
    </div>

  )
}

export default Movie;