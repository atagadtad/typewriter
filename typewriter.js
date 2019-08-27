const sentence = 'hello there from lighthouse labs';

const animatedString = (sentence) => {
  let t = 0
  let string = sentence + '\n';
  for (const char of string) {
    t += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, t);
  };
};

animatedString(sentence);



