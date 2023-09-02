class Transaction {
  constructor(
    date,
    senderAccountNo,
    receverAccountNo,
    amount,
    currentBalance,
    type
  ) {
    this.date = date;
    this.senderAccountNo = senderAccountNo;
    this.receverAccountNo = receverAccountNo;
    this.amount = amount;
    this.currentBalance = currentBalance;
    this.type = type;
  }
}

module.exports = Transaction;
