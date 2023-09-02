const BankingAppError = require("./BankingAppError");
let { StatusCodes } = require("http-status-codes");

class ValidationError extends BankingAppError {
  constructor(specificMessage) {
    super(
      "Invalid Parameters",
      "Validation Error",
      StatusCodes.BAD_REQUEST,
      specificMessage
    );
  }
}

module.exports = ValidationError;
