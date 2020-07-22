console.log("Change background color");
let i=0;

    function changebg()
    {
        let arrColor=['red','yellow','orange','green','blue'];
                document.body.style.backgroundColor=arrColor[i];
                alert("Change BgColor to:"+arrColor[i]);
                i=(i+1)%arrColor.length;
    }      
   setInterval(changebg,5000);