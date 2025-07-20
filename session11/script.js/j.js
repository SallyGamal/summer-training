function looping(start, end, breakNum, continueNum) {
    if (
        start === undefined ||
        end === undefined ||
        breakNum === undefined ||
        continueNum === undefined
    ) {
        console.log('Please enter all numbers');
        return;
    }

    for (let i = start; i <= end; i++) {
        if (i === breakNum) break;
        if (i === continueNum) continue;
        console.log(i);
    }
}

looping(1, 7, 5, 3);