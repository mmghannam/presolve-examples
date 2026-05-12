\ After substituting x1 := 6 - x2 - x3 (using equation c3).
\
\ Original c1 (x1 - x2 <= 0)  becomes  6 - 2 x2 - x3 <= 0,  i.e. 2 x2 + x3 >= 6
\ Original c2 (x1 - x3 >= 0)  becomes  6 - x2 - 2 x3 >= 0,  i.e. x2 + 2 x3 <= 6
\ Original c3 is consumed by the substitution and removed.
\
\ Objective: 2 x1 + x2 + x3 = 2(6 - x2 - x3) + x2 + x3 = 12 - x2 - x3.
\ The +12 is the objective constant (uncrush offset).

Minimize
 obj: - x2 - x3 + 12
Subject To
 c1: 2 x2 + x3 >= 6
 c2: x2 + 2 x3 <= 6
Bounds
 0 <= x2 <= 5
 0 <= x3 <= 5
End
