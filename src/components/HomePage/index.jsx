import React from 'react';
import Introduce from '../Introduce';
import NewPost from '../Post/NewPost';
import TopCategory from '../Post/TopCategory';

function HomePage(props) {
    return (
        <div>
            <Introduce />
            <NewPost />
            <TopCategory />
        </div>
    );
}

export default HomePage;