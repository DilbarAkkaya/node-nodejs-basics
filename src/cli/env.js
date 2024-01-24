const parseEnv = () => {
    const variablesWithRSS_ = [];
    for (let key in process.env) {
        if (key.slice(0, 4) === 'RSS_') {
            variablesWithRSS_.push(`${key} = ${process.env[key]}`)
        }
    }
    console.log(variablesWithRSS_.join('; '))
};

parseEnv();