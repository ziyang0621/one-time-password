const twilio = require('twilio');

const accountSid = 'ACb907065268a84db87f48e9d448403c5f';
const authToken = '049eb352b165f0959efcff0a0a2f510a';

module.exports = new twilio.Twilio(accountSid, authToken);
