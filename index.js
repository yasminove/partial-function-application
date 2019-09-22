function applicator(fn, val){
  return function(){
    fn(val);
  }
}
