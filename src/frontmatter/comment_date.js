const luxon = require('luxon');

const settings = require('../settings');

// get comment date, optionally formatted as specified in settings
// this value is also used for year/month folders, date prefixes, etc. as needed
module.exports = (comment) => {
	const dateString = comment.data.comment_date[0].replace(" ", "T")
	const dateTime = luxon.DateTime.fromISO(dateString, { zone: settings.custom_date_timezone });

	if (settings.custom_date_formatting) {
		return dateTime.toFormat(settings.custom_date_formatting);
	} else if (settings.include_time_with_date) {
		return dateTime.toISO();
	} else {
		return dateTime.toISODate();
	}
};
