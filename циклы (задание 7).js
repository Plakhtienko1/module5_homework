var mas = [12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964];

for (var i = 0; i < mas.length; i++)
{
  if ((mas[i] % 2) === 0)
  {
  	console.log(mas[i]);
  }
}
isOdd = (num) => num % 2 !== 0;
odd = mas.filter(isOdd);
console.log(odd);