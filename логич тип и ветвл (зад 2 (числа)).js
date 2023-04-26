const x = 2
switch (x) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}


let x = 1,
  res;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    res = "x - число";
    break;
  case "string":
    res = "x - строка";
    break;
  case "boolean":
    res = "x - логическое";
    break;
  default:
    res = "Тип x не определен";
}
console.log(res);