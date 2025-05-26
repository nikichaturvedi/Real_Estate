'use client';

import { useContext, useEffect, useState } from 'react';
import Comment from './Comment';
import { useParams, useRouter } from 'next/navigation';
import axiosInstance from './config/axiosInstace';
import { AuthContext } from '@/context/AuthContext';
import { useSelector } from 'react-redux';

export default function CommentsSection(comment = []) {
  const { view_Blog, showAlert } = useContext(AuthContext);
  const user = useSelector(state => state.user.data)
  const params = useParams();
  const router = useRouter()
  const [newComment, setNewComment] = useState('')


  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleAddComment = async () => {
    if (!user) {
      router.push(`/LogIn?redirect=/BlogPosts/${params.id}`);
      return;
    }
    const data = {
      id: params.id,
      userId: user._id,
      text: newComment
    }
    const response = await axiosInstance.post('/blog/comment', data);
    showAlert(response.data.status, response.data.msg);
    if (response.data.status == 1) {
      view_Blog(params.id);
      setNewComment('')
    }
  }



  return (
    <div className="mt-3 max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-10 underline underline-offset-8 decoration-[#BFA249] decoration-4">Comments</h2>

      <div className="space-y-4">
        {comment.data?.length > 0 ? (
          <Comment comment={comment.data} />
        ) : (
          <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-10 mt-10 underline underline-offset-8 decoration-[#BFA249] decoration-4">Leave a comment:</h2>

      <div className="mt-8 space-y-4">
        {/* <input
          type="text"
          name="author"
          placeholder="Your name"
          // value={newComment.author}
          // onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
        <textarea
          name="content"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
        <button
          onClick={handleAddComment}
          className="bg-[#BFA249] text-white py-2 cursor-pointer rounded-md hover:bg-[#978038] focus:outline-none focus:ring-2 focus:ring-[#978038] p-3"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
