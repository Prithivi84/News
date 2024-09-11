import React, { Component } from "react";
import NewsItem from "./newsItem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'

export default class news extends Component {
  // static defaultProps = {
  //   country:'in'
  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   category:PropTypes.string
  // }
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `News-${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }

  // async Update(){
  //   console.log(this.state.page);
  //   // console.log(this.page);
  //   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7812aae748a4608bca353add6527610&page=${this.state.page}&pageSize=20`;
  //   this.setState({loading: true});
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   console.log(parsedData);
  //   // let tot=await fetch();
  //   // console.log(Math.ceil(this.state.totalResults));
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false
  //     });
  //   // this.setState({page: 1})
  //   // this.Update();
  // }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7812aae748a4608bca353add6527610&page=1&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // let tot=await fetch();
    // console.log(Math.ceil(this.state.totalResults));
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // this.setState({page: 1})
    // this.Update();
  }

  handleNext = async () => {
    // console.log(this.state.pageSize)
    console.log("next");
    // let c=0;
    if (this.state.page + 1 > Math.ceil(this.state.totalResults) / 20 + 1) {
      console.log(this.state.page + 1);
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=e7812aae748a4608bca353add6527610&page=${
        this.state.page + 1
      }&pageSize=20`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      // if(Math.ceil(parsedData.totalResults/20)){}
      // else{

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
    // console.log(this.state.page);
    // this.setState({page: this.state.page + 1});
    // console.log(this.state.page);
    // this.Update();
  };
  // {c=1}

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e7812aae748a4608bca353add6527610&page=${
      this.state.page - 1
    }&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    // this.setState({page: this.state.page-1});
    // this.Update();
  };

  render() {
    return (
      <div className="container my-3">
        <h2>WhatEverNews - Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  ></NewsItem>
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page > Math.ceil(this.state.totalResults) / 20}
            type="button"
            classclassName="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
