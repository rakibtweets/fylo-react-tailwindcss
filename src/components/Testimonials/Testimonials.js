import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const testimonials = [
  {
    name: 'Satis Patel',
    position: 'Founder & CEO. Huddle',
    image: '/asset/images/profile-1.jpg',
    quote:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  },
  {
    name: 'Bruce McKenzie',
    position: 'Founder & CEO. Huddle 2',
    image: '/asset/images/profile-2.jpg',
    quote:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  },
  {
    name: 'Eva Boyd',
    position: 'Founder & CEO. Huddle 3',
    image: '/asset/images/profile-3.jpg',
    quote:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  }
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-6 pb-80 md:pb-96 md:mt-24">
        {/* Boxes container */}
        <div className="relative flex flex-col w-full space-y-6 md:space-y-0 md:flex-row md:space-x-12">
          {/* Quotes image */}
          <img
            src="/asset/images/bg-quotes.png"
            alt=""
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
          {/* Box 1 */}
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
