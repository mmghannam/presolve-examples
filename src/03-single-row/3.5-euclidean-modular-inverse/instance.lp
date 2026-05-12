\ Paper Example 2 — modular inverse reduction
\ Achterberg et al. 2016, §3.5
\
\ A two-variable integer equation where the coefficients are coprime
\ but the RHS is not divisible by either of them. The Euclidean reduction
\ alone cannot simplify the constraint; the modular inverse trick can.

Minimize
 obj: x1 + x2
Subject To
 c1: 1867 x1 + 1913 x2 = 3618894
Bounds
 x1 >= 0
 x2 >= 0
General
 x1 x2
End
