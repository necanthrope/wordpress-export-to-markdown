// get ID of Post that comment is related to
module.exports = (comment) => {
	return comment.data.postId;
}
