const letters = [
  "bici coche (balón) bici coche peluche",
  "(muñeca) consola bici",
  "bici coche (balón bici coche",
	"peluche (bici [coche) bici coche balón",
	"(peluche {) bici",
	"() bici",
  "(()) bici",
  "(a() bici (a)",
  "(a)",
  "(1)",
  "(muñeca) consola bici"
]

const isValid = (letter) => {
	const invalidChars = ["{", "}","[","]"]
  if(invalidChars.some((char) => letter.includes(char)))
    return false;
  
  let words = letter.split(" ")
  let filteredWords = words.map(word => word.replace(/\([^()]+\)/g,""))
  
  return !filteredWords.some(word => word.includes("(") || word.includes(")"))
  
}

letters.forEach(e => console.log(isValid(e)))
