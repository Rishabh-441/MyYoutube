const YOUTUBE_API_KEY = "AIzaSyAhiBEGFYF1_GP_xVD1kC9ymQuGFA5mEMs";
export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_SUGGESTION_URL = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
export const YOUTUBE_COMMENT_API_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + YOUTUBE_API_KEY + "&videoId=";
export const YOUTUBE_SEARCH_RESULTS_API = "https://www.googleapis.com/youtube/v3/search?key="+ YOUTUBE_API_KEY + "&part=snippet&maxResults=25&type=video&q=";
export const YOUTUBE_VIDEO_CATEGORY_LIST_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key="+YOUTUBE_API_KEY;
export const YOUTUBE_VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+YOUTUBE_API_KEY+"&id=";

