const invoicing = require('./invoicing.json');

function getMinValue(){
    const sortedValues = invoicing.sort();
    return sortedValues.find(value => value > 0);
}

function getMaxValue(){
    const sortedValues = invoicing.sort();
    return sortedValues[sortedValues.length - 1];
}

function getDaysWithInvoicingHigherThanAverage(){
    const average = invoicing.reduce((acc,current) => acc + current, 0) / invoicing.length;
    let days = 0;
    invoicing.forEach(value => {
        if(value > average) days+= 1;
    })
    console.log(days);
}

function getDaysWithInvoicingHigherThanAverage() {
    const validValues = invoicing.filter(f => f > 0);

    const sum = validValues.reduce((acc, value) => acc + value, 0);
    const average = sum / validValues.length;

    const higherDays = invoicing.filter(f => f > average).length;

    return higherDays;
}

console.log('Menor valor: ', getMinValue());
console.log('Maior valor: ', getMaxValue());
console.log('Número de dias com faturamento maior que a média ', getDaysWithInvoicingHigherThanAverage());