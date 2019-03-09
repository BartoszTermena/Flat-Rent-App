import React from 'react'

const Flat = ({flat}) => {
  return (
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={flat.imageUrl}/>
          <span className="card-title"></span>
        </div>
        <div className="card-content">
          <p>{flat.name}</p>
        </div>
        <div className="card-action">
          <a>Show Deteails</a>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Flat;