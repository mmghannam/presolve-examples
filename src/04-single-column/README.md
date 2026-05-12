# Reductions for individual variables

Single-column reductions look at one variable (column) at a time, using its column $A_{\cdot j}$, objective coefficient $c_j$, bounds $\ell_j, u_j$, integrality, and the row infima/suprema $\inf\{A_{i\cdot}x\}, \sup\{A_{i\cdot}x\}$ for the rows in which it appears.

| Section | Technique | What it does |
|---|---|---|
| 4.1 | Removal of fixed variables | Eliminates variables with $\ell_j = u_j$, folding their contribution into RHS and objective. |
| 4.2 | Rounding bounds of integer variables | Tightens fractional bounds on integer variables to the next integer inside. |
| 4.3 | Strengthen semi-continuous and semi-integer bounds | Removes the "semi" property when the bounds prove it redundant. |
| 4.4 | Dual fixing, substitution, and bound strengthening | Uses sign patterns of $c_j$ and $A_{\cdot j}$ to fix variables to bounds, substitute against a binary, or derive new bounds via dual reasoning. |
| 4.5 | Substitute implied free variables | When a variable's explicit bounds are redundant given the rest of the constraints, eliminates it via an equation containing it ("aggregator"). |

Of these, §4.5 is the most powerful — it eliminates entire variables and equations from the model in one shot, so it is often the dominant single-column reduction.
