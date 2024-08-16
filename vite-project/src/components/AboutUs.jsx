import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            {/* Ensure the image path is correct and the image is optimized for the web */}
            <img src="src/image/3545757.jpg" alt="About Us Image" className="max-w-md h-auto" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt.
            </p>
            <h4 className="text-2xl font-semibold mb-4">Our Success</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
              blanditiis praesentia voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;