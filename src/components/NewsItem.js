import React from 'react'
import {Link} from "react-router-dom";

const NewsItem =(props)=> {
  let {title, description,imageUrl,newsUrl,author,publishedDate} = props;
  return (
    <div>
      <div className="card my-3">
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK0hPmku9P6bVNcB9cCL9wHaJWfYfTQHCbQ&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedDate).toDateString()}</small></p>
              <Link to={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</Link>
          </div>
      </div>
    </div>
  )
}

export default NewsItem
