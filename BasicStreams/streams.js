const fs = require('fs');


// function to create a stupid big file. done exceed 1e6. else, face the consequences...
function createABigFile(fileName) {
    const file = fs.createWriteStream(fileName);
    return new Promise((resolve, reject) => {
        for(let i=0; i<1e6; i++)
        {
            file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
        }

        file.end();
        resolve();
    })
}

function checkIfFileExist(fileName) {
    return new Promise((resolve, reject) => {
        fs.stat(fileName, (err, stat) => {
            if(err) {
                console.log(`## NO FILE FOUND : ${fileName}`);
                createABigFile(fileName)
                .then(() => {
                    console.log(`## FILE CREATED...`);
                    resolve();
                })
                .catch((err) => {
                    console.log(`## ERROR IN FILE CREATION: ${err}`);
                    reject(err);
                })
            } else {
                console.log(`## File Already Present`);
                resolve();
            }
        })
    })
}

module.exports = {
    createBigFile: () => {
        return createABigFile()
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        })
    },

    fileExistElseCreate: (fileName) => {
        return checkIfFileExist(fileName)
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        })
    }
}



