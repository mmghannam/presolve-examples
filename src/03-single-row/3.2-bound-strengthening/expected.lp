\ After single-row bound strengthening on c1 against x.
\ The constraint is unchanged; only the upper bound u_x tightens from 10 to 3.

Minimize
 obj: x + y
Subject To
 c1: 4 x + 3 y <= 15
Bounds
 0 <= x <= 3
 0 <= y <= 5
General
 x
End
