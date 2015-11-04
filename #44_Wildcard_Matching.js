 
var isMatch = function(s, p) {

    var str = 0;
    var pat = 0;
    var star = false
    var starPoint = []
       while(1) {
           if(p[pat] === '?') {
               if(s[str]) {
                  str++;
                  pat++;
                  if(str >=s.length && pat >= p.length) return true;
                  continue;  
               }
           }
           if(p[pat] === '*') {
                //skip consecutive stars
           	    while(p[pat] === '*') {
           	    	pat++;
           	    }
           	    //if nothing after the star, return true
           	    if(!p[pat]) return true;
           	    star = true;

           	    starPoint = [str, pat]
           	    continue;
           }
           if(p[pat] === s[str]) {
                str++;
                pat++;
                if(str >=s.length && pat >= p.length) return true;
                continue;
           } else {
           	  //if no stars met yet, return false
           	  if(!star) return false;
           	  else {
           	  	//otherwise backtracking using the saved old positions
           	  	starPoint[0]++;
           	  	str = starPoint[0];
           	  	pat = starPoint[1];
           	  	if(str >= s.length ) return false;
           	  }
           }
           // return false;
       }
};
