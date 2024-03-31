// get comment author, without decoding
// WordPress doesn't allow funky characters in usernames anyway
module.exports = (comment) => {
	return comment.data.comment_author[0];
}
