function a() {
  let v = 10;
  setTimeout(() => {
    console.log(`O valor de v era ${v}`);
    v = 100;
    console.log(`O valor de v é ${v}`);
  }, 2000)
  return v;
}

console.log(a())