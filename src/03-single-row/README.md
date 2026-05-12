# Reductions for individual constraints

Single-row reductions look at one constraint at a time, using only the row's coefficients $A_{i\cdot}$, its right-hand side $b_i$, the variable bounds $\ell, u$, and the integrality of the variables. Because they never combine information across rows, they are the cheapest reductions in the toolbox — and because they apply equally to the LP relaxation, every LP presolver implements them too.

| Section | Technique | What it does |
|---|---|---|
| 3.1 | Model cleanup and removal of redundant constraints | Discards rows whose activity bounds already imply them; detects infeasibility from a single row. |
| 3.2 | Bound strengthening (single-row domain propagation) | Tightens variable bounds using row activities. |
| 3.3 | Coefficient strengthening | Replaces a row by a dominating row that is equivalent over integers but tighter in the LP. |
| 3.4 | Chvátal–Gomory strengthening | Scales an integer row by $s > 0$ and rounds, when the rounded row dominates the original. |
| 3.5 | Euclidean and modular inverse reduction | Divides an integer row by the gcd of its coefficients; uses modular inverses to substitute structurally constrained integer variables. |
| 3.6 | Simple probing on a single equation | When an equation is "tight" against a binary variable, substitutes every other variable in the row in terms of that binary. |
| 3.7 | Special ordered set reductions | Fixings, deletions, and structural simplifications inside a single SOS1 or SOS2 constraint. |

Individually each is modest; collectively they account for a substantial fraction of the speed-up presolve provides on real models.
