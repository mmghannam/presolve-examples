\ §4.5 Substitute implied free variables
\ Achterberg et al. 2016, §4.5
\
\ x1 has explicit bounds [0, 5].
\ Inequality (c1) and the upper bound x2 <= 5 imply x1 <= 5.
\ Inequality (c2) and the lower bound x3 >= 0 imply x1 >= 0.
\ So x1's implied bounds equal its explicit bounds — it is implied free.
\
\ Equation (c3) contains x1, so the aggregator can substitute it out.

Minimize
 obj: 2 x1 + x2 + x3
Subject To
 c1: x1 - x2 <= 0
 c2: x1 - x3 >= 0
 c3: x1 + x2 + x3 = 6
Bounds
 0 <= x1 <= 5
 0 <= x2 <= 5
 0 <= x3 <= 5
End
