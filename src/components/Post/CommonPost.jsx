import React from 'react';
import PropTypes from 'prop-types';

CommonPost.propTypes = {

};

function CommonPost(props) {
    return (
        <div className='commonPost'>
            <div className="commonPost__img" style={{
                backgroundImage: `url("https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg")`
            }}></div>
            <div className="commonPost__title">Sân bay Quảng Trị được đầu tư theo hình thức PPP</div>
            <div className="commonPost__info d-flex flex-row">
                <p className="commonPost__info-time d-flex align-items-center"><span>1 giờ trước</span></p>
                {/* <p className="commonPost__info-location">
                    Việt Nam
                </p> */}
                <div className='flex-fill d-flex justify-content-end'>
                    <img className="commonPost__info-img" src="https://biendongmedia.com/upload/data/28_02_2018_1436823874_1332116861_1895034108.png" alt='logo post' />
                </div>
            </div>
        </div>
    );
}

export default CommonPost;