
import { posts } from "../data/posts";
import Link from "next/link";
export default function BlogCards() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 underline underline-offset-8 decoration-[#BFA249] decoration-2">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {posts.map((post) => (
          <div key={post.id} className="rounded overflow-hidden shadow-lg bg-white w-full">
            <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <p className="text-gray-700 text-base">{post.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link href={`/BlogPosts/${post.id}`} className="inline-block text-indigo-600 hover:text-indigo-800 text-sm">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

