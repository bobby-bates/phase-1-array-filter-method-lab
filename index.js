// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

const findMatching = (arr, str) => {
    return arr.filter(el => el.toLowerCase() === str.toLowerCase())
}

const fuzzyMatch = (arr, str) => {
    return arr.filter(el => el.startsWith(str))
}

const matchName = (arr, str) => {
    debugger
    return arr.filter(el => el.name === str)
}