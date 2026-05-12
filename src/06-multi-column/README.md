# Reductions on multiple variables

Multi-column reductions look at two or more columns simultaneously: their objective coefficients, bounds, integrality, and the rows in which they appear.

| Section | Technique | What it does |
|---|---|---|
| 6.1 | Multi-column dual fixing for single equations | Generalizes single-column dual fixing (§4.4) to a group of variables that jointly bracket a single equation. |
| 6.2 | Fix redundant penalty variables | When several singleton variables play the role of "penalties" on one constraint, fixes the more expensive ones to their bounds when the cheaper ones already suffice. |
| 6.3 | Parallel columns | Detects columns $A_{\cdot j} = \lambda A_{\cdot k}$ and merges $x_j, x_k$ into a single aggregated variable. |
| 6.4 | Dominated columns | When one column dominates another (cheaper objective, weaker effect on every row, integrality compatible), fixes the dominated variable to a bound. |

Multi-column reductions are typically less powerful than multi-row reductions — there are usually fewer "dual" structural symmetries between variables than between constraints in a real model — but they are cheap to detect via hashing and worth running.
