    /*
    // JavaScript to manipulate the links
    const links = document.querySelectorAll('#links-container a');
    const changeLinksButton = document.getElementById('changeLinks');
    const outputDiv = document.getElementById("output")


    // Function to change the text of the links when the button is clicked
    changeLinksButton.addEventListener('click', function() {
      links.forEach((link, index) => {
        link.textContent = `Link ${index + 1}: ${link.href}`;
      });
    });

    // Example: You can practice more by adding other manipulations
    // For example, you could log all the links' hrefs in the console


    
  //INVENTORS
  const inventors = [
    { firstName: "Thomas", lastName: "Edison", yearOfBirth: 1847, yearOfDeath: 1931 },
    { firstName: "Nikola", lastName: "Tesla", yearOfBirth: 1856, yearOfDeath: 1943 },
    { firstName: "Alexander", lastName: "Graham Bell", yearOfBirth: 1847, yearOfDeath: 1922 },
    { firstName: "Marie", lastName: "Curie", yearOfBirth: 1867, yearOfDeath: 1934 },
    { firstName: "Leonardo", lastName: "da Vinci", yearOfBirth: 1452, yearOfDeath: 1519 },
    { firstName: "Galileo", lastName: "Galilei", yearOfBirth: 1564, yearOfDeath: 1642 },
    { firstName: "James", lastName: "Watt", yearOfBirth: 1736, yearOfDeath: 1819 },
    { firstName: "Johannes", lastName: "Gutenberg", yearOfBirth: 1400, yearOfDeath: 1468 },
    { firstName: "Benjamin", lastName: "Franklin", yearOfBirth: 1706, yearOfDeath: 1790 },
    { firstName: "Isaac", lastName: "Newton", yearOfBirth: 1643, yearOfDeath: 1727 }
  ];
  
  // Filter inventors born in the 1500s
  const fifteen = inventors.filter(inventor => inventor.yearOfBirth >= 1500 && inventor.yearOfBirth < 1600);
  
  // Log to the console (check your browser's developer console)
  console.table(fifteen);
  outputDiv.innerHTML = fifteen.map(inventor => inventor.firstName + " " + inventor.lastName).join('');
  //Give us an array of inventory first and last names

  const fullNames = inventors.map(inventor => inventor.firstName + " " + inventor.lastName)
  console.table(fullNames)
  // Sort the inventors by birthdate, oldest to youngest
  const sortByBirth = inventors.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? a.index = -1 : a.index = 1)
  console.table(sortByBirth)
  // How many years did all the inventors live
  const calculateLife = inventors.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfDeath ? -1 : 1)
  console.log(calculateLife)
  // total lifespan
const totalLife = inventors.reduce((accumulator, inventor) => {
  return accumulator + (inventor.yearOfDeath - inventor.yearOfBirth)
}, 0)
console.table(totalLife)
// individual lifespan
const lifeSpan = inventors.map(inventor => inventor.yearOfDeath - inventor.yearOfBirth)
console.log(lifeSpan)
// sort lifespan
const sortLifeSpan = inventors.sort((a,b) => a.lifeSpan < b.lifeSpan ? -1 : 1)
console.log(sortLifeSpan)
 */
  const people = [
    "Edison, Thomas",
    "Tesla, Nikola",
    "Bell, Alexander Graham",
    "Curie, Marie",
    "da Vinci, Leonardo",
    "Galilei, Galileo",
    "Watt, James",
    "Gutenberg, Johannes",
    "Franklin, Benjamin",
    "Newton, Isaac"
  ];

 

  // Sort the people alphabetically by last name

 const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ")
  const [bLast, bFirst] = lastOne.split(", ")
  return aLast > bLast ? 1 : -1;
 })







