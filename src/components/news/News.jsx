import React, { useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";
import axios from "axios";
import s from "./News.scss";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export function News() {
  const [newsUrl, setNewsUrl] = useState("");
  const [news, setNews] = useState([]);
  const id = useParams();
  
  
  useEffect(() => {
    const fetchCategories = async () => {
      const fc = await axios(ruvUrl);      
      fc.data.forEach((e) => {
        if (e.id === Object.values(id)[0]) {
          setNewsUrl(e.url);
        }
      });
    };
    fetchCategories();
  });

  console.log(newsUrl);

  useEffect(() => {
    const fetchNews = async () => {
      const result = await axios(newsUrl);
      setNews(result.data.items);
      
    };
    fetchNews();
  });

  console.log(news);

  return (
    <div className={s.news__item}>
      <h2>{Object.values(id)[0]}</h2>
      {news.map((article) => (
        <p key={article.link}>
          <a href={article.link}>{article.title}</a>
        </p>
      ))}

    </div>
  );
}