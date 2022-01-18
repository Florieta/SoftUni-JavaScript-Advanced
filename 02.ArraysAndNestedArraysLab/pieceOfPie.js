function pie(pie, pieFirst, pieLast){
const start = pie.indexOf(pieFirst);
const end = pie.indexOf(pieLast);

const result = pie.slice(start, end + 1);
return result;
}

console.log(pie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));