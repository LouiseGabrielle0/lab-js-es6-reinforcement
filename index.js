// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************






 getFirstNames = usersArray => {
  const userFirstNames = [];
  for (let user of usersArray) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = usersArray => {
  const userFullNames = [];
  for (let user of usersArray) {
    userFullNames.push(`${user.firstName}` + ' ' + `${user.lastName}`)
  }
  return userFullNames;
};

console.log(getFullNames(usersArray))

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = usersArray => {
  const userCreditDetails = [];
  let a, b, c;

  for (let user of usersArray) {
    userCreditDetails.push({a,b,c} = {a: user.firstName,b: user.lastName, c:user.balance})
  }
  return userCreditDetails;
};
console.log(getUsersCreditDetails(usersArray))
getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {

 let femaleUsers = usersArray.filter(user => user.gender === 'female');
 let maleUsers = usersArray.filter(user => user.gender === 'male');
 let femaleUserNames = getFullNames(femaleUsers);

 let maleUserNames = getFullNames(maleUsers);

 return {femaleUserNames, maleUserNames}

};

console.log(genderView())
genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  let femaleCount = genderView(usersArray).femaleUserNames.length
  let maleCount = genderView(usersArray).maleUserNames.length

  return (`Female: ${femaleCount} maleUsers: ${maleCount}`)
};

console.log(genderCount())
genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  let over20k = usersArray.filter(user => user.balance > 20000);
  return over20k
};

console.log(promo20());

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
