const time = {
    
    clube: 'Bahia',
    técnico: 'Rogério ceni',
    capitão: 'Everton Ribeiro'
};

for (let propriedade in time) {
    if (time.hasOwnProperty(propriedade)) {
        console.log(`${propriedade}: ${time[propriedade]}`);
    }
}