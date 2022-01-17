function evenPositions (strings){
    let result = '';

    for ( i = 0; i < strings.length; i++){
        if (i % 2 == 0){
            result += strings[i];
            result += ' ';
        }
       
    }

    console.log(result);
}

evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);
