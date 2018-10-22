import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import fallbackImage from '../../../assets/fallbackImage.png';

const NewsCard = (props) => {
  const { data } = props;
  return (
    <div className="news-card">
      {data.urlToImage
        ? <img src={data.urlToImage} alt="news card" />
        : <img src={fallbackImage} alt="news card" />
      }
      <div>
        <div className="date">{ moment(data.publishedAt).format('Do MMMM YYYY') }</div>
        <div className="title">{ data.title }</div>
        <div className="source">{ data.source.name }</div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  data: propTypes.objectOf.isRequired,
};
