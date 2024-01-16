import ReviewSlide from "@/components/ReviewSlide";
import getReviews from "@/utils/getReviews";

const PatientsReviewAll = async () => {
  const reviews = await getReviews();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reviews.map((reviewOne) => (
        <ReviewSlide reviewOne={reviewOne} key={reviewOne._id} />
      ))}
    </div>
  );
};

export default PatientsReviewAll;

// "use client"

// import { Swiper } from "swiper/react";
// import { Keyboard, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import getReviews from "@/utils/getReviews";
// import ReviewSlide from "@/components/ReviewSlide";

// const PatientsReviewAll =  () => {
//   const reviews =  getReviews();
//   return (
//     <>
//       <Swiper
//         slidesPerView={2}
//         spaceBetween={30}
//         keyboard={{
//           enabled: true,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Keyboard, Pagination, Navigation]}
//         className="mySwiper"
//       >
// 		{
// 			reviews.map((reviewOne) => (
// 				<ReviewSlide reviewOne={reviewOne} key={reviewOne._id} />
// 			))
// 		}
//       </Swiper>
//     </>
//   );
// };

// export default PatientsReviewAll;
