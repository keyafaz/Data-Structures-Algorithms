## TIPS


###### CLARIFY WITH INTERVIEWER:


  1. Is tree a binary tree?
  2. Don't assume when given a tree question, that the interviewer means a binary _search_ tree. Ask if its a binary search tree.
  3. Clarify duplicate values/equality. Can the tree have duplicate values? Will duplicate values be on the right or can they be on either side?
  4. Is tree balanced?



## NOTES

###### BALANCED: 
Left and right subtrees do not need to be _exactly_ same size. Way to think about it: a "balanced" tree really means something more like "not terribly imbalanced", its balanced enough to ensure O(log n) times for insert and find.
  
###### COMPLETE BINARY TREES:
Every level of the tree is fully filled, except for perhaps the last level. The last level is filled from left to right to the extent in which it is filled.

###### FULL BINARY TREES: 
Every node has either zero or two children -  no nodes have only one child.

###### PERFECT BINARY TRESS:
one that is both full and complete. Perfect trees have 2^k - 1 nodes (k = number of levels).



## BINARY TREE TRANSVERSAL


###### IN-ORDER: Visit left branch -> then current node -> and finally the right branch

###### PRE-ORDER: 

###### POST-ORDER: 
