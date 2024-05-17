import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }
    handleNextClick = async ()=>{
        this.setState({
            page: this.state.page + 1,
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=903d5dc51c6543d5a99675a4cb91b91e&page=${this.state.page + 1}&pageSize=9`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})

    }
    handlePreviousClick = async ()=>{
        this.setState({
            page: this.state.page - 1,
        })
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=903d5dc51c6543d5a99675a4cb91b91e&page=${this.state.page - 1}&pageSize=9`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=903d5dc51c6543d5a99675a4cb91b91e&page=${this.state.page}&pageSize=9`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title === null ? "Title Not Available" : element.title} discription={element.description === null ? "Discription Not Available" : (element.description)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} onClick={this.handlePreviousClick} className="btn btn-primary my-2 mx-2">Previous</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalResults/9)} onClick={this.handleNextClick} className="btn btn-primary my-2 mx-2">Next</button>
                </div>
            </div>
        )
    }
}

export default News
