const {sendEmail, emailData} = require('./emailer.js');
const {FooError, BarError, BizzError} = require('./errors.js');

const errorIdentifier = (error) => {
  if (error === FooError) {
    emailData.Subject = "A FooError has occured";
    emailData[Text-part] = `${FooError.name}` + `${FooError.stack}`;
    sendEmail(emailData);
  } else if (BarError) {
    emailData.Subject = "A BarError has occured";
    emailData[Text-part] = `${BarError.name}` + `${BarError.stack}`;
    sendEmail(emailData);
  } else {
    next();
  }
};

module.exports = {errorIdentifier};