import { useEffect, useState } from 'react'
import axios from 'axios'


function Newsfeed() {
  const [articles, setArticles] = useState(null)

  useEffect( () => {

    const options = {
      method: 'GET',
      url: 'https://crypto-update-live.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': 'c7ff28fcb7msh976522891f3c1e0p14b690jsn3dcbe1dec320',
        'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data)
      setArticles(response.data)
    }).catch((error)=> {
      console.error(error)
    })

  }, [])
  
  console.log(articles)

  const first5articles = articles?.slice(0,5)

  return (
      <div className="news-feed">
        <h2>News feed</h2>
        {first5articles?.map((article) => (
        <div>
          <a href='article.URL'><p>{article.Title}</p></a>
          </div>))}
      </div>
    );
}
  
  export default Newsfeed;
  