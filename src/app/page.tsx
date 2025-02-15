import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-4">Master New Skills Today</h1>
          <p className="text-xl mb-8">
            Unlock your potential with our expert-led courses
          </p>
          <Link
            href="/courses"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Courses
          </Link>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Web Development Bootcamp
              </h3>
              <p className="text-gray-600 mb-4">
                Learn full-stack web development from scratch
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">$99.99</span>
                <Link
                  href="https://x.com/lomashonly"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://media.istockphoto.com/id/1364317541/photo/data-scientists-hand-of-programmer-touching-and-analyzing-development-at-various-information.jpg?s=1024x1024&w=is&k=20&c=0LJ_XGEmgYHishExWKpzEfCGq1Fk6_6tZSxYRe_PQn4="
                alt="Data Science"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Data Science Fundamentals
              </h3>
              <p className="text-gray-600 mb-4">
                Master data analysis and machine learning
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">$89.99</span>
                <Link
                  href="https://x.com/lomashonly"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
