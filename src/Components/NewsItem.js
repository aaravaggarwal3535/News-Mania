import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,discription,imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={imageUrl===null?"https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1":imageUrl} className="card-img-top" alt="Sorry Image Not Available"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a href={newsUrl} target='_blank' className="btn btm-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
