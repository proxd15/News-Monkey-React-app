import React from 'react'

const Newsitem =(props)=> {
  
   let {title , description , imageurl , newsURL , source , author , publishedAt} =props;
    return (
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl ? "https://static.toiimg.com/thumb/msid-92590396,width-1070,height-580,imgsize-6134,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "234px" , zindex: "-1",margin: "10px 0px"}}>
        {source}
         </span>
    <p className="card-text">{description}</p>
    <p className="card-text "><small className="text-muted">By {!author?"unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
    <a href={newsURL} className="btn btn-primary">Read More</a>
  </div>
</div>    
    )
  
}
export default Newsitem; 