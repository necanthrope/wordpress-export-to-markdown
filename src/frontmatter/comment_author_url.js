// get comment author URL, without decoding
// WordPress doesn't allow funky characters in usernames anyway
module.exports = (comment) => {
	return comment.data.comment_author_url[0];
}
