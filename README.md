# Installation

```
npm install -g shit-cli-tool
```

**_if you install locally, you need to add scripts_**

# Usage

`shit -v` || `shit --version` to check version<br>
`shit new project-name` creates a new project<br>
`shit module module-name` || `shit m module-name` creates a new module inside `./components` folder<br>
`shit remove module-name` || `shit rm module-name` removes `./module-name`<br>
`shit remove` command is able to delete any file/folder that exists in current path `./`<br>
`shit remove module-name -c` || `shit rm module-name -c` removes `./components/module-name`<br>
`shit service service-name module-name` to create a service inside `./components/module-name/services`<br>

# Update to latest versions of all packages inside package.json

`npm install -g npm-check-updates` <br>
`ncu -u`<br>
source: https://github.com/raineorshine/npm-check-updates <br>

<br>
<br>
##### Happy coding &nbsp;&nbsp;&nbsp; 🙏🎉🎊
