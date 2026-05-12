\ After the modular-inverse substitution x1 := 1913 z + 1009.
\
\ Substituting into the original equation gives 3571571 z + 1913 x2 = 1735091,
\ which divides through by gcd 1913 to yield 1867 z + x2 = 907.
\
\ Objective: x1 + x2 = (1913 z + 1009) + x2 = 1913 z + x2 + 1009.
\ The trailing +1009 is the objective constant (uncrush offset for x1).

Minimize
 obj: 1913 z + x2 + 1009
Subject To
 c1: 1867 z + x2 = 907
Bounds
 z >= 0
 x2 >= 0
General
 z x2
End
