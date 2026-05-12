# Reductions on multiple constraints

Multi-row reductions consider two or more rows simultaneously. They are typically more expensive than single-row reductions — pairwise comparisons scale quadratically in the number of rows in the worst case — and so practical implementations guard them with hash-based bucketing, work limits, and structural shortcuts.

| Section | Technique | What it does |
|---|---|---|
| 5.1 | Redundancy detection | Removes rows whose feasible region is implied by other rows: dependent equations (LU-rank), inequalities subsumed by stronger ones, set-packing constraints subsumed by larger cliques. |
| 5.2 | Parallel and nearly parallel rows | Detects rows that are scalar multiples of one another (or differ only on singleton variables) and merges, deletes, or sharpens them. |
| 5.3 | Non-zero cancellation | Adds an equation to another row to reduce the number of non-zero coefficients in the matrix. |
| 5.4 | Multi-row bound and coefficient strengthening | Computes activity bounds across multiple rows simultaneously (up to optimization-based bound tightening), enabling sharper §3.2 / §3.3 reductions. |
| 5.5 | Clique merging | Combines several set-packing constraints whose underlying conflict-graph cliques can be unified into a single larger clique. |

These reductions reshape the structure of the constraint matrix and frequently expose new single-row and single-column opportunities, so they are typically iterated with the cheaper reductions to fixed point.
