import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubPost({ news }) {
    const navigate = useNavigate()
    function directDetail() {
        navigate(`/detail/${news.slug}`)
    }
    return (
        <div className='subPost d-flex' onClick={directDetail}>
            <div className="subPost__img" style={{
                backgroundImage: `url("${news.avatar.src}")`
            }}></div>
            <div className='subPost__info flex-column d-flex justify-content-start'>
                <div className='d-flex  justify-content-start'>
                    <p className="subPost__info-location">{news.location} -</p>
                    <p className="subPost__info-day mr-1">{news.releaseDate}</p>
                    <div className='flex-fill d-flex justify-content-end'>
                        <img className="subPost__info-img" src={news.logoNews} alt='logo post' />
                    </div>
                </div>

                <div className="subPost__title">{news.title}</div>
            </div>

        </div>
    );
}

export default SubPost;