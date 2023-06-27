/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './newsCovid.css'

function Newscovid() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ouojEXD0rC4Z63zoTPDY41GWWqU6cscY';

        
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setArticles(data.results);
        });
    }, []);

    const displayedArticles = articles.slice(6,9);
          
    return (

    <div className='articlesContainer'>
    {displayedArticles.map(article => (

      <div className='itemsContainer' key={article.title}>
        <a className='text' href={article.url}>
        <img className='img' src={article.multimedia[2].url} alt="Article Image" />
        {article.title}
        </a>
      </div>


    ))}
  </div>
      );
    }
   

export default Newscovid;
