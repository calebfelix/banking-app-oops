const {
  NotFoundError,
  ValidationError,
  UnauthorizedError,
} = require("./error");

class Bank {
  static bankId = 100;
  static allBanks = [];
  constructor(bankName, abrivation) {
    this.bankId = Bank.bankId++;
    this.bankName = bankName;
    this.abrivation = abrivation;
    this.accounts = [];
    this.bankTotal = 0;
  }

  updateBankTotal() {
    let total = 0;
    for (let index = 0; index < this.accounts.length; index++) {
      total = total + this.accounts[index].AccountBalance;
    }
    this.bankTotal = total;
    return this.bankTotal;
  }

  getBankTotal() {
    return this.bankTotal;
  }

  static findBank(bankId) {
    for (let index = 0; index < Bank.allBanks.length; index++) {
      if (bankId === Bank.allBanks[index].bankId) {
        return [Bank.allBanks[index], index];
      }
    }
    return [null, -1];
  }

  findBankAccount(accountNumber) {
    for (let index = 0; index < this.accounts.length; index++) {
      if (accountNumber === this.accounts[index].accountNumber) {
        return this.accounts[index];
      }
    }
    return null;
  }

  static abrivation(bankName) {
    let upper = bankName.toUpperCase().split(" ");
    let words = upper.map((word) => {
      return word[0];
    });
    return words.join("");
  }

  static updateBankName(bankId, newValue) {
    try {
      let [bankToBeUpdated, bankToBeUpdatedIndex] = Bank.findBank(bankId);
      if (bankToBeUpdated == null) {
        throw new NotFoundError("User Not Found!");
      }
      bankToBeUpdated.bankName = newValue;
      bankToBeUpdated.abrivation = Bank.abrivation(newValue);
      return bankToBeUpdated;
    } catch (error) {
      throw error;
    }
  }

  static newBank(bankName) {
    try {
      if (typeof bankName != "string") {
        throw new ValidationError("invalid Bank Name");
      }

      let newBank = new Bank(bankName, Bank.abrivation(bankName));
      Bank.allBanks.push(newBank);
      return newBank;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Bank;
