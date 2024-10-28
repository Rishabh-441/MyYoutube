import DOMPurify from 'dompurify';
import { useState } from 'react';

const Comment = ({ commentData }) => {
  const [toggleShowReply, setToggleShowReply] = useState(false);
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textDisplay,
    publishedAt,
    likeCount,
  } = commentData?.snippet?.topLevelComment?.snippet || commentData?.snippet;

  const replies = commentData?.replies?.comments || [];
  const sanitizedHTML = DOMPurify.sanitize(textDisplay);

  return (
    <div className="flex items-start mb-6 pb-6 border-b border-gray-200">
      <img 
        src={authorProfileImageUrl} 
        alt={`${authorDisplayName}'s profile`} 
        className="w-12 h-12 rounded-full mr-4 shadow-sm" 
      />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-blue-900">{authorDisplayName}</span>
          <span className="text-xs text-gray-400">
            {new Date(publishedAt).toLocaleString()}
          </span>
        </div>
        <div>
          <p className="text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></p>
          <div className="text-sm text-gray-500">
            👍 {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
          </div>
          
          {toggleShowReply && replies.length > 0 && (
            <div className="mt-4 ml-6 bg-gray-50 p-3 rounded-lg shadow-inner border border-gray-200">
              <h2 className="font-semibold text-gray-600 mb-3">Replies:</h2>
              {replies.map((reply) => (
                <Comment key={reply.id} commentData={reply} />
              ))}
            </div>
          )}

          {replies.length > 0 && (
            <button
              className="text-sm text-blue-600 font-semibold mt-3 focus:outline-none transition-colors transform hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded-lg"
              onClick={() => setToggleShowReply(!toggleShowReply)}
            >
              {toggleShowReply ? "Hide Replies" : "Show Replies"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
