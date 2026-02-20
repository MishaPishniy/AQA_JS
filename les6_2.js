// поганий варіант 
function withdraw(balance, amount) {
  if (amount > 0) {
    if (amount <= balance) {
      if (amount <= 1000) {
        balance -= amount;
        return balance;
      } else {
        return "Ліміт перевищено";
      }
    } else {
      return "Недостатньо коштів";
    }
  } else {
    return "Некоректна сума";
  }
}

// гарний варінт з пкатерном 


function withdraw(balance, amount) {

    if (amount <= 0 )  return "Некоректна сума"

    if (amount > balance)  return "Недостатньо коштів";

    if(amount > 1000) return "Ліміт перевищено";

    return balance - amount
}


