const BankingAppError = require("./BankingAppError");
let { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends BankingAppError {
  constructor(specificMessage) {
    super(
      "Unauthorized",
      "Unauthorized Error",
      StatusCodes.UNAUTHORIZED,
      specificMessage
    );
  }
}

module.exports = UnauthorizedError;
