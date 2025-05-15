// src/components/Comment.js

export default function Comment({ comment }) {
    return (
      <div className="p-4 border rounded overflow-hidden shadow-lg border-gray-200">
        <p className="font-semibold text-lg">{comment.author}</p>
        <p className="mt-2 text-gray-800">{comment.content}</p>
        <p className="mt-2 text-sm text-gray-500">{comment.date}</p>
      </div>
    );
  }
  