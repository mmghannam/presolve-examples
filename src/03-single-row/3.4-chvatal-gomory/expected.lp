\ After Chvátal–Gomory strengthening of c1 with scalar s = 1/6.
\
\ Original:  6 x + 5 y + 4 z >= 7
\ CG cut:    x + y + z >= 2
\
\ The CG cut dominates the original in the LP — every coefficient, after
\ normalizing the cut to RHS = 7, is strictly smaller than the original
\ coefficient (3.5 vs 6, 5, 4). The original constraint is replaced.

Minimize
 obj: x + y + z
Subject To
 c1: x + y + z >= 2
Bounds
 0 <= x <= 1
 0 <= y <= 1
 0 <= z <= 1
General
 x y z
End
