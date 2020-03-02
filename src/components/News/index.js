import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './item';
import './_styles.css';

/**
 * @name NewsList
 * @description Print list of the news based on received list
 * @param {array} list
 */

const NewsList = ({ list = [] }) => (
    <div className="news_list">
        <h1>News</h1>

        {list.length > 0 ?
            list.map(((post, index) =>
                <NewsItem post={post} key={index} />
            )) : null}
    </div>
);

NewsList.propTypes = {
    list: PropTypes.array.isRequired
}

export default NewsList;