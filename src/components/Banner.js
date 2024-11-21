// import React from 'react'; 
// import './Banner.css';

// const Banner = () => {
//   return (
//     <section className="banner">
//       <h1>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
//       <p>
//         Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
//       </p>
//       <button>Shop Now</button>
//     </section>
//   );
// };

// export default Banner;                                  



import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <h1>Upgrade Your Tech Accessories with Gadget Heaven</h1>
            <p>Explore the latest gadgets to take your experience to the next level.</p>
            <button onClick={() => window.location.href = '/dashboard'}>Shop Now </button>
        </div>
    );
};

export default Banner;
