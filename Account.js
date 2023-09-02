const Bank = require("./Bank");
const Transaction = require("./Transaction");
const {
  NotFoundError,
  ValidationError,
  UnauthorizedError,
} = require("./error");

class Account {
  static AccountNumber = 1000000;
  static allAccounts = [];

  constructor(bankName, bankId, userId) {
    this.AccountNumber = Account.AccountNumber++;
    this.bankName = bankName;
    this.bankId = bankId;
    this.userId = userId;
    this.AccountBalance = 1000;
    this.passbook = [];
  }

  getDate() {
    let today = new Date()
    return today.toLocaleDateString()
    // return today
  }

  static findAccount(AccountNumber) {
    for (let index = 0; index < Account.allAccounts.length; index++) {
      if (AccountNumber === Account.allAccounts[index].AccountNumber) {
        return Account.allAccounts[index];
      }
    }
    return null;
  }
  static newAccount(bankId, userId) {
    try {
      if (typeof bankId != "number") {
        throw new ValidationError("invalid bank id");
      }

      let [bank, bankIndex] = Bank.findBank(bankId);

      if (bank == null) {
        throw new NotFoundError("bank not found");
      }

      let newAccount = new Account(bank.bankName, bank.bankId, userId);
      Account.allAccounts.push(newAccount);
      return newAccount;
    } catch (error) {
      throw error;
    }
  }

  addAmount(amount, senderAccountNo, receverAccountNo) {
    try {
      this.AccountBalance = this.AccountBalance + amount;
      let newTransaction = new Transaction(
        this.getDate(),
        senderAccountNo,
        receverAccountNo,
        amount,
        this.AccountBalance,
        "Credit"
      );
      this.passbook.push(newTransaction);
      return this.AccountBalance;
    } catch (error) {
      throw error;
    }
  }

  deductAmount(amount, senderAccountNo, receverAccountNo) {
    try {
      if (this.AccountBalance - amount < 1000) {
        throw new ValidationError(
          "insufficent balance amount exceding minimum balance"
        );
      }
      this.AccountBalance = this.AccountBalance - amount;
      let newTransaction = new Transaction(
        this.getDate(),
        senderAccountNo,
        receverAccountNo,
        amount,
        this.AccountBalance,
        "debit"
      );
      this.passbook.push(newTransaction);
      return this.AccountBalance;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Account;
