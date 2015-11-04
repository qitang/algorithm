 
var isValidBST = function(root) {
  if(root ===null) return true
  var pre = Number.NEGATIVE_INFINITY
  var helper = function(root) {
    if(root === null) return true;
    if(!helper(root.left)) return false;
    if(pre >= root.val) return false;
    pre = root.val
    if(!helper(root.right)) return false;
    return true;
  }
  return helper(root)
};
