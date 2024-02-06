const parseArgs = () => {
    const arrayWithoutPath = process.argv.slice(2);
    for (let i = 0; i < arrayWithoutPath.length; i += 2) {
        const propName = arrayWithoutPath[i].slice(2);
        const value = arrayWithoutPath[i + 1];
        console.log(`${propName} is ${value}`);
    }
};

parseArgs();