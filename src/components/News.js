import React, { Component } from "react";
import Newsitem from "../Newsitem";
import Spin from "./Spin";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
    document.title = `${this.props.category} - NewsWorld`
  }

  async componentDidMount(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIkey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false});
    this.props.setProgress(100)
  }

  handlePrev = async()=>{
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIkey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles,
      loading : false
    })
    this.props.setProgress(100)
  }

  handleNext = async()=>{
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIkey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles,
      loading : false
    })
    this.props.setProgress(100)
  }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center" style = {{marginTop : '5.5rem', fontFamily : 'Bebas Neue'}}>NewsWorld - Top {this.props.category} News Headlines</h1>
        {this.state.loading && <Spin/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key = {element.url}>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url} author={element.author} date = {element.publishedAt} source = {element.source.name} />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between my-3">
        {!this.state.loading && <button disabled = {this.state.page<=1} type="button" className="btn" onClick = {this.handlePrev} style = {{backgroundColor : 'black', color : 'white'}}>&larr; Previous</button>}
        {!this.state.loading && <button disabled = {(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn" onClick = {this.handleNext} style = {{backgroundColor : 'black', color : 'white'}}>Next &rarr;</button>}
        </div>
      </div>
    );
  }
}

export default News;
// ${this.props.APIkey}