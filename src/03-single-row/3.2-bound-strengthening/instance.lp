\ §3.2 Bound strengthening
\
\ The constraint 4x + 3y <= 15 implies an upper bound on x:
\   4x <= 15 - 3 * inf{y} = 15 - 0 = 15
\   x <= 15 / 4 = 3.75
\ Since x is integer, the bound rounds inward to u_x = 3.

Minimize
 obj: x + y
Subject To
 c1: 4 x + 3 y <= 15
Bounds
 0 <= x <= 10
 0 <= y <= 5
General
 x
End
