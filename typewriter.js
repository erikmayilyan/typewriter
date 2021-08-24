const sentence = "hello there from lighthouse labs";
let delay = 50;
for (const char of sentence) {
  setTimeout(function() {
    process.stdout.write(char);
  }, delay += 50); 
}