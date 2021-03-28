import s from "./NewsList.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();


export function NewsList({ title, newsLink }) {
  const [news, setNews] = useState([]);
  const [newsData, setNewsData] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    const fetchNews = async () => {
      const result = await axios(newsLink);
      setNews(result.data.items);
      setNewsData(result.data);
    };
    fetchNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let linkTitle = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    <div className={s.news_list__item}>
      <h2>{title}</h2>
      {news.slice(0, 5).map((article) => (
        <p key={article.link}>
          <a href={article.link}>{article.title}</a>
        </p>
      ))}

      <p>
        <Link to={linkTitle}> Allar frettir </Link>
      </p>
    </div>
  );
}