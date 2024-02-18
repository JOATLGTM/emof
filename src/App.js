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
        <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
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
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 6</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 7</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={cat} alt="cat" width={'100%'} style={{ cursor: 'pointer' }} />
            <div>Teehee 8</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="section center gap">
        <div className="text-center">
          <p>Lorem Khaled Ipsum is a major key to success. Surround yourself with angels. I’m up to something. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Learning is cool, but knowing is better, and I know the key to success. Bless up. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. The key is to drink coconut, fresh coconut, trust me.
          </p>
        </div>
      </div>
      <div className="footer center">
        <p>Footer</p>
      </div>
    </div >
  );
}

export default App;
