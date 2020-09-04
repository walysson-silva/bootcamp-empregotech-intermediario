(() => {
    let test = 'Valor função'
    console.log (`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'example';
        console.log (`Valor dentro do if "${test}"`);    
    }

    if (true) {
        let test = 'valor de outro if';
        console.log (`Valor de outro if "${test}"`);    
    }

    console.log(`Valor após execução do if "${test}"`);
})();