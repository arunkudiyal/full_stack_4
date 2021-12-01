// console.log('It Works...')

// 1. for-of()
// 2. forEach()
// 3. filter()
// 4. map()
// 5. sort()
// 6. reduce()

// Lists
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2001, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

const alphabets = ['X', 'S', 'P', 'A', 'J', 'M', 'K', 'N', 'Q', 'T', 'Z', 'H']

const names = ['arun', 'aarun', 'maqsood', 'priya', 'sravan', 'jyothi', 'vishweshwar', 'radha', 'aaarun']

// console.log(companies)

// Print the name of all the companies
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i].name)
// }

// 1.
// for-of --> ONLY WANT TO ITERATE
// for(let company of companies) {
//     console.log(company)
//     // console.log(company.name)
// }

// 2.
// forEach() --> ONLY WANT TO ITERATE
// arrayName.arrayMethodName( (callback) => { ...functionBody } )
// companies.forEach( (company) => {
//     // console.log(company)
//     console.log(company.name)
// } )
// companies.forEach( company => console.log(company.name) )

// 3.
// filter() --> when you have a condition AND based on that condition you have filter out elements | IT RETURNS AN ARRAY BACK
// Q:- Find out the ages which can drink (age >= 18)
// const canDrink = []
// for(let i=0; i < ages.length; i++) {
//     // conditional statement
//     if(ages[i] >= 18) {
//         canDrink.push(ages[i])
//     } 
// }
// console.log(canDrink)

// const canDrink = ages.filter( (age) => age >= 18 )
// const canDrink = ages.filter( age => age >= 18 )
// console.log(canDrink)

// Q:- Find out all the company names which started before 1990s
// const eighteesCompaniees = companies.filter( company => company.start < 1990 )
// console.log(eighteesCompaniees)

// 4. 
// map() --> Performs operations (Mathematical Operations) | Returns you with an array back
// const ageOfCompanies = []
// for(let i=0; i < companies.length; i++) {
//     ageOfCompanies.push(companies[i].end - companies[i].start)
// }
// console.log(ageOfCompanies)

// convert each value +2
// const incrementAge = ages.map( age => age + 2 )
// console.log(incrementAge)

// const ageOfCompanies = companies.map(company => company.end - company.start)
// console.log(ageOfCompanies)

// Q:- Print CompanyName - Start - End
// const companyMap = companies.map( company => {return `${company.name} --> ${company.start} - ${company.end}`} )

// console.log(companyMap)

// Q:- Find the NAME OF THE COMPANY which is a RETAIL Company
// const retailCompanyNames = companies.map(company => company.name)
// const retailCompanyDetails = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanyNames)
// console.log(retailCompanyDetails)

// const retailCompanyNames = companies.filter(company => company.category === 'Retail').map(company => company.name)
// console.log(retailCompanyNames);

// Q:- The Category of all the 80s company
// const eighteesCompanyCategories = companies.filter(company => company.start < 1990).map(company => company.category)
// console.log(eighteesCompanyCategories)

// Q:- CompanyName --> AgeOfTheComapny - ASSIGNMENT
// const ageOfCompanies = companies.map( company => {return `${company.name} ---> ${company.end - company.start}`} )
// console.log(ageOfCompanies)

// 5. 
// sort() - NUMERIC DATA - SORT the DATA - ascending order or descending order | RETURNS AN ARRAY

// const asceSortedAges = ages.sort( (a, b) => (a > b) ? 1 : -1 )
// console.log(asceSortedAges)

// const descSortedAges = ages.sort( (a, b) => (a < b) ? 1 : -1 )
// console.log(descSortedAges)

// const descSortedAges = ages.sort( (a, b) => (a > b) ? -1 : 1 )
// console.log(descSortedAges)

// Q: Sort the companies based on which company started first
// const sortedCompanies = companies.sort( (a, b) => (a.start > b.start) ? 1 : -1 )
// console.log(sortedCompanies)

// const sortedAlphabets = alphabets.sort( (a, b) => (a > b) ? 1 : -1 )
// console.log(sortedAlphabets)

// const sortedNames = names.sort( (a, b) => (a > b) ? 1 : - 1 )
// console.log(sortedNames)

// const sortedCompanies = companies.sort( (a, b) => (a.name > b.name) ? 1 : -1 )
// console.log(sortedCompanies)

// WHY WE SHOULD NOT USE .sort() ON NON-NUMERIC DATA

// 6.
// reduce() - A specific mathematic solution for elements in an array

// const sumOfAges = ages.reduce( (total, age) => {
//     // Body of the operation
//     return total + age
// }, 3 )

// console.log(sumOfAges)

// // Q:- Total years of every company
// const totalAgeOfAllCompanies = companies.reduce( (total, company) => {
//     return total + (company.end - company.start)
// }, 0 )

// console.log(totalAgeOfAllCompanies)