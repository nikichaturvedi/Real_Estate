import { posts } from "../../../data/posts";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Statistics from '@/components/Statistics';
import CommentsSection from '@/components/CommentsSection';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPost({ params }) {
  const { id } = params;
  const postId = parseInt(id, 10);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  const initialComments = [
    {
      author: 'Seven Unique',
      content: 'Great post!',
      date: '4/24/2025 12:00 PM',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex max-w-7xl mx-auto px-6 mt-20 py-12 gap-8">
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h1>

          <img
            src={post.image}
            alt={`Image for ${post.title}`}
            className="w-full h-64 object-cover rounded mb-6"
          />

          <p className="font-bold text-gray-600 mb-8">{post.description}</p>

          <article className="prose prose-lg text-gray-700 max-w-none whitespace-pre-line">
            {post.content}
          </article>

          <CommentsSection initialComments={initialComments} />
        </div>

        <aside className="hidden md:block w-full md:w-2/5 space-y-8">
          <div className="relative rounded-2xl overflow-hidden border border-[#bdd6fc] shadow-md shadow-[#85a4d1] bg-white px-5 py-7 space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#bdd6fc] shadow-md shadow-[#85a4d1] bg-white px-5 py-7 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Blog Categories</h2>
            <ul className="text-gray-500 font-medium space-y-3">
              <li className="hover:text-gray-700">Technology</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">Design</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">Lifestyle</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">Business</li>
              <hr className="border-t-1 border-[#BFA249]" />
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#bdd6fc] shadow-md shadow-[#85a4d1] bg-white px-5 py-7 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Posts</h2>
            <ul className="text-gray-500 font-medium space-y-3">
              <li className="hover:text-gray-700">The Best Real Estate Investments for 2025</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">How to Stage Your Home for a Quick Sale</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">Top 10 Cities for First-Time Homebuyers</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">The Impact of Interest Rates on Your Mortgage</li>
              <hr className="border-t-1 border-[#BFA249]" />
              <li className="hover:text-gray-700">Why You Should Invest in Vacation Rentals</li>
              <hr className="border-t-1 border-[#BFA249]" />
            </ul>
          </div>
        </aside>
      </div>

      <Statistics />
      <Footer />
    </>
  );
}

