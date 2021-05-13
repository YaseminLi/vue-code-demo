const data={
    input:''
}
    Object.defineProperty(data,'input',{
        enumerable:true,//可枚举属性
        configurable:true,//描述符可修改，属性能删除,
        get:function(){
            console.log('get '+data.input);
        },
        set:function(newValue){
            console.log('set '+newValue);
            document.getElementById('input').value=newValue
            document.getElementById('span').innerHTML=newValue

        }
    })
let input=document.getElementById('input')
input.addEventListener('keyup',(e)=>{
    data.input=e.target.value
})