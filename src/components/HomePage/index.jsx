import React from 'react';
import Introduce from '../Introduce';
import NewPost from '../Post/NewPost';
import TopCategory from '../Post/TopCategory';

function HomePage({ news = {} }) {
    return (
        <div>
            <Introduce news={news} />
            <NewPost news={news} />
            <TopCategory news={news} />
        </div>
    );
}

export default HomePage;