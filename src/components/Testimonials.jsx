import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/testimonials-data.json')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, [])
  return (
    <div className='bg-green-500/10'>
      <div className='pt-20 text-center'>
        <h3 className='text-3xl font-bold text-black'>Testimonials From Our Customers</h3>
        <p className='text-gray-600 py-4'>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            users.map((user, index) => <SwiperSlide key={index}>
              <div className='p-5 h-[324px] my-10 bg-white shadow rounded-xl'>
                <h2 className='text-xl font-bold py-3 text-blue-600'>{user.title}</h2>
                <p className='text-sm text-gray-600 py-2 pb-5'>{user.feedback}</p>
                <div className='flex justify-start pt-6 items-center gap-3'>
                  <img className='w-12 h-12 object-cover rounded-full' src={user.image} alt="" />
                  <div>
                    <h2>{user.name}</h2>
                    <p>{user.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>)
          }

        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;