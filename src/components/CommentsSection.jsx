'use client';

import { useState } from 'react';
import Comment from './Comment';

export default function CommentsSection({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({
    author: '',
    content: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleAddComment = () => {
    if (!newComment.author.trim() || !newComment.content.trim()) {
      setError('Both name and comment are required.');
      return;
    }

    const commentToAdd = {
      ...newComment,
      date: new Date().toLocaleString(),
    };

    setComments((prev) => [...prev, commentToAdd]);
    setNewComment({ author: '', content: '' });
  };

  return (
    <div className="mt-3 max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-10 underline underline-offset-8 decoration-[#BFA249] decoration-4">Comments</h2>
      
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-10 mt-10 underline underline-offset-8 decoration-[#BFA249] decoration-4">Leave a comment:</h2>

      <div className="mt-8 space-y-4">
        <input
          type="text"
          name="author"
          placeholder="Your name"
          value={newComment.author}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Add a comment..."
          value={newComment.content}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleAddComment}
          className="bg-[#BFA249] text-white py-2 rounded-md hover:bg-[#978038] focus:outline-none focus:ring-2 focus:ring-[#978038] p-3"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
