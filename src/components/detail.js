import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import styles from "./detail.module.css";
import Footer from "./footer";

function Detail({ movie }) {
  const [data, setData] = useState(null);
  const { id } = useParams();

  function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }
  
  useEffect(() => {
    const key = getKeyByValue(movie, id);
    setData(movie[key]);
    console.log(`id : ${id}`)
  }, []);


  // if (!data) {
  //   return <div>Loading...</div>; // 데이터가 로딩되기 전에 로딩 상태를 표시합니다.
  // }

  return (
    <div>
      <Header />
      <div class={styles.section}>
      {!data?<div>Loading...</div>:<h1>{id}</h1>}
      </div>
      <Footer/>
    </div>
  );
}
export default Detail;
