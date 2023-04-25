import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      console.log(json);
  }
  useEffect(() => {
    getMovie();
  }, [])
  return <h1>Detail</h1>
}

export default Detail;

// 영화들을 보여주지 않고 app.js render Router한다. router는 url을 보고있는 컴포넌트고, 라우터는 우리에게 홈 컴포넌트를 보여줄거다 