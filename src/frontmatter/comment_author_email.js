// get comment author email, without decoding
// WordPress doesn't allow funky characters in usernames anyway
module.exports = (comment) => {
	return comment.data.comment_author_email[0];
}
