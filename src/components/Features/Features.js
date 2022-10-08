import React from 'react';

const Features = () => {
  return (
    <section
      id="features"
      className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 text-center md:grid-cols-2 gap-16">
          {/* item 1 */}
          <div className="flex flex-col items-center space-y-3 ">
            <div className="flex items-center justify-center h-24 mb-6">
              <img
                src="/asset/images/icon-access-anywhere.svg"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold">
              Access your file from anywhere
            </h2>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center space-y-3  ">
            <div className="flex items-center justify-center h-24 mb-6">
              <img
                src="/asset/images/icon-security.svg"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold">Security you can trust</h2>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center space-y-3  ">
            <div className="flex items-center justify-center h-24 mb-6">
              <img
                src="/asset/images/icon-collaboration.svg"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold">
              Access your file from anywhere
            </h2>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 ">
            <div className="flex items-center justify-center h-24 mb-6">
              <img
                src="/asset/images/icon-any-file.svg"
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold">Security you can trust</h2>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
