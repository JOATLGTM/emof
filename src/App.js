import './App.css';
import './Custom.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import cat from './images/cat.jpg'
import 'swiper/css';
import 'swiper/css/bundle';
import "swiper/css/autoplay";
import ContinuousBanner from './components/ContinuousBanner'

function App() {
  return (
    <div className="App">
      <ContinuousBanner />
      <div className="testing">
        <img src={cat} alt="cat" width={'100%'} />
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerGroup={4}
        slidesPerView={4}
        autoHeight={true}
        speed={300}
        navigation={{
          enabled: true
        }}
      >
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 6</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 7</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} />
            <div>Teehee 8</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div >
  );
}

export default App;
