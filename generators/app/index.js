'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
  // note: arguments and options should be defined in the constructor.
constructor(args, opts) {
  super(args, opts);
}
prompting() {
  return this.prompt([{
    type    : 'input',
    name    : 'name',
    message : 'Your project name',
    default : "app" // Default to current folder name
  }]);
}
  writing() {
    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), {name: this.config.appname});
    this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), {name: this.config.appname});
    this.fs.copyTpl(this.templatePath('_gulpfile.js'), this.destinationPath('gulpfile.js'), {name: this.config.appname});
    this.fs.copy(this.templatePath('_app/_scripts'),this.destinationPath('app/scripts'));
    this.fs.copy(this.templatePath('_app/_styles'),this.destinationPath('app/styles'));
    this.fs.copyTpl(this.templatePath('_app/index.html'),this.destinationPath('app/index.html'), {name: this.config.appname});
    mkdirp.sync('app/fonts/');
    mkdirp.sync('app/scripts/controllers');
    mkdirp.sync('app/scripts/services');
    mkdirp.sync('app/styles/core');
    mkdirp.sync('app/styles/module');
    mkdirp.sync('app/images/');
};

};
