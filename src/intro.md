# Preface

This is a worked-example tour of the presolve techniques used in modern mixed-integer programming solvers. For each reduction it provides

1. A short statement of what the reduction does and the condition under which it fires.
2. A tiny hand-crafted LP/MIP instance on which the reduction is the protagonist.
3. The model after the reduction has been applied — so you can read off, by hand, what changed.

The techniques are organized following the taxonomy in

> Tobias Achterberg, Robert E. Bixby, Zonghao Gu, Edward Rothberg, Dieter Weninger.
> *Presolve Reductions in Mixed Integer Programming.* ZIB Report 16-44 (September 2016).
> [PDF](https://opus4.kobv.de/opus4-zib/files/6037/Presolve.pdf) · [landing page](https://opus4.kobv.de/opus4-zib/frontdoor/index/index/docId/6037)

which remains the most thorough single reference on the topic. The chapter numbering matches the paper's section numbering one-to-one (chapter 3.5 here is paper §3.5), so the book can be read alongside the paper as a hands-on companion. The focus, however, is the **technique itself**: the math, the structure that makes it fire, and the shape of the resulting reduction. Solver-specific tuning and benchmark numbers are out of scope.

The instances are stored as standalone `.lp` files alongside each chapter, so they can be loaded into any MIP solver (SCIP, HiGHS, Gurobi, CPLEX, …) and inspected with the solver's presolve log. The book embeds them into the chapters via mdBook's `{{#include}}` directive — the chapter you read and the file you can solve are the same bytes on disk.

## How to read this book

Each chapter is self-contained and follows the same structure: the reduction, a trigger condition, an instance, a walkthrough, and the post-presolve model. Subtle conditions and edge cases that any implementation must handle (numerical safeguards, integrality requirements, fill-in concerns) appear in the closing notes.

## Status

The book is a work in progress. Two reference chapters — [§3.5](03-single-row/3.5-euclidean-modular-inverse.md) and [§4.5](04-single-column/4.5-implied-free-substitution.md) — are fully written and serve as the format template. Every other chapter starts with a **DRAFT — unreviewed** banner: the prose was scaffolded automatically and the math, instance, and explanation have not yet been checked. We are reviewing these one at a time, replacing each draft with a worked-through chapter as we go.
