import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [newsdata2, setNewsData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const secret = "27206ceabe944f799b014e9f9b05eabc";
        const url = 'https://newsapi.org/v2/everything?';
        const parameters = {
          q: "merkel",
          pageSize: 100,
          apiKey: secret
        };

        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${secret}`);
        const response2 = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=27206ceabe944f799b014e9f9b05eabc`);
        setNewsData(response.data.articles);
        setNewsData2(response2.data.articles)
        console.log(response)
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);
  console.log(newsData);

  return (
    <>
      <div className="wrapper mt-8">
        <div className="container-fluid">
          <div className="marquee">
            {
              newsData?.map((item) => {
                return (
                  <div className="img1 pulse">
                   
                    <div className='displayflex'> <img src={item.urlToImage} className='image-style' width='50' height='50'/><h2>{item?.source?.name}</h2></div>
                    <div>
                      <h3>{item?.title} </h3>
                    </div>
                    <div>
                      <a href={item?.url} target='_blank'>Read more</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="marquee1">
            {
              newsdata2?.map((item) => {
                return (
                  <div className="img1 pulse">
                   
                    <div className='displayflex'> <img src={item.urlToImage} className='image-style' width='50' height='50'/><h2>{item?.source?.name}</h2></div>
                    <div>
                      <h3>{item?.title} </h3>
                    </div>
                    <div>
                      <a href={item?.url} target='_blank'>Read more</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
