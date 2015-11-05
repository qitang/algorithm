var alienOrder = function(words) {
    var result = [];
    function topSort(tree) {
        var pop = {length : 0}
        out:
        while(pop.length <nodes.length) {
            var all= tree.reduce(function(pre, current) {
                return pre | current
            })
            if(all === ((1 << nodes.length) -1)) return [];
            var start = 0;
            while(start < nodes.length) {
                if(pop[start]) {
                    start++
                    continue;
                }

                if( ((all >> start) & 1 )=== 0 ) {
                    result.push(nodes[start] )
                    pop[start] = 1;
                    pop.length++;
                    tree[start] = 0;
                    continue out;
                }
                 start++
            }
        }
        return result
    }

    var nodes = [];
    words.forEach(function(word){
        for(var i = 0 ; i<word.length ; i++) {
            var w = word[i]
            if(nodes.indexOf(w) < 0) {
                nodes.push(w)
            } 
        }
    })
    var tree = Array.apply(null, Array(nodes.length)).map(function(){return 0})
    for(var i =1 ; i < words.length ; i++) {
        insert(words[i-1], words[i], tree)
    }
    return topSort(tree)
    function insert(pre ,next, tree) {
        for(var i = 0 ; i<pre.length ; i++) {
            if(pre[i] === next[i]) continue;
            if(next[i] === undefined) continue;
            var row = nodes.indexOf(pre[i])
            var col = nodes.indexOf(next[i])
            tree[row] = tree[row] | (1 << col) 
            break;
        } 
    }
}

var words = ["gn", "gt", "img", "imgj", "tim", "ting"]
console.log(alienOrder(words))
//The correct order is: "wertf".