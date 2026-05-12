# Notation

We follow the paper's notation throughout. Restating the essentials:

## The mixed integer program

Given a matrix $A \in \mathbb{R}^{m \times n}$, vectors $c \in \mathbb{R}^n$ and $b \in \mathbb{R}^m$, lower bounds $\ell \in (\mathbb{R} \cup \{-\infty\})^n$ and upper bounds $u \in (\mathbb{R} \cup \{\infty\})^n$, an integer index set $I \subseteq N = \{1, \ldots, n\}$, and relations $\circ_i \in \{=, \leq, \geq\}$ for each row $i \in M = \{1, \ldots, m\}$, the **mixed integer program** is

$$
\begin{aligned}
\min\ & c^T x \\
\text{s.t.}\ & A x \circ b \\
& \ell \leq x \leq u \\
& x_j \in \mathbb{Z} \quad \text{for all } j \in I.
\end{aligned}
$$

We write $A_{i\cdot}$ for row $i$, $A_{\cdot j}$ for column $j$, and $\operatorname{supp}(A_{i\cdot}) = \{j \in N : a_{ij} \neq 0\}$ for the support of a row.

## Row activities

The **minimal** and **maximal activity** of row $i$ are

$$
\inf\{A_{i\cdot}x\} = \sum_{j : a_{ij} > 0} a_{ij} \ell_j + \sum_{j : a_{ij} < 0} a_{ij} u_j,
\qquad
\sup\{A_{i\cdot}x\} = \sum_{j : a_{ij} > 0} a_{ij} u_j + \sum_{j : a_{ij} < 0} a_{ij} \ell_j,
$$

with the conventions $s \cdot \infty = \infty$ for $s > 0$ etc. These activities are the workhorse quantities of single-row presolve.

## Tolerances

The **feasibility tolerance** $\varepsilon$ controls when an inequality is considered redundant or infeasible; in Gurobi, $\varepsilon = 10^{-6}$ by default. The constant $\psi = 10^{30}$ is the convention for "infinity" in the model data.

Conversion between $\leq$ and $\geq$ is by negation, so without loss of generality the descriptions in this book consider only one direction of each inequality.
