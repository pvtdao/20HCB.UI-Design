import React from 'react';
import { useNavigate } from 'react-router-dom';

function CommonPost({ news = {} }) {
    const navigate = useNavigate()
    function directDetail() {
        navigate(`/detail/${news.slug}`)
    }

    return (
        <div className='commonPost' onClick={directDetail}>
            <div className="commonPost__img" style={{
                backgroundImage: `url("${news.mainImage}")`
            }}></div>
            <div className="commonPost__title">{news.title}</div>
            <div className="commonPost__info d-flex flex-row">
                <p className="commonPost__info-time d-flex align-items-center"><span>1 giờ trước</span></p>
                <div className='flex-fill d-flex justify-content-end'>
                    <img className="commonPost__info-img" src={news.rootLogo} alt='logo post' />
                </div>
            </div>
        </div>
    );
}

export default CommonPost;