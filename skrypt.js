var hpP
var hpP1
var hpP2
var hp
var hp1
var hp2
function odbierzHP(){
    if (isWalka==false) napisz("Nie masz kogo atakować!","System");
    else {
    atak();
    

        if(hp>0 && hp1>0 && hp2>0){
            if (hp-dmgp<0) hp=0;
            else hp-=dmgp;
            document.getElementById("hp").innerHTML=hp;
            if (hp1-dmgp<0) hp1=0;
            else hp1-=dmgp;
            document.getElementById("hp1").innerHTML=hp1;
            if (hp2-dmgp<0) hp2=0;
            else hp2-=dmgp;
            document.getElementById("hp2").innerHTML=hp2;
        }

        else if(hp==0 && hp1>0 && hp2>0){
            if (hp1-dmgp-dmgp<0) hp1=0;
            else hp1-=dmgp+dmgp;
            document.getElementById("hp1").innerHTML=hp1;
            if (hp2-dmgp<0) hp2=0;
            else hp2-=dmgp;
            document.getElementById("hp2").innerHTML=hp2;
            }
        else if(hp==0 && hp1==0 && hp2>0){
            if (hp2-dmgp-dmgp-dmgp<0) hp2=0;
            else hp2-=dmgp+dmgp+dmgp;
                document.getElementById("hp2").innerHTML=hp2;
                }
        else if(hp>0 && hp1>0 && hp2==0){
            if (hp-dmgp<0) hp=0;
            else hp-=dmgp;
            document.getElementById("hp").innerHTML=hp;
            if (hp1-dmgp-dmgp<0) hp1=0;
            else hp1-=dmgp+dmgp;
            document.getElementById("hp1").innerHTML=hp1;
                    }
        else if(hp>0 && hp1==0 && hp2==0){
            if (hp-dmgp-dmgp<0) hp=0;
            else hp-=dmgp+dmgp;
            document.getElementById("hp").innerHTML=hp;
                    }
        else if(hp==0 && hp1>0 && hp2==0){
            if (hp1-dmgp-dmgp-dmgp<0) hp1=0;
            else hp1-=dmgp+dmgp+dmgp;
                        document.getElementById("hp1").innerHTML=hp1;
                        }

                        ifPrzegrales();


        



         if(hpP>0 && hpP1>0 && hpP2>0){
            if (hpP-dmg<0) hpP=0;
            else hpP-=dmg;
            document.getElementById("hpP").innerHTML=hpP;
            if (hpP1-dmg2<0) hpP1=0;
            else hpP1-=dmg2;
            document.getElementById("hpP1").innerHTML=hpP1;
            if (hpP2-dmg3<0) hpP2=0;
            else hpP2-=dmg3;
            document.getElementById("hpP2").innerHTML=hpP2;
            }
        else if(hpP<=0 && hpP1>0 && hpP2>0){
            if (hpP1-dmg-dmg2<0) hpP1=0;
            else hpP1-=dmg+dmg2;
                document.getElementById("hpP1").innerHTML=hpP1;
                if (hpP2-dmg3<0) hpP2=0;
            else hpP2-=dmg3;
                document.getElementById("hpP2").innerHTML=hpP2;
                }  
        else if(hpP>0 && hpP1<=0 && hpP2>0){
            if (hpP-dmg-dmg2<0) hpP=0;
            else hpP-=dmg+dmg2;
                    document.getElementById("hpP").innerHTML=hpP;
            if (hpP2-dmg3<0) hpP2=0;
            else hpP2-=dmg3;
                    document.getElementById("hpP2").innerHTML=hpP2;
                    } 
        else if(hpP>0 && hpP1>0 && hpP2<=0){
            if (hpP-dmg<0) hpP=0;
            else hpP-=dmg;
                        document.getElementById("hpP").innerHTML=hpP;
                        if (hpP1-dmg2-dmg3<0) hpP1=0;
                        else hpP1-=dmg2+dmg3;
                        document.getElementById("hpP1").innerHTML=hpP1;
                        }  
        else if(hpP<=0 && hpP1<=0 && hpP2>0){
            if (hpP2-dmg-dmg2-dmg3<0) hpP2=0;
            else hpP2-=dmg+dmg2+dmg3;
                            document.getElementById("hpP2").innerHTML=hpP2;
                            }
         else if(hpP>0 && hpP1<=0 && hpP2<=0){
            if (hpP-dmg-dmg2-dmg3<0) hpP=0;
            else hpP-=dmg+dmg2+dmg3;
                                document.getElementById("hpP").innerHTML=hpP;
                                }
         else if(hpP<=0 && hpP1>0 && hpP2<=0){
            if (hpP1-dmg-dmg2-dmg3<0) hpP1=0;
            else hpP1-=dmg+dmg2+dmg3;
                                    document.getElementById("hpP1").innerHTML=hpP1;
                                    }
        
        // else if(hpP<=0 && hpP1<=0 && hpP2<=0){
        //                                 isWalka=false; //koniec walki, potwory pokonane
        //                                 druzyna.potwory[0]=20;
        //                                 druzyna.potwory[1]=20;
        //                                 druzyna.potwory[2]=20;
        //                                 document.getElementById("hpP").innerHTML="";
        //                                 document.getElementById("hpP1").innerHTML="";
        //                                 document.getElementById("hpP2").innerHTML="";
        //                                 document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        //                                 "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        //                             } "TODO"
                                }
}

    var dmg;
    var dmg2;
    var dmg3;
    var dmgp=0;
    var a ;
    var b ;
    var c ;
    var d ;

    function poczotkowe(){
    a = kostka_6()+Bohaterowie[druzyna.bohaterowie[0]].bieglosc+Bohaterowie[druzyna.bohaterowie[0]].zdolonosc;
    b = kostka_6()+Bohaterowie[druzyna.bohaterowie[1]].bieglosc+Bohaterowie[druzyna.bohaterowie[1]].zdolonosc;
    c = kostka_6()+Bohaterowie[druzyna.bohaterowie[2]].bieglosc+Bohaterowie[druzyna.bohaterowie[2]].zdolonosc;
    d = kostka_6();
    console.log("początkowe" ,a);
    console.log("początkowe" ,b);
    console.log("początkowe" ,c);
    }
