async = require('async')

function shuffle(list,newlist){
  while(list.length != 0){
    index = Math.round(Math.random() * list.length)
    newlist.push(list[index])
    list.splice(index, 1)
    shuffle(list, newlist)
  }
  if(list.length==0) return newlist.filter(Number)
}

function merge(list,num){
  while(list.length!=0){
    num.push(list.slice(0,3).join().replace(/,/g,''))
    list.splice(0,3)
    merge(list,num)
  }
  if(list.length==0) return num
}

function test(list){
  if(list[1]/list[0]==2 && list[2]/list[0]==3) console.log(list)
}


//running
function run(){
  nlist = shuffle([1,2,3,4,5,6,7,8,9],[])
  nlist = merge(nlist,[])
  test(nlist)
  run()
}

//async.forever(run(),function(){console.log('error')})
run()

