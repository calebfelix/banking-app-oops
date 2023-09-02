const BankingAppError = require("./BankingAppError");
let { StatusCodes } = require("http-status-codes");

class NotFoundError extends BankingAppError {
  constructor(specificMessage) {
    super(
      "Resource Not Found",
      "Not Found Error",
      StatusCodes.NOT_FOUND,
      specificMessage
    );
  }
}

module.exports = NotFoundError;
