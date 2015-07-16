var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  prompting: function() {

    var done = this.async();

    this.prompt([
      {
        type: 'input',
        name: 'packageName',
        message: 'Provide your node package name',
        validate: function(packageName) {

          return packageName ? true : 'Should be a valid node package name';
        },
        filter: trim
      }
    ], function(answers) {

      this.config.set('packageName', answers.packageName);
      done();
    }.bind(this));

  },

  writing: function() {

    var packageName = this.config.get('packageName');
    var templateContext = {
      packageName: packageName
    };

    // ./demo
    this.fs.copyTpl(this.templatePath('demo/demo.js'), this.destinationPath('demo/demo.js'), templateContext);
    this.fs.copyTpl(this.templatePath('demo/demo.html'), this.destinationPath('demo/demo.html'), templateContext);

    // ./src
    this.fs.copy(this.templatePath('src/component-template.es6'), this.destinationPath('src/' + packageName + '.es6'));

    // ./test
    this.fs.copyTpl(this.templatePath('test/component-template.spec.js'),
        this.destinationPath('test/' + packageName + '.spec.js'),
        templateContext);

    // root
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('_npmignore'), this.destinationPath('.npmignore'));
    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), templateContext);
    this.fs.copy(this.templatePath('component-template.scss'), this.destinationPath(packageName + '.scss'));
    this.fs.copyTpl(this.templatePath('index.js'), this.destinationPath('index.js'), templateContext);
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), templateContext);
    this.fs.copyTpl(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'), templateContext);

    // create lib directory
    mkdirp.sync(this.destinationPath('lib'));

  },

  install: function() {
    this.npmInstall();
  }

});

function trim(packageName) {
  return packageName.trim();
}
