import Comment from "../models/comment-model.js";

class CommentService {
  static async addComment({ videoId, username, commentMessage }) {
    const comment = new Comment({
      video_id: videoId,
      username: username,
      comment_message: commentMessage
    });

    const commentSave = await comment.save();

    return commentSave;
  }

  static async getAllComments(videoId) {
    const comments = await Comment.find({ video_id: videoId }).exec();

    return comments;
  }
}

export default CommentService;