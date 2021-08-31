var data = [{"id":1,"name":"reno"},{"id":2,"name":"fiat"}]
str = "";

data.forEach(function(i){
    str +=" id: " + i.id + " name: " + i.name;
});

console.log(str);

option(value=val) User #{JSON.stringify(val.name)}
//