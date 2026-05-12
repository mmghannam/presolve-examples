\ §3.4 Chvátal–Gomory strengthening
\
\ Three binary variables with distinct coefficients 6, 5, 4 on the left and
\ RHS 7 on the right. Each variable alone (at value 1) is too small to
\ satisfy the constraint, so any feasible point must have at least two of
\ the three variables set to 1.
\
\ The Chvátal–Gomory cut with scalar s = 1/6 captures this directly:
\   x + y + z >= 2

Minimize
 obj: x + y + z
Subject To
 c1: 6 x + 5 y + 4 z >= 7
Bounds
 0 <= x <= 1
 0 <= y <= 1
 0 <= z <= 1
General
 x y z
End
