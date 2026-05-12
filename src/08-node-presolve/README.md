# Node presolve

Node presolve is the lightweight presolve pass that runs at every node of the branch-and-bound tree, after a branching decision has been made and before the LP relaxation of the subproblem is solved. Unlike root presolve, node presolve does **not** modify the coefficient matrix or right-hand sides — it only tightens the *local* bounds of variables in the current subproblem.

| Section | Technique | What it does |
|---|---|---|
| 8.1 | Bound strengthening at nodes | Re-runs §3.2 domain propagation on the rows that contain the branching variable, and chains further reductions. |
| 8.2 | Orbital fixing | Uses the symmetry group of the original model, restricted to the branching subspace, to fix variables in each orbit to a representative. |
| 8.3 | Conflict propagation | Treats conflict constraints learned from infeasible siblings as additional rows and propagates them locally. |
| 8.4 | Global probing at local nodes | Probes binary variables that became fractional in the node LP and harvests globally valid implied bounds. |

Node presolve runs millions of times during a search, so each technique must be cheap per call. The benefit is cumulative: even a small per-node reduction in the variable domains substantially shrinks the subtree below.

> **Note on demonstrating these reductions.** Node presolve fires *during* branch-and-bound, not at the root. A static `.lp` file alone cannot show the reduction in action; the chapters in this part describe the *condition* under which a reduction would fire, but a complete demonstration requires running a solver and inspecting the per-node log.
