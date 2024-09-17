setInterval(()=>{
  let hours=document.getElementById("hours");
  let minutes=document.getElementById("minutes");
  let seconds=document.getElementById("seconds");
  let ap=document.querySelector(".ampm");
   let hrs=new Date().getHours();
   let mins=new Date().getMinutes();
    let secs=new Date().getSeconds();
    let sap=hrs>=12?'PM':'AM';
    if(hrs>12)
      {
        hrs=hrs-12;
      }
    hrs=hrs<10?'0'+hrs:hrs;
    mins=mins<10?'0'+mins:mins;
    secs=secs<10?'0'+secs:secs;
    
    
    hours.innerHTML=hrs+" Hours";
    minutes.innerHTML=mins+" Minutes";;
    seconds.innerHTML=secs+" Seconds";;
    
    let dots=document.querySelectorAll(".dot");
    let h=document.querySelector(".h");
    let m=document.querySelector(".m");
    let s=document.querySelector(".s");
    
    h.style.transform=`rotate(${hrs*30}deg)`;
    m.style.transform=`rotate(${mins*6}deg)`;
   s.style.transform=`rotate(${secs*6}deg)`;
    
    let hc=document.getElementById("hc");
    let mc=document.getElementById("mc");
    let sc=document.getElementById("sc");
    
    hc.style.strokeDashoffset=440-(440*hrs)/12;
   mc.style.strokeDashoffset=440-(440*mins)/60;
    sc.style.strokeDashoffset=440-(440*secs)/60;
    ap.innerHTML=sap;
    
    
    
    
    
  },1000);