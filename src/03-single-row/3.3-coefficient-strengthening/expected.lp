\ After coefficient strengthening on c1 against the binary variable z.
\
\ New coefficient on z:  a'_z = 5 - 3 = 2
\ New right-hand side:   b' = 8 - 3 * 1 = 5
\
\ The integer-feasible region is unchanged. The LP relaxation is strictly
\ tighter — e.g., the point (z, x, y) = (0.5, 1, 1) was LP-feasible in the
\ original constraint (5*0.5 + 2 + 3 = 7.5 <= 8) and is now cut off
\ (2*0.5 + 2 + 3 = 6 > 5).

Minimize
 obj: z + x + y
Subject To
 c1: 2 z + 2 x + 3 y <= 5
Bounds
 0 <= z <= 1
 0 <= x <= 1
 0 <= y <= 1
General
 z
End
