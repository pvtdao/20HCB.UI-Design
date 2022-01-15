import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPost({ news }) {
    const navigate = useNavigate()
    function directDetail() {
        navigate(`/detail/${news.slug}`)
    }
    return (
        <div className='mainPost' onClick={directDetail}>
            <div className="mainPost__img" style={{
                backgroundImage: `url("${news.mainImage}")`
            }}></div>
            <div className='mainPost__info d-flex align-items-center'>
                <p className="mainPost__info-location mr-1">{news.location}-</p>
                <p className="mainPost__info-day mr-1">{news.releaseDate}</p>
                <div className='flex-fill d-flex justify-content-end'>
                    <img className="mainPost__info-img" src={news.rootLogo} alt='logo post' />
                </div>
            </div>
            <div className="mainPost__title">{news.title}</div>
            <div className='mainPost__shortDes'>
                {news.shortDescription}
            </div>
        </div>
    );
}

export default MainPost;