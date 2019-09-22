function applicator(fn, val){
  return function(){
    fn(val);
  }
}

function speak(str){
  console.log(str);
}

const sayHi = applicator(speak, 'Hi')

const sayGoodBye = applicator(speak, 'Hello')

const sayGoodMorninig = applicator(speak, 'Good Morninig')

sayHi();

sayGoodBye();

sayGoodMorninig();
