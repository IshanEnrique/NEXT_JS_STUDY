import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="/images/aboutus.jpg" alt="Team member" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Our Story</div>
            <h1 className="mt-2 text-2xl font-bold text-gray-900">About Us</h1>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan, nisi vitae accumsan maximus, sapien sapien auctor nulla, nec vulputate velit nisi nec nunc. Vestibulum vel aliquam est.</p>
            <div className="mt-4">
              <a href="#" className="text-indigo-500 hover:text-indigo-600">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default About
