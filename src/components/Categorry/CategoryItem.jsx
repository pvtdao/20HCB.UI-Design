import React from 'react';
import { Badge, Button } from 'reactstrap';

function CategoryItem(props) {
    return (
        <div className='category__item d-flex mt-5'>
            <div className="category__img" style={{
                backgroundImage: `url("https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/1/10/photo1641787755234-1641787755408205526273.jpg")`
            }}></div>

            <div className="category__info d-flex flex-column">
                <p className="category__info-title">Sơn La trao Nhà đồng đội cho quân nhân có hoàn cảnh khó khăn</p>
                <div className='d-flex  justify-content-start'>
                    <p className="category__info-location">Hồ Chí Minh</p>
                    <p className="category__info-day mr-1">27-12-2020</p>
                </div>
                <div className='d-flex mt-2 justify-content-start'>
                    <img className="category__info-img" src="https://biendongmedia.com/upload/data/28_02_2018_1436823874_1332116861_1895034108.png" alt='logo post' />
                </div>
                <div className="category__info-shortDes mt-2">Trước tình hình các ca F0 tăng nhanh trên địa bàn, UBND thành phố Hải Phòng đã có văn bản số 9884/UBND-VX tăng cường các biện pháp phòng, chống dịch Covid-19 trên địa bàn thành phố.  khối u ác tính ở não.</div>
                <div className="category__info-tag mt-2 flex-fill d-flex align-items-end">
                    <Badge className='pd-1 mr-2'>
                        Đời sống
                    </Badge>
                    <Badge className='pd-1 mr-2'>
                        Khoa học
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default CategoryItem;