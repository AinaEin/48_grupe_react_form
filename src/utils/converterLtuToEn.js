export function convertToEnglish(str) {
  const ltLetters = {ą: "a", č: "c", ę: "e", ė: "e", į: "i", š: "s", ų: "u", ū: "u", ž: "z",
  };
  return str.toLowerCase().replace(/[ąčęėįšųūž]/g, (match) => ltLetters[match] || match);
}
