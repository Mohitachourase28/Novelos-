// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import list from "../../public/list.json";

// function ItemPage({ customImage }) {
//   const { id } = useParams();
//   const item = list.find((item) => item.id === parseInt(id));

//   if (!item) {
//     return <div>Item not found</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className=" min-h-screen">
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
//           {/* {list.map((item) => (
//             <Cards key={item.id} item={item} customImage={customImage} />
//           ))} */}
//           <div className="card w-72 bg-base-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//         <figure>
//           <img
//             src={customImage || item.image}
//             alt={item.name}
//             className="w-full h-64 object-cover"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title flex justify-between items-center">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300">{item.title}</p>
//           <div className="card-actions justify-between mt-2">
//             <div className="badge badge-outline">${item.price}</div>
//             <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
//               Buy Now
//             </div>
//           </div>
//         </div>
//       </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ItemPage;