function atak(){
    var w_ataku=0;
    if (Bohaterowie[druzyna.bohaterowie[0]].bron=="sztylet" ){
        if(a==1 || a==2 || a==3 || a==4 ){
            w_ataku=0;
            dmg=a+w_ataku;
            console.log("atak bohaterów " ,dmg);
        }
        else if(a==5 || a==6 || a==7 || a==8 || a==9 || a==10){
            w_ataku=1;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==11 || a==12 || a==13){
            w_ataku=2;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==14 || a==15){
            w_ataku=3;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==16 || a==17){
            w_ataku=4;
            dmg=a+w_ataku;
            console.log(dmg);
        }
    }
    else if (Bohaterowie[druzyna.bohaterowie[0]].bron="nóż"){
        if(a==1 || a==2 || a==3 || a==4 || a==5){
            w_ataku=0;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==6 || a==7 || a==8 || a==9 || a==10 || a==11 ){
            w_ataku=1;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==12 || a==13 || a==14){
            w_ataku=2;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==15 || a==16){
            w_ataku=3;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==17){
            w_ataku=4;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[0]].bron="łuk"){
        if(a==1 || a==2 || a==3 || a==4){
            w_ataku=0;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==5 || a==6 || a==7 || a==8 || a==9 || a==10){
            w_ataku=1;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==11 || a==12 || a==13){
            w_ataku=2;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==14 || a==15){
            w_ataku=3;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==16 || a==17){
            w_ataku=4;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[0]].bron="miecz"){
        if(a==1 || a==2 || a==3){
            w_ataku=0;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==4 || a==5 || a==6 || a==7 || a==8 || a==9){
            w_ataku=1;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==10 || a==11 || a==12){
            w_ataku=2;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==13 || a==14){
            w_ataku=3;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==15 || a==16){
            w_ataku=4;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==17){
            w_ataku=5;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[0]].bron="młot"){
        if(a==1 || a==2 || a==3){
            w_ataku=0;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==4 || a==5 || a==6 || a==7 || a==8 || a==9){
            w_ataku=1;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==10 || a==11){
            w_ataku=2;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==12 || a==13){
            w_ataku=3;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==13 || a==14){
            w_ataku=4;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==16 || a==17){
            w_ataku=5;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[0]].bron="topór"){
        if(a==1 || a==2 || a==3){
            w_ataku=0;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==4 || a==5 || a==6 || a==7 || a==8 || a==9){
            w_ataku=1;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==10 || a==11 || a==12){
            w_ataku=2;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==13){
            w_ataku=3;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==14 || a==15){
            w_ataku=4;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        else if(a==16 || a==17){
            w_ataku=5;
            dmg=a+w_ataku;
            console.log(dmg);
        }
        
    }

    



    if (Bohaterowie[druzyna.bohaterowie[1]].bron=="sztylet"){
        if(b==1 || b==2 || b==3 || b==4 ){
            w_ataku=0;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==5 || b==6 || b==7 || b==8 || b==9 || b==10){
            w_ataku=1;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==11 || b==12 || b==13){
            w_ataku=2;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==14 || b==15){
            w_ataku=3;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==16 || b==17){
            w_ataku=4;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
    }
    else if (Bohaterowie[druzyna.bohaterowie[1]].bron="nóż"){
        if(b==1 || b==2 || b==3 || b==4 || b==5){
            w_ataku=0;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==6 || b==7 || b==8 || b==9 || b==10 || b==11 ){
            w_ataku=1;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==12 || b==13 || b==14){
            w_ataku=2;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==15 || b==16){
            w_ataku=3;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==17){
            w_ataku=4;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[1]].bron="łuk"){
        if(b==1 || b==2 || b==3 || b==4){
            w_ataku=0;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==5 || b==6 || b==7 || b==8 || b==9 || b==10){
            w_ataku=1;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==11 || b==12 || b==13){
            w_ataku=2;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==14 || b==15){
            w_ataku=3;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==16 || b==17){
            w_ataku=4;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[1]].bron="miecz"){
        if(b==1 || b==2 || b==3){
            w_ataku=0;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==4 || b==5 || b==6 || b==7 || b==8 || b==9){
            w_ataku=1;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==10 || b==11 || b==12){
            w_ataku=2;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==13 || b==14){
            w_ataku=3;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==15 || b==16){
            w_ataku=4;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==17){
            w_ataku=5;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[1]].bron="młot"){
        if(b==1 || b==2 || b==3){
            w_ataku=0;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==4 || b==5 || b==6 || b==7 || b==8 || b==9){
            w_ataku=1;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==10 || b==11){
            w_ataku=2;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==12 || b==13){
            w_ataku=3;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==13 || b==14){
            w_ataku=4;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==16 || b==17){
            w_ataku=5;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[1]].bron="topór"){
        if(b==1 || b==2 || b==3){
            w_ataku=0;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==4 || b==5 || b==6 || b==7 || b==8 || b==9){
            w_ataku=1;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==10 || b==11 || b==12){
            w_ataku=2;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==13){
            w_ataku=3;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==14 || b==15){
            w_ataku=4;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        else if(b==16 || b==17){
            w_ataku=5;
            dmg2=b+w_ataku;
            console.log(dmg2);
        }
        
    }




    if (Bohaterowie[druzyna.bohaterowie[2]].bron=="sztylet"){
        if(c==1 || c==2 || c==3 || c==4 ){
            w_ataku=0;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==5 || c==6 || c==7 || c==8 || c==9 || c==10){
            w_ataku=1;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==11 || c==12 || c==13){
            w_ataku=2;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==14 || c==15){
            w_ataku=3;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==16 || c==17){
            w_ataku=4;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
    }
    else if (Bohaterowie[druzyna.bohaterowie[2]].bron="nóż"){
        if(c==1 || c==2 || c==3 || c==4 || c==5){
            w_ataku=0;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==6 || c==7 || c==8 || c==9 || c==10 || c==11 ){
            w_ataku=1;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==12 || c==13 || c==14){
            w_ataku=2;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==15 || c==16){
            w_ataku=3;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==17){
            w_ataku=4;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[2]].bron="łuk"){
        if(c==1 || c==2 || c==3 || c==4){
            w_ataku=0;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==5 || c==6 || c==7 || c==8 || c==9 || c==10){
            w_ataku=1;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==11 || c==12 || c==13){
            w_ataku=2;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==14 || c==15){
            w_ataku=3;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==16 || c==17){
            w_ataku=4;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[2]].bron="miecz"){
        if(c==1 || c==2 || c==3){
            w_ataku=0;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==4 || c==5 || c==6 || c==7 || c==8 || c==9){
            w_ataku=1;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==10 || c==11 || c==12){
            w_ataku=2;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==13 || c==14){
            w_ataku=3;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==15 || c==16){
            w_ataku=4;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==17){
            w_ataku=5;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[2]].bron="młot"){
        if(c==1 || c==2 || c==3){
            w_ataku=0;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==4 || c==5 || c==6 || c==7 || c==8 || c==9){
            w_ataku=1;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==10 || c==11){
            w_ataku=2;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==12 || c==13){
            w_ataku=3;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==13 || c==14){
            w_ataku=4;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==16 || c==17){
            w_ataku=5;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        
    }
    else if (Bohaterowie[druzyna.bohaterowie[1]].bron="topór"){
        if(c==1 || c==2 || c==3){
            w_ataku=0;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==4 || c==5 || c==6 || c==7 || c==8 || c==9){
            w_ataku=1;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==10 || c==11 || c==12){
            w_ataku=2;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==13){
            w_ataku=3;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==14 || c==15){
            w_ataku=4;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        else if(c==16 || c==17){
            w_ataku=5;
            dmg3=c+w_ataku;
            console.log(dmg3);
        }
        
    }


        if(d==0 || d==1){
            d=0;
            dmgp+=d;
        }
        else if(d==2){
            d=1;
            dmgp+=d;
        }
        else if(d==3){
            d=2;
            dmgp+=d;
        }
        else if(d==4){
            d=3;
            dmgp+=d;
        }
        else if(d==5){
            d=4;
            dmgp+=d;
        }
        else if(d==6){
            d=5;
            dmgp+=d;
        }
        
}


function losowanie_bohaterow() {
    var x = Math.floor(Math.random() * 22);
     druzyna.bohaterowie[0]=x;
     console.log(Bohaterowie[druzyna.bohaterowie[0]]);
      var y = Math.floor(Math.random() * 22);
      while (y==x){
          var y = Math.floor(Math.random() * 22);
      }
      druzyna.bohaterowie[1]=y;
      console.log(Bohaterowie[druzyna.bohaterowie[1]]);
      var z = Math.floor(Math.random() * 22);
      while (z==x || z==y){
          var z = Math.floor(Math.random() * 22);
      }
      druzyna.bohaterowie[2]=z;
      console.log(Bohaterowie[druzyna.bohaterowie[2]]);
      napisz("Wylosowano bohaterów!","System");
      dominSlonce();
      document.getElementById("bohaterowie").innerHTML="<div id='druzyna'><table><tr><td><img class='bohater_jpg' src="+Bohaterowie[druzyna.bohaterowie[0]].jpg
      +"></img></td><td><img class='bohater_jpg' src="+Bohaterowie[druzyna.bohaterowie[1]].jpg+"></img></td><td><img class='bohater_jpg' src="
      +Bohaterowie[druzyna.bohaterowie[2]].jpg+"></img></td></tr><tr id='opis_bohaterow'><td class='opis_bohaterow'>"+"Imię: "+Bohaterowie[druzyna.bohaterowie[0]].imie+"<br>"+"HP: "+Bohaterowie[druzyna.bohaterowie[0]].hp+"<br>"+"Rasa: "+Bohaterowie[druzyna.bohaterowie[1]].rasa+
      "<br>"+"Siła: "+Bohaterowie[druzyna.bohaterowie[0]].sila+"<br>"+"Odporność: "+Bohaterowie[druzyna.bohaterowie[0]].odpornosc+"<br>"+"Zreczność: "+Bohaterowie[druzyna.bohaterowie[0]].zrecznosc+
      "<br>"+"Broń: "+Bohaterowie[druzyna.bohaterowie[0]].bron+"<br>"+"Biegłość: "+Bohaterowie[druzyna.bohaterowie[0]].bieglosc+
     "<br>"+"Zdoloność: "+Bohaterowie[druzyna.bohaterowie[0]].zdolonosc+"<br>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+"</td><td class='opis_bohaterow'>Imię: "
      +Bohaterowie[druzyna.bohaterowie[1]].imie+"<br>"+"HP: "+Bohaterowie[druzyna.bohaterowie[1]].hp+"<br>"+"Rasa: "+Bohaterowie[druzyna.bohaterowie[1]].rasa+
      "<br>"+"Siła: "+Bohaterowie[druzyna.bohaterowie[1]].sila+"<br>"+"Odporność: "+Bohaterowie[druzyna.bohaterowie[1]].odpornosc+"<br>"+"Zreczność: "+Bohaterowie[druzyna.bohaterowie[1]].zrecznosc+
      "<br>"+"Broń: "+Bohaterowie[druzyna.bohaterowie[1]].bron+"<br>"+"Biegłość: "+Bohaterowie[druzyna.bohaterowie[1]].bieglosc+
      "<br>"+"Zdoloność: "+Bohaterowie[druzyna.bohaterowie[1]].zdolonosc+"<br>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+"</td><td class='opis_bohaterow'>Imię: "+Bohaterowie[druzyna.bohaterowie[2]].imie+"<br>"+"HP: "+Bohaterowie[druzyna.bohaterowie[2]].hp+"<br>"+"Rasa: "+Bohaterowie[druzyna.bohaterowie[2]].rasa
      +"<br>"+"Siła: "+Bohaterowie[druzyna.bohaterowie[2]].sila+"<br>"+"Odporność: "+Bohaterowie[druzyna.bohaterowie[2]].odpornosc+"<br>"+"Zreczność: "+Bohaterowie[druzyna.bohaterowie[2]].zrecznosc+
      "<br>"+"Broń: "+Bohaterowie[druzyna.bohaterowie[2]].bron+"<br>"+"Biegłość: "+Bohaterowie[druzyna.bohaterowie[2]].bieglosc+
      "<br>"+"Zdoloność: "+Bohaterowie[druzyna.bohaterowie[2]].zdolonosc+"<br>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow+"</td></tr></table></div>";

      document.getElementById("bohaterowieWalka").innerHTML="<table><tr><td><img class='bohater_jpg' src="+Bohaterowie[druzyna.bohaterowie[0]].jpg
      +"></img></td><td><img class='bohater_jpg' src="+Bohaterowie[druzyna.bohaterowie[1]].jpg+"></img></td><td><img class='bohater_jpg' src="+Bohaterowie[druzyna.bohaterowie[2]].jpg
      +"></img></td></tr></table>";
      document.getElementById("losuj").style.display="none";

      hp=Bohaterowie[druzyna.bohaterowie[0]].hp;
      hp1=Bohaterowie[druzyna.bohaterowie[1]].hp;
      hp2=Bohaterowie[druzyna.bohaterowie[2]].hp;

      document.getElementById("hp").innerHTML=hp;
      document.getElementById("hp1").innerHTML=hp1;
      document.getElementById("hp2").innerHTML=hp2;
      poczotkowe();
  }

  function potworyyy(x,y){
    druzyna.potwory[0]=x;
    druzyna.potwory[1]=x;
    druzyna.potwory[2]=x;
    document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
    "></img></td></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";

    hpP=potwory[druzyna.potwory[0]].hp;
    hpP1=potwory[druzyna.potwory[1]].hp;
    hpP2=potwory[druzyna.potwory[2]].hp;

    document.getElementById("hpP").innerHTML=hpP;
    document.getElementById("hpP1").innerHTML=hpP1;
    document.getElementById("hpP2").innerHTML=hpP2;

    

    napisz(y,"Walka");
  }

function potworyy(){
    isWalka=true;
    hideContents();
    document.getElementById("contentWalka").style.display="block";
    var x = kostka_6();
    var y = kostka_6();
    if(x==1 ){
        if(y==1){
        potworyyy(0,"Pojawili się Bezimienni");
    }
        else if(y==2){
            potworyyy(10,"Pojawiły się Meduzy");
        }
        else if(y==3){
            potworyyy(9,"Pojawiły się Kronki");
        }
        else if(y==4){
            potworyyy(5,"Pojawiły się Gargoyle");
        }
        else if(y==5){
            potworyyy(1,"Pojawiły się Chimery");
        }
        else if(y==6 ){
            potworyyy(10,"Pojawiły się Meduzy");
        }
    }
    
    else if(x==2 ){
        if(y==1){
            potworyyy(13,"Pojawiły się Orki");
        }
        else if(y==2){
            potworyyy(14,"Pojawiły się Trole");
        }
        else if(y==3){
            potworyyy(16,"Pojawiły się Wampiry");
        }
        else if(y==4){
            potworyyy(6,"Pojawiły się Harpie");
        }
        else if(y==5){
            potworyyy(12,"Pojawiły się Ogry");
        }
        else if(y==6){
            potworyyy(11,"Pojawiły się Minotaury");
        }
    }
    else if(x==3 ){
        if(y==1){
            potworyyy(18,"Pojawiły się Wilkołaki");
        }
        else if(y==2){
            potworyyy(15,"Pojawiły się Upiory");
        }
        else if(y==3){
            potworyyy(17,"Pojawiły się Wargowie");
        }
        else if(y==4){
            potworyyy(2,"Pojawiły się Czarnoksieżnicy");
        }
        else if(y==5){
            potworyyy(3,"Pojawiłi się Czarni Rycerze");
        }
        else if(y==6){
            potworyyy(9,"Pojawiły się Kronki");
        }
    }
    else if(x==4){
        if(y==1){
            potworyyy(5,"Pojawiły się Gargoyle");
        }
        else if(y==2){
            potworyyy(1,"Pojawiły się Chimery");
        }
        else if(y==3){
            potworyyy(3,"Pojawili się Czarni Rycerze");
        }
        else if(y==4){
            potworyyy(13,"Pojawiły się Orki");
        }
        else if(y==5){
            potworyyy(7,"Pojawiły się Hydry");
        }
        else if(y==6){
            potworyyy(16,"Pojawiły się Wampiry");
        }
    }
    else if(x==5 ){
        if(y==1){
            potworyyy(6,"Pojawiły się Harpie");
        }
        else if(y==2){
            potworyyy(12,"Pojawiły się Ogry");
        }
        else if(y==3){
            potworyyy(19,"Pojawiły się Złe duchy");
        }
        else if(y==4){
            potworyyy(18,"Pojawiły się Wilkołaki");
        }
        else if(y==5){
            potworyyy(15,"Pojawiły się Upiory");
        }
        else if(y==6){
            potworyyy(16,"Pojawili się Wargowie");
        }
    }
    else if(x==6){
        if(y==1){
            potworyyy(8,"Pojawiły się Kościotrupy");
        }
        else if(y==2){
            potworyyy(11,"Pojawiły się Minotaury");
        }
        else if(y==3){
            potworyyy(8,"Pojawiły się Kościotrupy");
        }
        else if(y==4){
            potworyyy(14,"Pojawiły się Trolle");
        }
        else if(y==5){
            potworyyy(19,"Pojawiły się Złe duchy");
        }
        else if(y==6){
            potworyyy(7,"Pojawiły się Hydry");
        }
    }
}
function spotkanieZpotworem(){
    var x = kostka_6();
    if(x==1 || x==2 || x==3){
        document.getElementById("atacc").classList.remove("button_disabled");
        document.getElementById("nego").classList.remove("button_disabled");
        document.getElementById("spell1").disabled=false;
        document.getElementById("spell2").disabled=false;
        document.getElementById("spell3").disabled=false;
        document.getElementById("czaruj1").classList.remove("button_disabled");
        document.getElementById("czaruj2").classList.remove("button_disabled");
        document.getElementById("czaruj3").classList.remove("button_disabled");
        potworyy();
    }
    else{
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
    }
}
  
  var druzyna={
    bohaterowie:[23,23,23],
    pomocnicy:[23,23,23],
    potwory:[23,23,23],
        show:function(){
        document.getElementById("contentDruzyna").style.display="block";
    }
}
var komunikaty={
    show:function(){
        document.getElementById("contentKomunikaty").style.display="block";
    }
}
var czynosci={
    show:function(){
        document.getElementById("contentCzynosci").style.display="block";
    }
}
var walka={
    show:function(){
        document.getElementById("contentWalka").style.display="block";
    }
}

var menu={
    show:function(){
        document.getElementById("titlescreen").style.display="block";
    }
}
function wybor_czaru(){
    if (isWalka==false)napisz("Nie masz na kogo rzucić czaru!","System");
    else{
    const select = document.querySelector('select[name="Czary1"]');
    var x=select.value;
    var g=document.getElementById("mana1").innerHTML;
    if(g>0){
    if(x==1){
        document.getElementById("mana1").innerHTML-=czary[1].koszt;
        document.getElementById("hpP").innerHTML-=czary[1].dmg;
    }
    else if(x==2){
        document.getElementById("mana1").innerHTML-=czary[2].koszt;
        document.getElementById("hpP").innerHTML-=czary[2].dmg;
        document.getElementById("hpP1").innerHTML-=czary[2].dmg;
        document.getElementById("hpP2").innerHTML-=czary[2].dmg;
    }
    else if(x==3){
        document.getElementById("mana1").innerHTML-=czary[3].koszt;
        document.getElementById("hpP").innerHTML-=czary[3].dmg;
    }
    else if(x==4){
        document.getElementById("mana1").innerHTML-=czary[4].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
    }
    else if(x==5){
        document.getElementById("mana1").innerHTML-=czary[5].koszt;
        document.getElementById("hpP").innerHTML-=czary[5].dmg;
    }
    else if(x==6){
        document.getElementById("mana1").innerHTML-=czary[6].koszt;
    }
    else if(x==7){
        document.getElementById("mana1").innerHTML-=czary[7].koszt;
        document.getElementById("hp").innerHTML+=czary[7].hp;
    }
    else if(x==8){
        document.getElementById("mana1").innerHTML-=czary[8].koszt;
        document.getElementById("hp").innerHTML+=czary[8].hp;
    }
    else if(x==9){
        document.getElementById("mana1").innerHTML-=czary[9].koszt;
        z+=4;
    }
    else if(x==10){
        isWalka=false;
        document.getElementById("mana1").innerHTML-=czary[10].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    else if(x==11){
        isWalka=false;
        document.getElementById("mana1").innerHTML-=czary[11].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    else if(x==12){
        document.getElementById("mana1").innerHTML-=czary[12].koszt;
        document.getElementById("hp").innerHTML-=czary[12].dmg;

    }
    else if(x==13){
        document.getElementById("mana1").innerHTML-=czary[13].koszt;
        var a= document.getElementById("hp").innerHTML;
        var b= document.getElementById("hp1").innerHTML;
        var c= document.getElementById("hp2").innerHTML;
        if(a<=0){
        document.getElementById("hp").innerHTML-=czary[12].hp;
        }
        else if(b<=0){
            document.getElementById("hp1").innerHTML-=czary[12].hp;
            }
        else if(c<=0){
                document.getElementById("hp2").innerHTML-=czary[12].hp;
                }
        else{
            napisz("Nie masz kogo wskrzesić!","Czary");
        }
    }
}
else{
    napisz("Nie masz wystarczająco dużo many!","Czary");
}
    }

}
function wybor_czaru2(){
    if (isWalka==false)napisz("Nie masz na kogo rzucić czaru!","System");
    else{
    const select = document.querySelector('select[name="Czary2"]');
    var z=select.value;
    console.log(z);
    var g=document.getElementById("mana2").innerHTML;
    if(g>0){
    if(z==1){
        document.getElementById("mana2").innerHTML-=czary[1].koszt;
        document.getElementById("hpP1").innerHTML-=czary[1].dmg;
    }
    else if(z==2){
        document.getElementById("mana2").innerHTML-=czary[2].koszt;
        document.getElementById("hpP").innerHTML-=czary[2].dmg;
        document.getElementById("hpP1").innerHTML-=czary[2].dmg;
        document.getElementById("hpP2").innerHTML-=czary[2].dmg;
    }
    else if(z==3){
        document.getElementById("mana2").innerHTML-=czary[3].koszt;
        document.getElementById("hpP1").innerHTML-=czary[3].dmg;
    }
    else if(z==4){
        document.getElementById("mana2").innerHTML-=czary[4].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
    }
    else if(z==5){
        document.getElementById("mana2").innerHTML-=czary[5].koszt;
        document.getElementById("hpP1").innerHTML-=czary[5].dmg;
    }
    else if(z==6){
        document.getElementById("mana2").innerHTML-=czary[6].koszt;
    }
    else if(z==7){
        document.getElementById("mana2").innerHTML-=czary[7].koszt;
        document.getElementById("hp1").innerHTML+=czary[7].hp;
    }
    else if(z==8){
        document.getElementById("mana2").innerHTML-=czary[8].koszt;
        document.getElementById("hp1").innerHTML+=czary[8].hp;
    }
    else if(z==9){
        document.getElementById("mana2").innerHTML-=czary[9].koszt;
        z+=4;
    }
    else if(z==10){
        isWalka=false;
        document.getElementById("mana2").innerHTML-=czary[10].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    else if(z==11){
        isWalka=false;
        document.getElementById("mana2").innerHTML-=czary[11].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    else if(z==12){
        document.getElementById("mana2").innerHTML-=czary[12].koszt;
        document.getElementById("hp1").innerHTML-=czary[12].dmg;

    }
    else if(z==13){
        document.getElementById("mana2").innerHTML-=czary[13].koszt;
        var a= document.getElementById("hp").innerHTML;
        var b= document.getElementById("hp1").innerHTML;
        var c= document.getElementById("hp2").innerHTML;
        if(a<=0){
        document.getElementById("hp").innerHTML-=czary[12].hp;
        }
        else if(b<=0){
            document.getElementById("hp1").innerHTML-=czary[12].hp;
            }
        else if(c<=0){
                document.getElementById("hp2").innerHTML-=czary[12].hp;
                }
        else{
            napisz("Nie masz kogo wskrzesić!","Czary");
        }
    }
}
else{
    napisz("Nie masz wystarczająco dużo many!","Czary");
}
    }

}
function wybor_czaru3(){
    if (isWalka==false)napisz("Nie masz na kogo rzucić czaru!","System");
    else{
    const select = document.querySelector('select[name="Czary3"]');
    var c =select.value;
    console.log(c);
    var g=document.getElementById("mana3").innerHTML;
    if(g>0){
    if(c==1){
        document.getElementById("mana3").innerHTML-=czary[1].koszt;
        document.getElementById("hpP2").innerHTML-=czary[1].dmg;
    }
    else if(c==2){
        document.getElementById("mana3").innerHTML-=czary[2].koszt;
        document.getElementById("hpP").innerHTML-=czary[2].dmg;
        document.getElementById("hpP1").innerHTML-=czary[2].dmg;
        document.getElementById("hpP2").innerHTML-=czary[2].dmg;
    }
    else if(c==3){
        document.getElementById("mana3").innerHTML-=czary[3].koszt;
        document.getElementById("hpP2").innerHTML-=czary[3].dmg;
    }
    else if(c==4){
        document.getElementById("mana3").innerHTML-=czary[4].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
    }
    else if(c==5){
        document.getElementById("mana3").innerHTML-=czary[5].koszt;
        document.getElementById("hpP2").innerHTML-=czary[5].dmg;
    }
    else if(c==6){
        document.getElementById("mana3").innerHTML-=czary[6].koszt;
    }
    else if(c==7){
        document.getElementById("mana3").innerHTML-=czary[7].koszt;
        document.getElementById("hp2").innerHTML+=czary[7].hp;
    }
    else if(c==8){
        document.getElementById("mana3").innerHTML-=czary[8].koszt;
        document.getElementById("hp2").innerHTML+=czary[8].hp;
    }
    else if(c==9){
        document.getElementById("mana3").innerHTML-=czary[9].koszt;
        z+=4;
    }
    else if(c==10){
        isWalka=false;
        document.getElementById("mana3").innerHTML-=czary[10].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    else if(c==11){
        isWalka=false;
        document.getElementById("mana3").innerHTML-=czary[11].koszt;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    else if(c==12){
        document.getElementById("mana3").innerHTML-=czary[12].koszt;
        document.getElementById("hp2").innerHTML-=czary[12].dmg;

    }
    else if(c==13){
        document.getElementById("mana3").innerHTML-=czary[13].koszt;
        var a= document.getElementById("hp").innerHTML;
        var b= document.getElementById("hp1").innerHTML;
        var c= document.getElementById("hp2").innerHTML;
        if(a<=0){
        document.getElementById("hp").innerHTML-=czary[12].hp;
        }
        else if(b<=0){
            document.getElementById("hp1").innerHTML-=czary[12].hp;
            }
        else if(c<=0){
                document.getElementById("hp2").innerHTML-=czary[12].hp;
                }
        else{
            napisz("Nie masz kogo wskrzesić!","Czary");
        }
    }
}
else{
    napisz("Nie masz wystarczająco dużo many!","Czary");
}
    }
}
function napisz(tekst,dzial){
    document.getElementById("contentKomunikaty").innerHTML+=czas()+" ["+dzial+"] "+tekst+"<br>";
    function odkryj() {
        var op = 0.1;  
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            document.getElementById("toastKomunikaty").style.display = 'block';
            document.getElementById("toastKomunikaty").innerHTML="["+dzial+"] "+tekst;
            document.getElementById("toastKomunikaty").style.opacity = op;
            document.getElementById("toastKomunikaty").style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 30);
    };
    function zakryj() {
        var op = 1;  
        var timer = setInterval(function () {
            if (op <= 0.01){
                clearInterval(timer);
                document.getElementById("toastKomunikaty").style.display = 'none';
            }
            document.getElementById("toastKomunikaty").style.opacity = op;
            document.getElementById("toastKomunikaty").style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 30);
    
}   
    odkryj();
    setTimeout(zakryj, 5000);
}
function kostka_6() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
  }
function kostka_3() {
    var x = Math.floor((Math.random() * 3) + 1);
    return x;
}
function kostka_5() {
    var x = Math.floor((Math.random() * 5) + 1);
    return x;
}
function kostka_2() {
    var x = Math.floor((Math.random() * 2) + 1);
    return x;
}
function kostka_4() {
    var x = Math.floor((Math.random() * 4) + 1);
    return x;
}


function znaleziona_fontanna(){
    var x = kostka_5();
    if(x==1){
        
        let postac = kostka_3();
        let moc = kostka_3();
        if (postac==1) {
            hp-=moc;
            document.getElementById("hp").innerHTML=hp;
        }
        else if (postac==2) {
            hp1-=moc;
            document.getElementById("hp1").innerHTML=hp1;
        }
        else {
            hp2-=moc;
            document.getElementById("hp2").innerHTML=hp2;
        }
        napisz("Znalazłeś truciznę: odebrano "+moc+" punktów życia postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Fontanna");
    }
    else if(x==2){
        console.log("mikstura")
        let rodzaj=kostka_3();
        let postac=kostka_3();
        if (rodzaj==1){ //mikstura trucizny
            let moc = kostka_3();
            if (postac==1) {
                hp-=moc;
                document.getElementById("hp").innerHTML=hp;
            }
            else if (postac==2) {
                hp1-=moc;
                document.getElementById("hp1").innerHTML=hp1;
            }
            else {
                hp2-=moc;
                document.getElementById("hp2").innerHTML=hp2;
            }
            napisz("Znalazłeś miksturę trucizny: odebrano "+moc+" punktów życia postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Fontanna");
        }
        else{ //mikstura uzdrowienia
            let moc = kostka_6();
            if (postac==1) {
                hp+=moc;
                document.getElementById("hp").innerHTML=hp;
            }
            else if (postac==2) {
                hp1+=moc;
                document.getElementById("hp1").innerHTML=hp1;
            }
            else {
                hp2+=moc;
                document.getElementById("hp2").innerHTML=hp2;
            }
            napisz("Znalazłeś miksturę uzdrowienia: dodano "+moc+" punktów życia postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Fontanna");
        }
    }
    else if(x==3){
        let postac=kostka_3();
        Bohaterowie[druzyna.bohaterowie[postac-1]].zrecznosc-=2;
        napisz("Znalazłeś alkohol: odebrano 2 punkty zręczności postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Fontanna");
    }
    else if(x==4){
        napisz("Znalazłeś wodę: brak efektów","Fontanna");
    }
    else{
        let postac=kostka_3();
        Bohaterowie[druzyna.bohaterowie[postac-1]].zrecznosc-=1;
        napisz("Znalazłeś krew: odebrano 1 punkt zręczności postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Fontanna");
    }
};

function s_fontanna(){
    if(map[mapCounter][player_y][player_x]==4){
        znaleziona_fontanna()
    }

}

function s_posag(){
    if(map[mapCounter][player_y][player_x]==6){
        znaleziona_posag()
    }

}
var slonce = 0; //1-czerwone, 2-zolte, 3-niebieskie

function dominSlonce(){
    var x = kostka_6();
    if(x==1 || x==2){
        Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[0]].PMC;
        Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[1]].PMC;
        Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[2]].PMC;
        //document.getElementById("bohaterowie2").innerHTML="<table><tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+
        //"</tr> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+"</tr>"+
        //"&nbsp &nbsp &nbsp <tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+"</tr></table>";
        document.getElementById("mana1").innerHTML=Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow;
        document.getElementById("mana2").innerHTML=Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow;
        document.getElementById("mana3").innerHTML=Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow;
        slonce = 1;
    }
    else if(x==3 || x==4){
        Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[0]].PMZ;
        Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[1]].PMZ;
        Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[2]].PMZ;
        //document.getElementById("bohaterowie2").innerHTML="<table><tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+
        //"</tr> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+"</tr>"+
        //"&nbsp &nbsp &nbsp <tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+"</tr></table>";
        document.getElementById("mana1").innerHTML=Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow;
        document.getElementById("mana2").innerHTML=Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow;
        document.getElementById("mana3").innerHTML=Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow;
        slonce = 2;
    }
    else if(x==4 || x==5 || x==6){
        Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[0]].PMN;
        Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[1]].PMN;
        Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow+=Bohaterowie[druzyna.bohaterowie[2]].PMN;
        //document.getElementById("bohaterowie2").innerHTML="<table><tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+
        //"</tr> &nbsp &nbsp  <tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow+"</tr>"+
        //"&nbsp &nbsp &nbsp <tr>"+"Ilość czarów: "+Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow+"</tr></table>";
        document.getElementById("mana1").innerHTML=Bohaterowie[druzyna.bohaterowie[0]].ilosc_czarow;
        document.getElementById("mana2").innerHTML=Bohaterowie[druzyna.bohaterowie[1]].ilosc_czarow;
        document.getElementById("mana3").innerHTML=Bohaterowie[druzyna.bohaterowie[2]].ilosc_czarow;
        slonce = 3;
    }
}

function znaleziona_posag(){
    var x = kostka_2();
    if(x==1){
        let rodzaj=kostka_2();
        let postac=kostka_3();
        if(rodzaj==1){ //dusiciel
            if (postac==1) hp-=5;
            else if (postac==2) hp1-=5;
            else hp2-=5;
            napisz("Znalazłeś medalion dusiciela: odebrano 5 punktów życia postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Posąg");
        }
        else{
            if (postac==1) hp+=2;
            else if (postac==2) hp1+=2;
            else hp2+=2;
            napisz("Znalazłeś medalion uzdrowienia: dodano 2 punkty życia postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Posąg");
        }
    }
    else{
        let rodzaj=kostka_4(); //1-czerwone, 2-zolte, 3-niebieskie, 4-wszystkie
        let postac=kostka_3();
        if (rodzaj==1 && slonce==1){
            let moc=kostka_3();
            Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow+=moc;
            document.getElementById("mana"+postac).innerHTML=Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow;
            napisz("Znalazłeś talizman czerwonego słońca: dodano "+moc+" punktów many postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Posąg");
        }
        else if (rodzaj==2 && slonce==2){
            let moc=kostka_3();
            Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow+=moc;
            document.getElementById("mana"+postac).innerHTML=Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow;
            napisz("Znalazłeś talizman żółtego słońca: dodano "+moc+" punktów many postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Posąg");
        }
        else if (rodzaj==3 && slonce==3){
            let moc=kostka_3();
            Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow+=moc;
            document.getElementById("mana"+postac).innerHTML=Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow;
            napisz("Znalazłeś talizman niebieskiego słońca: dodano "+moc+" punktów many postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Posąg");
        }
        else if (rodzaj==4){
            let moc=kostka_3();
            Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow+=moc;
            document.getElementById("mana"+postac).innerHTML=Bohaterowie[druzyna.bohaterowie[postac-1]].ilosc_czarow;
            napisz("Znalazłeś talizman wszystkich słońc: dodano "+moc+" punktów many postaci "+Bohaterowie[druzyna.bohaterowie[postac-1]].imie,"Posąg");
        }
    }
}
var z=0;
function negocjacie(){//TODO -1/4 skarbów potworty dają
    if(isWalka==true){
    var x = kostka_6();
    var y = kostka_6();
    var n=Bohaterowie[druzyna.bohaterowie[0]].negocjacie;
    var n1=Bohaterowie[druzyna.bohaterowie[1]].negocjacie;
    var n2=Bohaterowie[druzyna.bohaterowie[2]].negocjacie;
    var nn=potwory[druzyna.potwory[0]].niechec_do_negocjacji;

    var z=x+y+n+n1+n2-nn;
    console.log(z);
    if (z<=6) {
        napisz("Negocjacje nie powiodły się","Negocjacje");
    }
    else if(z==7 || z==8 || z==9) {
        
        
        isWalka=false;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do porozumienia","Negocjacje");
    }
    else{//TODO -1/4 skarbów potworty dają
        isWalka=false;
        druzyna.potwory[0]=20;
        druzyna.potwory[1]=20;
        druzyna.potwory[2]=20;
        document.getElementById("hpP").innerHTML="";
        document.getElementById("hpP1").innerHTML="";
        document.getElementById("hpP2").innerHTML="";
        document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
        "></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";
        napisz("Negocjacje powiodły się doszło do zastraszenia","Negocjacje");
    }
    }
else{
    napisz("Nie ma z kim negocjować","Negocjacje")
}
}
function czarneWrota(){
    druzyna.potwory[0]=4;
    druzyna.potwory[1]=21;
    druzyna.potwory[2]=0;
    document.getElementById("potworyWalka").innerHTML="<table><tr><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[0]].jpg+
    "></img></td></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[1]].jpg+"></img></td><td><img class='potwory_jpg' src="+potwory[druzyna.potwory[2]].jpg+"></img></td></tr></table>";

    hpP=potwory[druzyna.potwory[0]].hp;
    hpP1=potwory[druzyna.potwory[1]].hp;
    hpP2=potwory[druzyna.potwory[2]].hp;

    document.getElementById("hpP").innerHTML=hpP;
    document.getElementById("hpP1").innerHTML=hpP1;
    document.getElementById("hpP2").innerHTML=hpP2;
}

var czary={//TODO
    1:{
        nazwa:"wybuch",
        koszt:1,
        dmg:2
            },

    2:{//TODO wszytskich bije
        nazwa:"eksplozja",
        koszt:1,
        dmg:1
            },

    3:{
        nazwa:"blyskawica",
        koszt:2,
        dmg:2
            },

    4:{//TODO robi to co negocjacja 
        nazwa:"zawieszenie broni",
        koszt:3
            },

    5:{
        nazwa:"psychiczny_cios",
        koszt:4,
        dmg:2
            },

    6:{//TODO jeśli są mikstury
        nazwa:"sila",
        koszt:1
            },

    7:{//TODO na początku gry losujesz ile razy możesz użyć w czasie gry
        nazwa:"uzdrowienie",
        koszta:1,
        hp:5
            },

    8:{//TODO na początku gry losujesz ile razy możesz użyć w czasie gry
        nazwa:"odmlodzenie",
        koszt:2,
        hp:1
            },

    9:{//TODO pomaga negocjacja 
        nazwa:"elokwencja",
        koszt:1,
        negocjacie:4
            },

    10:{//TODO robi zastraszenie
        nazwa:"zastraszenie",
        koszt:2
            },

    11:{//TODO robi zastraszenie i oddają skarby
        nazwa:"zniechecenie",
        koszt:2
            },

    12:{//TODO jeśli masz manuskrypt
        nazwa:"gniew bozy",
        koszt:3,
        dmg:20
            },

    13:{//TODO jeśli masz pierścień wskrzeszenia
        nazwa:"wskrzeszenie",
        koszt:5,
        hp:100
            }
}

var potwory={
    0:{
        nazwa:"Bezimienny",
        hp:20,
        odpornosc:4,
        niechec_do_negocjacji:0,
        bron:"miecz",
        czary:"błyskawica",//Poprawa-to je czar
        skarb:"L",//Poprawa-to je skarb
        specjalne:"nie wiem co ty , patrz 16.0",//Poprawa-nie wiem co tu
        jpg:"img/potwory/bezimienny.png"
    },

    1:{
        nazwa:"Chimera",
        hp:20,
        odpornosc:2,
        niechec_do_negocjacji:7,
        skarb:"I",//Poprawa-to je skarb
        specjalne:"zianie ogniem",
        jpg:"img/potwory/chimera.png"
    },

    2:{
        nazwa:"Czarnoksieznik",
        hp:20,
        odpornosc:3,
        niechec_do_negocjacji:3,
        bron:"sztylet",
        czar:"błyskawica , magiczna tarcza",//Poprawa-to je czar
        skarb:"J/C",//Poprawa-to je skarb
        jpg:"img/potwory/czarnoksieznik.png"
    },

    3:{
        nazwa:"Czarny Rycerz",
        hp:20,
        odpornosc:2,
        niechec_do_negocjacji:5,
        bron:"+1K6 miecz",//Poprawa-nie wiem co tu
        skarb:"J/C",//Poprawa-to je skarb
        jpg:"img/potwory/czarny_rycerz.png"
    },

    4:{
        nazwa:"Demon",
        hp:20,
        odpornosc:4,
        niechec_do_negocjacji:0,
        skarb:"D",//Poprawa-to je skarb
        specjalne:"nie wiem co ty , patrz 16.0",//Poprawa-nie wiem co tu
        jpg:"img/potwory/demon.png"
    },

    5:{
        nazwa:"Gargoyla",
        hp:20,
        odpornosc:3,
        niechec_do_negocjacji:4,
        skarb:"G",//Poprawa-to je skarb
        jpg:"img/potwory/gargoyla.png"
    },

    6:{
        nazwa:"Harpia",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:5,
        skarb:"A",//Poprawa-to je skarb
        jpg:"img/potwory/harpia.png"
    },

    7:{
        nazwa:"Hydra",
        hp:20,
        odpornosc:3,
        niechec_do_negocjacji:7,
        skarb:"J",//Poprawa-to je skarb
        specjalne:"nie wiem co ty , patrz 15.6",//Poprawa-nie wiem co tu
        jpg:"img/potwory/hydra.png"
    },
    
    8:{
        nazwa:"Kosciotrup",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:9,
        skarb:"F/A",//Poprawa-to je skarb
        jpg:"img/potwory/kosciotrup.png"
    },

    9:{
        nazwa:"Kronk",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:9,
        skarb:"E/B",//Poprawa-to je skarb
        specjalne:"odor",
        jpg:"img/potwory/krunk.png"
    },

    10:{
        nazwa:"Meduza",
        hp:20,
        odpornosc:2,
        niechec_do_negocjacji:5,
        skarb:"G",//Poprawa-to je skarb
        specjalne:"zamienia w kamien",
        jpg:"img/potwory/meduza.png"
    },

    11:{
        nazwa:"Minotaur",
        hp:20,
        odpornosc:3,
        niechec_do_negocjacji:7,
        skarb:"J/C",//Poprawa-to je skarb
        jpg:"img/potwory/minotaur.png"
    },

    12:{
        nazwa:"Ogr",
        hp:20,
        odpornosc:2,
        niechec_do_negocjacji:2,
        bron:"mlot",
        skarb:"J/E",//Poprawa-to je skarb
        specjalne:"odor",
        jpg:"img/potwory/ogr.png"
    },

    13:{
        nazwa:"Ork",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:0,
        bron:"miecz",
        skarb:"H/B",//Poprawa-to je skarb
        jpg:"img/potwory/ork.png"
    },

    14:{
        nazwa:"Troll",
        hp:20,
        odpornosc:3,
        niechec_do_negocjacji:4,
        skarb:"J",//Poprawa-to je skarb
        specjalne:"regeneracja",
        jpg:"img/potwory/troll.png"
    },

    15:{
        nazwa:"Upior",
        hp:20,
        odpornosc:2,
        niechec_do_negocjacji:4,
        skarb:"H",//Poprawa-to je skarb
        jpg:"img/potwory/upior.png"
    },

    16:{
        nazwa:"Wampir",
        hp:20,
        odpornosc:4,
        niechec_do_negocjacji:6,
        skarb:"J",//Poprawa-to je skarb
        specjalne:"urok",
        jpg:"img/potwory/wampir.png"
    },

    17:{
        nazwa:"Warg",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:6,
        skarb:"A",//Poprawa-to je skarb
        jpg:"img/potwory/warg.png"
    },

    18:{
        nazwa:"Wilkołak",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:9,
        skarb:"A",//Poprawa-to je skarb
        jpg:"img/potwory/wilkolak.png"
    },

    19:{
        nazwa:"Zły duch",
        hp:20,
        odpornosc:1,
        niechec_do_negocjacji:2,
        skarb:"I/D",//Poprawa-to je skarb
        jpg:"img/potwory/zly_duch.png"
    },
    20:{
        jpg:"img/potwory/nic.png",
        hp:0
    },
    21:{
        nazwa:"Czarne wrota",
        hp:40,
        odpornosc:5,
        jpg:"img/potwory/czarna_brama.png"
    }
}
var Bohaterowie={
    0:{
        imie:"Almuryk",
        rasa:"człowiek",
        sila:8,
        PMC:1,
        PMZ:1,
        PMN:2,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:3,
        bron:"miecz",
        bieglosc:2,
        zdolonosc:1,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/almuryk.png"
    },
    1:{
        imie:"Alryk",
        rasa:"człowiek",
        sila:6,
        PMC:2,
        PMZ:3,
        PMN:4,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:0,
        bron:"nóż",
        zdolonosc:1,
        bieglosc:0,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/alryk.png"
    },

    2:{
        imie:"Curvenol",
        rasa:"człowiek",
        sila:5,
        PMC:5,
        PMZ:5,
        PMN:5,
        ilosc_czarow:0,
        odpornosc:1,
        zrecznosc:0,
        bron:"miecz",
        zdolonosc:2,
        bieglosc:0,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/curvenol.png"
    },

    3:{
        imie:"Dalmilandril",
        rasa:"elf",
        sila:5,
        PMC:3,
        PMZ:4,
        PMN:5,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:2,
        bron:"łuk",
        zdolonosc:0,
        bieglosc:2,
        negocjacie:2,
        hp:100,
        jpg:"img/bohaterowie/dalmilandril.png"
    },
    
    4:{
        imie:"Dierdra",
        rasa:"człowiek",
        sila:7,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:1,
        zrecznosc:4,
        bron:"łuk",
        bieglosc:1,
        zdolonosc:1,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/dierdra.png"
    },

    5:{
        imie:"Eodred",
        rasa:"człowiek",
        sila:6,
        PMC:3,
        PMZ:4,
        PMN:5,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:0,
        bron:"łuk",
        bieglosc:0,
        zdolonosc:2,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/eodered.png"
    },

    6:{
        imie:"Gerudirr",
        rasa:"krasnolud",
        sila:6,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:6,
        bron:"topór",
        bieglosc:3,
        zdolonosc:1,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/gerudirr.png"
    },

    7:{
        imie:"Gilith",
        rasa:"elf",
        sila:8,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:4,
        bron:"łuk",
        bieglosc:2,
        negocjacie:2,
        zdolonosc:0,
        hp:100,
        jpg:"img/bohaterowie/gilith.png"
    },

    8:{
        imie:"Gislan",
        rasa:"krasnolud",
        sila:10,
        PMC:4,
        PMZ:4,
        PMN:4,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:4,
        bron:"topór",
        bieglosc:2,
        zdolonosc:3,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/gislan.png"
    },

    9:{
        imie:"Gwaigilion",
        rasa:"elf",
        sila:7,
        PMC:4,
        PMZ:3,
        PMN:2,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:4,
        bron:"sztylet",
        bieglosc:2,
        zdolonosc:0,
        negocjacie:1,
        hp:100,
        jpg:"img/bohaterowie/gwaigilion.png"
    },

    10:{
        imie:"Larraka",
        rasa:"czlowiek",
        sila:5,
        PMC:6,
        PMZ:5,
        PMN:4,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:0,
        bron:"sztylet",
        zdolonosc:1,
        bieglosc:0,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/larraka.png"
    },

    11:{
        imie:"Linfalas",
        rasa:"elf",
        sila:9,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:5,
        bron:"łuk",
        bieglosc:2,
        zdolonosc:0,
        negocjacie:3,
        hp:100,
        jpg:"img/bohaterowie/linfalas.png"
    },

    12:{
        imie:"Lord Dil",
        rasa:"człowiek",
        sila:10,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:5,
        bron:"miecz",
        bieglosc:2,
        zdolonosc:2,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/lord_dil.png"
    },

    13:{
        imie:"Maytwist",
        rasa:"elf",
        sila:7,
        PMC:3,
        PMZ:3,
        PMN:3,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:0,
        bron:"łuk",
        bieglosc:2,
        zdolonosc:0,
        negocjacie:3,
        hp:100,
        jpg:"img/bohaterowie/maytwist.png"
    },

    14:{
        imie:"Paladyn Glade",
        rasa:"człowiek",
        sila:10,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:4,
        bron:"miecz",
        bieglosc:2,
        zdolonosc:2,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/paladyn_glade.png"
    },

    15:{
        imie:"Paladyn Stephen",
        rasa:"człowiek",
        sila:10,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:5,
        bron:"miecz",
        bieglosc:2,
        zdolonosc:2,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/paladyn_stephen.png"
    },

    16:{
        imie:"Raman",
        rasa:"pół-kronk",
        sila:9,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:3,
        zrecznosc:4,
        bron:"miecz",
        bieglosc:1,
        zdolonosc:1,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/raman.png"
    },

    17:{
        imie:"Sliggoth",
        rasa:"krasnolud",
        sila:8,
        PMC:1,
        PMZ:2,
        PMN:3,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:4,
        bron:"topór",
        bieglosc:1,
        zdolonosc:1,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/sliggoth.png"
    },

    18:{
        imie:"Theregond",
        rasa:"człowiek",
        sila:8,
        PMC:4,
        PMZ:3,
        PMN:2,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:1,
        bron:"miecz",
        bieglosc:3,
        zdolonosc:3,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/theregond.png"
    },

    19:{
        imie:"Weldron",
        rasa:"człowiek",
        sila:9,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:5,
        bron:"miecz",
        bieglosc:2,
        zdolonosc:3,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/weldron.png"
    },

    20:{
        imie:"Wendolyn",
        rasa:"człowiek",
        sila:7,
        PMC:4,
        PMZ:3,
        PMN:2,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:1,
        bron:"sztylet",
        bieglosc:2,
        zdolonosc:4,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/wendolyn.png"
    },

    21:{
        imie:"Zareth",
        rasa:"człowiek",
        sila:9,
        PMC:0,
        PMZ:0,
        PMN:0,
        ilosc_czarow:0,
        odpornosc:4,
        zrecznosc:4,
        bron:"miecz",
        bieglosc:1,
        zdolonosc:3,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/zareth.png"
    },

    22:{
        imie:"Zuryk",
        rasa:"krasnolud",
        sila:8,
        PMC:3,
        PMZ:4,
        PMN:5,
        ilosc_czarow:0,
        odpornosc:2,
        zrecznosc:3,
        bron:"topór",
        bieglosc:2,
        zdolonosc:3,
        negocjacie:0,
        hp:100,
        jpg:"img/bohaterowie/zuryk.png"
    }
}
function hideContents(){
    document.getElementById("contentDruzyna").style.display="none";
    document.getElementById("contentKomunikaty").style.display="none";
    document.getElementById("contentWalka").style.display="none";
}

//dodanie timestampa do komunikatów

function czas(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    if(m<10 && s<10) return h+":0"+m+":0"+s;
    else if (m<10) return h+":0"+m+":"+s;
    else if (s<10) return h+":"+m+":0"+s;
    else return h+":"+m+":"+s;

}


//autoscrollowanie listy komunikatów

 function scrollKomunikaty(){
     var i = document.getElementById("contentKomunikaty");
     i.scrollTop+=10;

 }
setInterval(scrollKomunikaty,10);

function ifPrzegrales(){
    if(hp==0 && hp1==0 && hp2==0){
        console.log("przegrałeś");
        window.open("przegrales.html");
        window.close();
     }
}