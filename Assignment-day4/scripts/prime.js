console.log("Question 7");
let count;
let num=prompt("Enter an integer:");
for(let n = 1; n <= num; n++)
		{
			count = 0;
		    for (let i = 2; i <= n/2; i++)
		    {
		    	if(n % i == 0)
		    	{
		    		count++;
		    		break;
		    	}
		    }
		    if(count == 0 && n != 1 )
		    {
		    	console.log(n + " ");
            } 
        } 