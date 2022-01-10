import React from 'react';

function MainPost(props) {
    return (
        <div className='mainPost'>
            <div className="mainPost__img" style={{
                backgroundImage: `url("https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg")`
            }}></div>
            <div className='mainPost__info d-flex align-items-center'>
                <p className="mainPost__info-location mr-1">Hồ Chí Minh -</p>
                <p className="mainPost__info-day mr-1">27-12-2020</p>
                <div className='flex-fill d-flex justify-content-end'>
                    <img className="mainPost__info-img" src="https://biendongmedia.com/upload/data/28_02_2018_1436823874_1332116861_1895034108.png" alt='logo post' />
                </div>
            </div>
            <div className="mainPost__title">Sân bay Quảng Trị được đầu tư theo hình thức PPP</div>
            <div className='mainPost__shortDes'>
                Cách trung tâm thành phố 30km, hơn 20 năm qua hàng chục nghìn dân ở dự án Khu đô thị Tây Bắc sống khổ khi nhà đất không thể sửa chữa, tách thừa, chuyển nhượng
            </div>
        </div>
    );
}

export default MainPost;