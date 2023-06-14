import { useEffect, useState } from 'react'
import axios from 'axios'


function Newsfeed() {
  const [articles, setArticles] = useState(null)

  useEffect( () => {

const options = {
  method: 'GET',
  url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
  headers: {
    'X-RapidAPI-Key': 'c7ff28fcb7msh976522891f3c1e0p14b690jsn3dcbe1dec320',
    'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
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

  const first7articles = articles?.slice(0,7)

  return (
      <div className="news-feed">
        <h2>News feed</h2>
        {first7articles.map((article) => (
        <div>
          <a href='article.url'><p>{article.title}</p></a>
          </div>))}
      </div>
    );
  }
  
  export default Newsfeed;
  