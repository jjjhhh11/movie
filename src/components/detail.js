import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import styles from "./detail.module.css";
import Footer from "./footer";

function Detail({ movie }) {
  const [data, setData] = useState(null);
  const { id } = useParams();

  function getKeyByValue(obj, value) {
    for (let i in obj) {
      if (obj[i].id == value) {
        return obj[i];
      }
    }
  }

  useEffect(() => {
    const key = getKeyByValue(movie, id);
    setData(key);

  }, [movie]);


  return (
    <div>
      <Header />
      <div className={styles.contents_container}>
        <div className={styles.section}>
          {!data ? <div>Loading...</div> :
            <div className={styles.movie_container}>
              <div className={styles.img_container}>
                <img src={data.medium_cover_image} alt="medium_cover_image" />
              </div>
              <div className={styles.detail_container}>
                <p className={styles.movie_year}>{data.year}</p>
                <h1>{data.title}</h1>
                <div className={styles.option_container}>
                  <span>평점 : {data.rating}점</span>
                  <span>상영시간 : {data.runtime}분</span>
                </div>
                <div className={styles.detail_summary}>
                  <p>줄거리 : </p>
                  <p>{data.summary}</p>
                </div>
                <div className={styles.genres_container}>
                  {data.genres.map((g, index) => <span key={index}>#{g}</span>)}
                </div>
                <div className={styles.btn_container}>
                  <button className={styles.btn_ticket}>
                    예매하기
                  </button>
                </div>
              </div>
            </div>

          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Detail;
