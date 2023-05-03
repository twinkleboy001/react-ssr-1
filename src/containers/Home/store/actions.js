import axios from "axios";

export const getHomeList = () => {
  return () => {
    axios
      .get("http://www.dell-lee.com/ssr/api/news.json?secret=PP87ANTIPIRATE")
      .then((res) => {
        console.log(res);
      });
  };
};
