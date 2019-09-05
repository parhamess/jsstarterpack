const n=20;
var I=1,J=1;

function ready() {
  document.addEventListener("keydown", keylistener);
  render();
}
function render(){
  let s="<table>" ;

  for(let i=1; i<=n ; ++i ){
    s+="<tr>";
    for(let j=1; j<= n ;++j ){
      s+="<td>";
      if(i===I && j==J ){
        s+="noghte";
      }
      s+="</td>";
    }
    s+="</tr>";
  }
  s+="</table>";
  document.getElementById("root").innerHTML=s;
}
function keylistener(sss){
    switch(sss.key){
      case 'w' : I=Math.max(I-1,1) ;
      break ;
      case 'a' : J=Math.max(J-1,1) ;
      break ;
      case 's' : I=Math.min(I+1,n) ;
      break ;
      case 'd' : J=Math.min(J+1,n) ;
      break ;
    }
    console.log(I + " " + J)
    render();
}
