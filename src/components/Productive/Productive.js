import React from 'react';

const Productive = () => {
  return (
    <section
      id="#productive"
      className="bg-white dark:bg-darkBlue">
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        {/* img */}
        <div className="md:w-1/2">
          <img
            src="/asset/images/illustration-stay-productive.png"
            alt=""
            className="mb-10"
          />
        </div>

        {/* content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, where you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          {/* Link */}
          <div className="block mt-4">
            <a
              href="#hero"
              className="border-b border-accentCyan text-accentCyan flex flex-row space-x-1">
              <span> See how Fylo works</span>
              <img
                src="/asset/images/icon-arrow.svg"
                alt=""
                className="w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
