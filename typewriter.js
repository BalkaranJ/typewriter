//Animated Sentence
//This function: Reveal one character at a time
//First, loop through the characters of the string #DONE
//Second, Print each character 50ms apart #DONE

const sentence = "hello there from lighthouse labs";
let i = 0;

const printLetterByLetter = function() {
  if (sentence.length <= i + 0) {
    process.stdout.write('\n');
    return;
  }
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    printLetterByLetter(i++);
  }, 50);

};

printLetterByLetter();
