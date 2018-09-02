
<h4>TIPS</h4>

<h6>CLARIFY WITH INTERVIEWER:</h6/>

<ol>
  <li>Is tree a binary tree?</li>
  <li>Don't assume when given a tree question, that the interviewer means a binary <i>search</i> tree. Ask if its a binary search tree.</li>
  <li>Clarify duplicate values/equality. Can the tree have duplicate values? Will duplicate values be on the right or can they be on either side?</li>
  <li>Is tree balanced?</li>
</ol>


<h4>NOTES</h4>

<h6>BALANCED:</h6/> left and right subtrees do not need to be <i>exactly</i> same size. Way to think about it: a "balanced" tree really means something more like "not terribly imbalanced", its balanced enough to ensure O(log n) times for insert and find.
  
<h6>COMPLETE BINARY TREES:</h6/> every level of the tree is fully filled, except for perhaps the last level. The last level is filled from left to right to the extent in which it is filled.

<h6>FULL BINARY TREES:</h6/> Every node has either zero or two children -  no nodes have only one child.

<h6>PERFECT BINARY TRESS:</h6/> one that is both full and complete. Perfect trees have 2^k - 1 nodes (k = number of levels).
