import React, { useState,useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  

  const updateNews= async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7a3efd46bd76432eaa5b5071f1e74215&page=${page}&pageSize=${props.pageSize}`;
    setloading( true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // props.setProgress(70);
    console.log(parsedData);
    setloading( false );
    setarticles( parsedData.articles );
    settotalResults( parsedData.totalResults);
    props.setProgress(100);
  }
 
  useEffect(() => {
    updateNews();
  }
  // eslint-disable-next-line
  , [])
  

  // const handleNextClick = async () => {
  //   setState({page: page+1})
  //   updateNews();
  // };
  // const handlePrevCLick = async () => {
  //   setState({page: page-1})
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7a3efd46bd76432eaa5b5071f1e74215&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles( articles.concat(parsedData.articles) );
    settotalResults( parsedData.totalResults);
  };

  
    return (
      <div>
        <div className="container ">
          <h1 className="text-center" style={{ margin: "24px 0px" , marginTop: "66px" }}>
            NewsMonkey - Top Daily Free HeadLines
          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        > 
        <div className="container">
          <div className="row">
            {                                    /*Here !loading --> agar loading nhi ho rhi toh load kardo*/ 
              articles.map((element) => {
                return (
                  <div className="col-md-4">
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                        ? element.description
                        : ""
                      }
                      imageurl={element.urlToImage}
                      newsURL={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                      />
                  </div>
                );
              })}
              </div>              
          </div>        
        </InfiniteScroll>
        </div>
     </div>
    );
  
}
 News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "science",
};
News.propTypes = {
  country: PropTypes.string,
  // pageSize: PropTypes,
  category: PropTypes.string,
};

export default News;
