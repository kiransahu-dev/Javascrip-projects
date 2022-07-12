var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function(){
    let c = this.value;
    let v = (c * 9/5) + 32;
    if(!Number.isInteger(v))
    {
        v = v.toFixed(4);
    }
    fah.value = v;
});
fah.addEventListener('input', function(){
    let v = this.value;
    let c = (v - 32) * 5/9;
    if(!Number.isInteger(c))
    {
        c = c.toFixed(4);
    }
    cel.value = c;
});