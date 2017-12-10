const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(7777);

// git에 commit 하지 않을 파일을 선택하는 파일이 있다.
// .gitignore