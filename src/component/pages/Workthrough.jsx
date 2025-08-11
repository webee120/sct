import Workthrough_01 from '../../assets/workthrough/workthrough_01.png';
import Workthrough_02 from '../../assets/workthrough/workthrough_02.png';
import Workthrough_03 from '../../assets/workthrough/workthrough_03.png';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Workthrough =()=> {
   
  return(
    <>
      <div className="wrap">
        <button type="button">건너뛰기</button>

        <Swiper navigation={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={Workthrough_01} alt="워크스루01" />
            <h2>하루하루, 더 안전하게 돌봐요</h2>
            <p>라이프마인드와 함께<br></br>소중한 사람의 건강을 지켜보세요</p>
          </SwiperSlide>
          <SwiperSlide>
            <h2>출입부터 낙상까지,<br></br>센서가 실시간으로 감지해요</h2>
            <p>센서 이벤트가 발생하면 알림으로 바로 알려드려요<br></br> 출입, 심박 변화, 낙상 등 주요 상황을 놓치지 마세요</p>
             <img src={Workthrough_02} alt="워크스루02" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Workthrough_03} alt="워크스루03" />
            <h2>대상자의 하루를 한눈에 확인하세요</h2>
            <p>건강 리포트, 수면 분석, 생활 루틴까지<br></br> 지속적으로 돌봄의 질을 높일 수 있어요</p>
          </SwiperSlide>
        </Swiper>

        <button type="button">다음</button>
      </div>
    </>
  )
}

export default Workthrough