var arr_4=new Array()

function f1(){
function getRandom(min,max)                                                 //开始取数
    {
        var random = Math.random()*(max-min)+min;
        random = Math.floor(random);
        if(arr_4.length < 4)                         //判断数组长度
        {
            for(i=0;i<=arr_4.length;i++)             //遍历数组。
            {
                if(random==arr_4[i])                    //比较随机数
                {
                    break;
                }
                else
                {
                    if(i==arr_4.length)
                    {arr_4.push(random);break;}
                }
            };
            getRandom(0,10);
        }
    }    getRandom(0,10);        //随机取0-9
alert("已随机生成四位数")
}

function result(){}

function answer(){
  alert("你选择的数字是"+ arr_4)
}
