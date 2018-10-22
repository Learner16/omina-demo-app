import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from '../../axios-config';
import NewsCard from './newsCard';
import './news.scss';

class News extends Component {
  state = {
    newsfeed: [],
    filteredFeed: [],
  }

  componentDidMount() {
    this.getNewsfeed();
  }

  /* getNewfeed () - handles the API call and fetch the data */

  getNewsfeed = () => {
    axios.get('?country=us&category=business&apiKey=004d8fc28e2b43438a01fec8e33f8360').then((res) => {
      this.setState({
        newsfeed: res.data.articles,
        filteredFeed: res.data.articles,
      }, () => {
      });
    });
  }

  /* filterNewsfeed () - filtering the news cards to show on search */

  filterNewsfeed = (event) => {
    const { newsfeed } = this.state;
    const val = event.target.value.toLowerCase();
    if (val.length >= 2) {
      const filtered = newsfeed.filter(news => (news.title.toLowerCase().indexOf(val) !== -1));
      this.setState({ filteredFeed: filtered });
    } else {
      this.setState({ filteredFeed: newsfeed });
    }
  }

  render() {
    const { filteredFeed } = this.state;
    return (
      <div className="news-container">
        <div className="news-header">
          <div>Latest News</div>
          <div>
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search News"
              onKeyUp={e => this.filterNewsfeed(e)}
            />
          </div>
        </div>
        <div className="news-content">
          { filteredFeed.length
            ? filteredFeed.map((news, i) => (
              (i < 3 ? (
                <NewsCard key={news.title} data={news} />
              ) : '')
            ))
            : <p className="news-card">No results matching this search criteria</p>
          }
        </div>
      </div>
    );
  }
}

export default News;
