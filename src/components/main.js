
import styles from "./main.module.css"
import Movie from "./movie";
import Footer from "./footer";
import { Reset } from 'styled-reset';
import imgBanner from "../assets/img_banner.jpg";
import icDiscover from "../assets/ic_discover.svg";

import Header from "./header";
import { useState } from "react";
function Main({ MoviesList }) {
  const [movieName, SetMovieName] = useState("");
  function inputName(e) {
    SetMovieName(e.target.value);
    console.log(movieName);
  }
  const searchName = MoviesList.filter((movies) => {
    return movies.title.toUpperCase().includes(movieName.toUpperCase());
  }
  );
  return (
    <div>
      <Header />
      <div className={styles.banner_container}>
        <img src={imgBanner} alt="이미지" />
        <div className={styles.banner_contents_container} >
          <h1 className={styles.banner_title}>이달의 영화</h1>
          <p className={styles.banner_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className={styles.btn_banner}>바로 예매하기</button>
        </div>
      </div>
      <div className={styles.page_container} >
        <div className={styles.movies_info}>
          <p className={styles.movie_total}>총 {searchName.length}개의 영화가 있습니다.</p>
          <div className={styles.discover_container}>
            <img src={icDiscover} alt="" />
            <input placeholder="영화를 검색해보세요" type="text" value={movieName} onChange={inputName} className={styles.movie_discover}></input>
          </div>
        </div>

        <div className={styles.movies_container}>
          <div className={styles.movies_contents_container}>
            {searchName.map((movie) => (
              <Movie id={movie.id} summary={movie.summary} img={movie.medium_cover_image} year={movie.year} title={movie.title} rating={movie.rating} runtime={movie.runtime} />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Main;
