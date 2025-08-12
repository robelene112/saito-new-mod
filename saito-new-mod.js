var ModTemplate = require('../../lib/templates/modtemplate');

class Tutorial01 extends ModTemplate {

  constructor(app) {

    super(app);

    this.name            = "saito-new-mod";
    this.slug            = "hellow";
    this.description     = "Hello world!";
    this.categories       = "";
    return this;

  }

  async render() { 
    if (document.querySelector('body')) {
       document.querySelector('body').innerHTML = "Hello World";  
    }
  }
}

module.exports = Tutorial01;
