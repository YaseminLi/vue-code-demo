const data={}
let name='xiaoming'

Object.defineProperty(data,'name',{
  get:function(){
    console.log('get');
    return name
  },
  set:function(newVal){
    console.log('set')
    name=newVal
  }
})
console.log(data.name);
data.name="dafan"
console.log(data.name);