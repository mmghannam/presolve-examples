\ After dropping the redundant constraint c2.
\ The remaining model is the same LP without that row.

Minimize
 obj: x + 2 y
Subject To
 c1: x + y >= 3
Bounds
 0 <= x <= 10
 0 <= y <= 10
End
