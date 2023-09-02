const Account = require("./Account");
const User = require("./User");

a1 = User.newAdmin("caleb", 3, "m");
u1 = a1.newUser("caleb", 22, "m");
u2 = a1.newUser("Ria", 25, "f");

a1.getAllUsers();
a1.updateUser(1, "name", "caleb Updated");
a1.getAllUsers();

a1.newBank("indian bank");
a1.newBank("Axis Bank");
a1.newBank("Maharashtra Bank");
a1.newBank("bank of Hydrabad");

a1.updateBank(103, "bankName", "bank of AndraPradesh");
u1.newAccount(100);
u1.newAccount(101);
u2.newAccount(101);
u1.getAccounts();

console.log(u2.getAccounts());
console.log(a1.getAllBanks());
u2.deposite(1000002, 100);
u2.withdraw(1000002, 2);
u2.withdraw(1000002, 20);
console.log(Account.allAccounts);
console.log(u2.transfer(1000002, 1000001, 40));
console.log(u1.transfer(1000001, 1000000, 5));
a1.getAllBanks();
u2.getAccounts();
console.log(Account.allAccounts);

console.log(u2.getAccountTransactionsByDate(1000002, "1/8/2023", "1/9/2023"));
console.log(u2.getAccountTransactionsByDate(1000002, "1/8/2023", "2/9/2023"));
console.log(u2.getAccountTransactionsByDate(1000002, "", "2/9/2023"));
console.log(u2.getAccountTransactionsByDate(1000002, "1/8/2023", ""));
console.log(a1.getAllBanks());
console.log(u1.getNetWorth());
