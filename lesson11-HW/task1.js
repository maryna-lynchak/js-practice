function saySmth(phrase, name) {
  console.log(`${phrase} ${name}!`);
}

setTimeout(saySmth, 5000, 'Hello', 'Mike');