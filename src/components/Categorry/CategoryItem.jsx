import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button } from 'reactstrap';

function CategoryItem({ news }) {
    const navigate = useNavigate()
    function directDetail() {
        navigate(`/detail/${news.slug}`)
    }
    console.log("cc:", news)
    return (
        <div className='category__item d-flex mt-5' onClick={directDetail}>
            <div className="category__img" style={{
                backgroundImage: `url("${news.mainImage}")`
            }}></div>

            <div className="category__info d-flex flex-column">
                <p className="category__info-title">{news.title}</p>
                <div className='d-flex  justify-content-start'>
                    <p className="category__info-location">{news.location}</p>
                    <p className="category__info-day mr-1">{news.releaseDate}</p>
                </div>
                <div className='d-flex mt-2 justify-content-start'>
                    <img className="category__info-img" src={news.rootLogo} alt='logo post' />
                </div>
                <div className="category__info-shortDes mt-2">{news.shortDescription}</div>
                <div className="category__info-tag mt-2 flex-fill d-flex align-items-end">
                    {news.tag.map(tag => {
                        return <Badge className='pd-1 mr-2' key={tag.value}>
                            {tag.label}
                        </Badge>
                    })}

                </div>
            </div>
        </div>
    );
}

export default CategoryItem;