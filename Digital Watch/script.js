const H=document.getElementById('Hour')
const M=document.getElementById('Minutes')
const S=document.getElementById('Second')
const ampm=document.getElementById('AP')

let updateclock=()=>{
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    let AMPM='AM'
    if(h>12){
        h=h-12
        AMPM='PM'
    }
    if(h>=12){
        AMPM='PM'
    }
    if(h<10){
        h="0"+h
    }
    else{
        h
    }
    if(m<10){
        m="0"+m
    }
    else{
        m
    }
    if(s<10){
        s="0"+s
    }
    else{
        s
    }
    H.innerText=h
    M.innerText=m
    S.innerText=s
    setTimeout(()=>{
        updateclock()
    },1000)
    ampm.innerText=AMPM
}
updateclock()