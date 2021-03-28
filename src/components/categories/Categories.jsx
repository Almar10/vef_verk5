import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsList } from "../news-list/NewsList.jsx";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let result = await axios(ruvUrl);
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  return categories.map((category) => (
    <NewsList
      key={category.id}
      title={category.title}
      newsLink={category.url}
    />
  ));
}