const fs = require('fs');
const file = fs.createWriteStream('./big_file');


// function to create a stupid big file. done exceed 1e6. else, face the consequences...
function createABigFile() {
    return new Promise((resolve, reject) => {
        for(let i=0; i<1e6; i++)
        {
            file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
        }

        file.end();
        resolve('File Created');
    })
}

// createABigFile()
// .then((result) => {
//     console.log(result);
// })



