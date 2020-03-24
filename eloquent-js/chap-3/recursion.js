function foo(i) {
  if (i < 0)
    return console.log('menor que 1');
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(10);