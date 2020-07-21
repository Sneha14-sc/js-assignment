console.log("-----------------------------------\nQuestion 3");

 
async function getapi()
{ 
    const response = await fetch("https://jsonplaceholder.typicode.com/photos"); 
    // Storing data in form of JSON 
    var data = await response.json(); 
    show(data); 
} 
getapi(); 
function show(data)
{ 
    let tab;
    var random = data[Math.floor(Math.random() *data.length)];
    console.log(random)
    //loop to access all  
    for (let r of data)
    { 
        
        tab += `AlbumID:${r.albumId},\n ID:${r.id},\n Title:${r.title},\n URL:${r.url},\n Turl:${r.thumbnailUrl}\n`; 
    } 
    console.log(tab);
  
} 