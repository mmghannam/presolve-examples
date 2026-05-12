# Full-problem reductions

Full-problem reductions consider the model as a whole. They include the most powerful — and most expensive — algorithms in the presolver, and typically run in the outermost loop only once or twice.

| Section | Technique | What it does |
|---|---|---|
| 7.1 | Aggregate pairs of symmetric variables | Detects variable permutations that leave the model unchanged and aggregates each orbit into a single representative. |
| 7.2 | Probing | Tentatively fixes a binary variable to 0 and to 1, propagates each, and harvests the implied bound changes, fixings, and substitutions (with optional lifting of cuts). |
| 7.3 | Disconnected components | Splits the constraint matrix into independent sub-blocks and solves each separately. |
| 7.4 | Biconnected components | When a single "articulation" variable couples two otherwise-independent sub-blocks, probes the articulation and decomposes. |
| 7.5 | Exploiting complementary slackness | Uses LP duality to derive variable fixings or implied equalities that hold for every optimal solution. |
| 7.6 | Implied integer detection | Identifies continuous variables whose value is forced to be integer by the surrounding constraints, and marks them as integer for downstream cut generation and branching. |

These reductions are global in scope and frequently change the model in ways that re-trigger the cheaper reductions, so the presolve loop iterates the whole stack until no further changes are made.
