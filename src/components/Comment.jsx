// src/components/Comment.js

export default function Comment({ comment }) {
  return (
    <div className="p-4 border rounded overflow-hidden shadow-lg border-gray-200">
      {
        comment.slice(comment.length - 3, comment.length).map((comment, index) => (
          <div key={index} className="flex gap-4 py-4 border-b last:border-b-0">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {comment.user.profile_Photo ? (
                <img
                  src={comment.user.profile_Photo}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                  {comment.user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Comment Content */}
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-gray-800">{comment.user.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()} • {new Date(comment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              <p className="mt-1 text-gray-700 text-sm leading-relaxed">{comment.text}</p>
            </div>
          </div>

        ))
      }
    </div >
  );
}
