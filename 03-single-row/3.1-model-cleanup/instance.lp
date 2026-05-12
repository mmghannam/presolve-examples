\ §3.1 Model cleanup and removal of redundant constraints
\
\ Constraint c2 is redundant: sup{x + y} over the bounds is 10 + 10 = 20,
\ well below the right-hand side of 100. The constraint can be dropped
\ without changing the feasible region.

Minimize
 obj: x + 2 y
Subject To
 c1: x + y >= 3
 c2: x + y <= 100
Bounds
 0 <= x <= 10
 0 <= y <= 10
End
