let loan=document.getElementById("calc");
let crd=document.getElementById("main1");
let reset=document.getElementById("reset");
let newDiv = document.createElement('div');
let loader = document.getElementById('loading');
//loan.addEventListener('click',giphy);+
//loan.addEventListener('click',Loan);
reset.addEventListener('click',rest);

loan.addEventListener('click',function(e){
  loader.style.display='block';
  console.log(loader);
  setTimeout(Loan, 2000);

  e.preventDefault();
})


function Loan(e){
  let p = document.getElementById("inpt").value;
  let r = document.getElementById("inpt1").value;
  let t = document.getElementById("inpt2").value;   
  if(!p || !r || !t)
    {
      console.log('Check your values');
      let newDiv = document.createElement('div');
      newDiv.className="container card text-center";
      newDiv.appendChild(document.createTextNode(`Check your Numerical values.`));
      loader.style.display='none';
      crd.appendChild(newDiv);
      `break;`
    }

  else
  {
    p=Number(p);
    r=Number(r);
    t=Number(t);
    let mnths = Number(t * 12);
    let ti = Number((p*r*t)/100);
    let tp = Number(p + ti);
    let mp = Number(tp/mnths);
    ti=ti.toFixed(2);  
    tp=tp.toFixed(2);
    mp=mp.toFixed(2);


    newDiv.className="container card text-left";
    newDiv.appendChild(document.createTextNode(`Monthly Payment: ${mp}                                                   
    Interest: ${ti}                                                                                                          Total Payment: ${tp}`));
    loader.style.display='none';
    crd.appendChild(newDiv);
    

  }
  
}

function rest(e){
   newDiv.innerHTML="";
}

// function giphy(e){
//   let docs = document.getElementById("img");
//   docs.setAttribute("src", "giphy.gif");
//   crd.appendChild(docs);

//   e.preventDefault();
// }