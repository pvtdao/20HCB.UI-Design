import React from 'react';

function SubPost(props) {
    return (
        <div className='subPost d-flex'>
            <div className="subPost__img" style={{
                backgroundImage: `url("https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg")`
            }}></div>
            <div className='subPost__info flex-column d-flex justify-content-start'>
                <div className='d-flex  justify-content-start'>
                    <p className="subPost__info-location">Hồ Chí Minh -</p>
                    <p className="subPost__info-day mr-1">27-12-2020</p>
                    <div className='flex-fill d-flex justify-content-end'>
                        <img className="subPost__info-img" src="https://biendongmedia.com/upload/data/28_02_2018_1436823874_1332116861_1895034108.png" alt='logo post' />
                    </div>
                </div>

                <div className="subPost__title">Sân bay Quảng Trị được đầu tư theo hình thức PPP</div>
            </div>

        </div>
    );
}

export default SubPost;