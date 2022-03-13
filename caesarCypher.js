function rot13(str) {
  let letters = {
      'N':'A',
      'O':'B',
      'P':'C',
      'Q':'D',
      'R':'E',
      'S':'F',
      'T':'G',
      'U':'H',
      'V':'I',
      'W':'J',
      'X':'K',
      'Y':'L',
      'Z':'M',
      'A':'N',
      'B':'O',
      'C':'P',
      'D':'Q',
      'E':'R',
      'F':'S',
      'G':'T',
      'H':'U',
      'I':'V',
      'J':'W',
      'K':'X',
      'L':'Y',
      'M':'Z',
      '?':'?',
      '!':'!',
      '.':'.',
      ' ':' '
  };
  let strOut = '';
  let newStr;
  for(let i =0; i < str.length; i++){
    console.log("letter: ", str[i]);
    console.log(letters[str[i]]);

    newStr = letters[str[i]];
    strOut += newStr;
  }
  console.log(strOut)
  return strOut;
}

rot13("SERR PBQR PNZC");