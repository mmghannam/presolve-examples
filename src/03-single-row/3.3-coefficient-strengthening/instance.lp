\ §3.3 Coefficient strengthening
\
\ The binary variable z has coefficient 5 in the constraint.
\ The "rest of the row" 2x + 3y has maximum activity 2 + 3 = 5 over the bounds.
\ At z = 0 the constraint reads 2x + 3y <= 8 but the LHS can be at most 5,
\ so the constraint has 3 units of slack at z = 0.
\ Strengthening shrinks z's coefficient from 5 to 2 and the RHS from 8 to 5.

Minimize
 obj: z + x + y
Subject To
 c1: 5 z + 2 x + 3 y <= 8
Bounds
 0 <= z <= 1
 0 <= x <= 1
 0 <= y <= 1
General
 z
End
