import React from 'react';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-darkBlue2">
      <div className="container mx-auto px-5 pb-10">
        {/* Flex container for all Items */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* email and phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img
                  src="/asset/images/icon-phone.svg"
                  alt=""
                  className="scale-10"
                />
              </div>
              <div>+88017xxxxxxxx</div>
            </div>
            <div className="flex items-center space-x-3 md:mt-10">
              <div className="w-6">
                <img
                  src="/asset/images/icon-email.svg"
                  alt=""
                  className="scale-10"
                />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>
          {/* Menu */}
          <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <a href="/#">About</a>
              <a href="/#">Jobs</a>
              <a href="/#">Press</a>
              <a href="/#">About</a>
              <a href="/#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="/#">Contact Us</a>
              <a href="/#">Terms</a>
              <a href="/#">Privacy</a>
            </div>
          </div>
          {/* Social */}
          <div className="flex justify-center pb-10 space-x-3">
            <div>
              <a href="/#">
                <img
                  src="/asset/images/facebook.svg"
                  alt=""
                  className="p-2 bg-darkBlue rounded-full"
                />
              </a>
            </div>
            <div>
              <a href="/#">
                <img
                  src="/asset/images/twitter.svg"
                  alt=""
                  className="p-2 bg-darkBlue rounded-full"
                />
              </a>
            </div>
            <div>
              <a href="/#">
                <img
                  src="/asset/images/instagram.svg"
                  alt=""
                  className="p-2 bg-darkBlue rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
