import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let imgStyle = {
      height : '720',
      width : '1280'
    }
    return (
      <div>
        <div className="card my-2">
            <img src={imageUrl?imageUrl:"https://i.ytimg.com/vi/qNeYEiLobKQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVShLMA8=&rs=AOn4CLDek0UWExEDo17F9UxAtn1YvUJqJw"} style = {imgStyle} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" style = {{marginBottom : '0.1rem', fontFamily : 'Noticia Text'}}>{title}</h5>
                <span className="badge badge-pill mb-4 mt-2" style = {{backgroundColor : '#be1e1e', color : 'white'}}>Source : {source}</span>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} Published on {new Date(date).toUTCString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm" style = {{backgroundColor : 'black', color : 'white'}}>Read More</a>
            </div>
        </div>

      </div>
    )
  }
}

export default Newsitem
