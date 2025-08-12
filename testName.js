var ModTemplate = require('../../lib/templates/modtemplate');

class testClass extends ModTemplate {

  constructor(app) {

    super(app);

    this.name            = "testName";
    this.slug            = "testslug";
    this.description     = "test description";
    this.categories       = "test categories";
    return this;

  }

  async render() { 
    if (document.querySelector('body')) {
       document.querySelector('body').innerHTML = "Testing...";  
    }
  }
}

module.exports = testClass;
