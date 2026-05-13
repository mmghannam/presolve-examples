# Presolve Reductions in MIP — Worked Examples

**Read the book online:** <https://mmghannam.github.io/presolve-examples/>

A repository of small, hand-crafted LP/MIP instances illustrating each presolve technique described in:

> Tobias Achterberg, Robert E. Bixby, Zonghao Gu, Edward Rothberg, Dieter Weninger.
> *Presolve Reductions in Mixed Integer Programming.* ZIB Report 16-44 (September 2016).
> [PDF](https://opus4.kobv.de/opus4-zib/files/6037/Presolve.pdf) · [landing page](https://opus4.kobv.de/opus4-zib/frontdoor/index/index/docId/6037)

The repo is organized as an [mdBook](https://rust-lang.github.io/mdBook/) and published to GitHub Pages.

## Layout

The book source mirrors the paper's section numbering:

| Section | Folder | Topic |
|---|---|---|
| §3 | `src/03-single-row/` | Reductions for individual constraints |
| §4 | `src/04-single-column/` | Reductions for individual variables |
| §5 | `src/05-multi-row/` | Reductions on multiple constraints |
| §6 | `src/06-multi-column/` | Reductions on multiple variables |
| §7 | `src/07-full-problem/` | Full-problem reductions (probing, symmetry, components) |
| §8 | `src/08-node-presolve/` | Node-presolve reductions |

Each technique gets its own chapter file, e.g. `src/03-single-row/3.5-euclidean-modular-inverse.md`. The instance LP files live alongside in a same-named subfolder, e.g. `src/03-single-row/3.5-euclidean-modular-inverse/instance.lp`. Chapters embed the LP files with mdBook's `{{#include}}` directive, so the rendered book and the standalone files stay in sync.

## Building locally

```bash
cargo install mdbook mdbook-katex --locked
mdbook serve --open
```

## Deploy

`.github/workflows/publish.yml` builds the book on every push to `main` and deploys it to GitHub Pages using `actions/deploy-pages`. The Pages source is configured to "GitHub Actions" in the repo settings.

## Contributing

The two reference chapters — §3.5 and §4.5 — are fully built. The remaining chapters are stubs. To fill in a stub:

1. Build a minimal LP (`instance.lp`) that triggers exactly the reduction in question.
2. Write the post-presolve form (`expected.lp`).
3. Fill in the chapter markdown using §3.5 or §4.5 as a template.

Place both `.lp` files in `src/<section>/<chapter-slug>/` and reference them with `{{#include <chapter-slug>/instance.lp}}`.
