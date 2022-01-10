import React from 'react';

function SubPost2(props) {
    return (
        <div className='subPost2 d-flex'>
            <div className="subPost2__img" style={{
                backgroundImage: `url("https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg")`
            }}></div>
            <div className='subPost2__info flex-column d-flex justify-content-start mb-1'>
                <div className='d-flex  justify-content-start'>
                    <p className="subPost2__info-location">Hồ Chí Minh</p>
                    <p className="subPost2__info-day mr-1">27-12-2020</p>

                </div>
                <div className="subPost2__title">Sân bay Quảng Trị được đầu tư theo hình thức PPP</div>
                <div className='flex-fill d-flex justify-content-start'>
                    <img className="subPost2__info-img" src="https://biendongmedia.com/upload/data/28_02_2018_1436823874_1332116861_1895034108.png" alt='logo post' />
                </div>
            </div>


        </div>
    );
}

export default SubPost2;