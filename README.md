# Node course

## Matheus Battisti's node.js course repository

## Modules

- Module 01 - Introduction;

## Note:

- To install the dependencies of the files containing node_modules, simply run the following command:

`npm install`

- To run the module files, simply have node installed on your machine. Then go to the directory with the js file using the terminal or cmd and type:

`node file_name.js`

- Create package.json without having to answer npm questions:

`npm init -y`

- Installing packages in dev mode:

` npm install --save-dev <package_name>`

- Installing packages in global mode:

` npm install -g <package_name>`

- Copies installed files globally:

`npm link lodash`

- Check npm package updates:

`npm update`

- Updates npm packages:

`npx npm-check-updates -u`

- Creating scripts in package.json:

```json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    },
```

- Running the script creating:

`npm run start`

or

`npm start`

- Removing packages with npm:

`npm uninstall <package_name>`

- Sequelize ORM installation:

`npm install sequelize`

- Installing mysql2 for use with Sequelize:

`npm install mysql2`
