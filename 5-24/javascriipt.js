let arr=[]
for (let i = 0; i < 100; i++) {
    arr[i]=Math.floor(Math.random()*1000);
}
console.log(Math.max(...arr));

