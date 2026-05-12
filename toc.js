// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Preface</a></li><li class="chapter-item expanded affix "><li class="part-title">Foundations</li><li class="chapter-item expanded "><a href="notation.html"><strong aria-hidden="true">1.</strong> Notation</a></li><li class="chapter-item expanded affix "><li class="part-title">Reductions for individual constraints</li><li class="chapter-item expanded "><a href="03-single-row/index.html"><strong aria-hidden="true">2.</strong> Overview</a></li><li class="chapter-item expanded "><a href="03-single-row/3.1-model-cleanup.html"><strong aria-hidden="true">3.</strong> 3.1 Model cleanup and redundant constraints</a></li><li class="chapter-item expanded "><a href="03-single-row/3.2-bound-strengthening.html"><strong aria-hidden="true">4.</strong> 3.2 Bound strengthening</a></li><li class="chapter-item expanded "><a href="03-single-row/3.3-coefficient-strengthening.html"><strong aria-hidden="true">5.</strong> 3.3 Coefficient strengthening</a></li><li class="chapter-item expanded "><a href="03-single-row/3.4-chvatal-gomory.html"><strong aria-hidden="true">6.</strong> 3.4 Chvátal–Gomory strengthening</a></li><li class="chapter-item expanded "><a href="03-single-row/3.5-euclidean-modular-inverse.html"><strong aria-hidden="true">7.</strong> 3.5 Euclidean and modular inverse reduction</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 3.6 Simple probing on a single equation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 3.7 Special ordered set reductions</div></li><li class="chapter-item expanded affix "><li class="part-title">Reductions for individual variables</li><li class="chapter-item expanded "><a href="04-single-column/index.html"><strong aria-hidden="true">10.</strong> Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> 4.1 Removal of fixed variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> 4.2 Rounding bounds of integer variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> 4.3 Strengthen semi-continuous and semi-integer bounds</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> 4.4 Dual fixing, substitution, and bound strengthening</div></li><li class="chapter-item expanded "><a href="04-single-column/4.5-implied-free-substitution.html"><strong aria-hidden="true">15.</strong> 4.5 Substitute implied free variables</a></li><li class="chapter-item expanded affix "><li class="part-title">Reductions on multiple constraints</li><li class="chapter-item expanded "><a href="05-multi-row/index.html"><strong aria-hidden="true">16.</strong> Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">17.</strong> 5.1 Redundancy detection</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.</strong> 5.2 Parallel and nearly parallel rows</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">19.</strong> 5.3 Non-zero cancellation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">20.</strong> 5.4 Multi-row bound and coefficient strengthening</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">21.</strong> 5.5 Clique merging</div></li><li class="chapter-item expanded affix "><li class="part-title">Reductions on multiple variables</li><li class="chapter-item expanded "><a href="06-multi-column/index.html"><strong aria-hidden="true">22.</strong> Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">23.</strong> 6.1 Multi-column dual fixing</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">24.</strong> 6.2 Fix redundant penalty variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">25.</strong> 6.3 Parallel columns</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">26.</strong> 6.4 Dominated columns</div></li><li class="chapter-item expanded affix "><li class="part-title">Full-problem reductions</li><li class="chapter-item expanded "><a href="07-full-problem/index.html"><strong aria-hidden="true">27.</strong> Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">28.</strong> 7.1 Aggregate pairs of symmetric variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">29.</strong> 7.2 Probing</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">30.</strong> 7.3 Disconnected components</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">31.</strong> 7.4 Biconnected components</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">32.</strong> 7.5 Exploiting complementary slackness</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">33.</strong> 7.6 Implied integer detection</div></li><li class="chapter-item expanded affix "><li class="part-title">Node presolve</li><li class="chapter-item expanded "><a href="08-node-presolve/index.html"><strong aria-hidden="true">34.</strong> Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">35.</strong> 8.1 Bound strengthening at nodes</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">36.</strong> 8.2 Orbital fixing</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">37.</strong> 8.3 Conflict propagation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">38.</strong> 8.4 Global probing</div></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Unreviewed drafts</li><li class="chapter-item expanded "><a href="drafts/index.html"><strong aria-hidden="true">39.</strong> About these drafts</a></li><li class="chapter-item expanded "><a href="03-single-row/3.6-simple-probing.html"><strong aria-hidden="true">40.</strong> 3.6 Simple probing on a single equation</a></li><li class="chapter-item expanded "><a href="03-single-row/3.7-sos-reductions.html"><strong aria-hidden="true">41.</strong> 3.7 Special ordered set reductions</a></li><li class="chapter-item expanded "><a href="04-single-column/4.1-fixed-variables.html"><strong aria-hidden="true">42.</strong> 4.1 Removal of fixed variables</a></li><li class="chapter-item expanded "><a href="04-single-column/4.2-rounding-integer-bounds.html"><strong aria-hidden="true">43.</strong> 4.2 Rounding bounds of integer variables</a></li><li class="chapter-item expanded "><a href="04-single-column/4.3-semi-continuous-bounds.html"><strong aria-hidden="true">44.</strong> 4.3 Strengthen semi-continuous and semi-integer bounds</a></li><li class="chapter-item expanded "><a href="04-single-column/4.4-dual-fixing.html"><strong aria-hidden="true">45.</strong> 4.4 Dual fixing, substitution, and bound strengthening</a></li><li class="chapter-item expanded "><a href="05-multi-row/5.1-redundancy-detection.html"><strong aria-hidden="true">46.</strong> 5.1 Redundancy detection</a></li><li class="chapter-item expanded "><a href="05-multi-row/5.2-parallel-rows.html"><strong aria-hidden="true">47.</strong> 5.2 Parallel and nearly parallel rows</a></li><li class="chapter-item expanded "><a href="05-multi-row/5.3-non-zero-cancellation.html"><strong aria-hidden="true">48.</strong> 5.3 Non-zero cancellation</a></li><li class="chapter-item expanded "><a href="05-multi-row/5.4-multirow-strengthening.html"><strong aria-hidden="true">49.</strong> 5.4 Multi-row bound and coefficient strengthening</a></li><li class="chapter-item expanded "><a href="05-multi-row/5.5-clique-merging.html"><strong aria-hidden="true">50.</strong> 5.5 Clique merging</a></li><li class="chapter-item expanded "><a href="06-multi-column/6.1-multicol-dual-fixing.html"><strong aria-hidden="true">51.</strong> 6.1 Multi-column dual fixing</a></li><li class="chapter-item expanded "><a href="06-multi-column/6.2-redundant-penalty.html"><strong aria-hidden="true">52.</strong> 6.2 Fix redundant penalty variables</a></li><li class="chapter-item expanded "><a href="06-multi-column/6.3-parallel-columns.html"><strong aria-hidden="true">53.</strong> 6.3 Parallel columns</a></li><li class="chapter-item expanded "><a href="06-multi-column/6.4-dominated-columns.html"><strong aria-hidden="true">54.</strong> 6.4 Dominated columns</a></li><li class="chapter-item expanded "><a href="07-full-problem/7.1-symmetric-aggregation.html"><strong aria-hidden="true">55.</strong> 7.1 Aggregate pairs of symmetric variables</a></li><li class="chapter-item expanded "><a href="07-full-problem/7.2-probing.html"><strong aria-hidden="true">56.</strong> 7.2 Probing</a></li><li class="chapter-item expanded "><a href="07-full-problem/7.3-disconnected-components.html"><strong aria-hidden="true">57.</strong> 7.3 Disconnected components</a></li><li class="chapter-item expanded "><a href="07-full-problem/7.4-biconnected-components.html"><strong aria-hidden="true">58.</strong> 7.4 Biconnected components</a></li><li class="chapter-item expanded "><a href="07-full-problem/7.5-complementary-slackness.html"><strong aria-hidden="true">59.</strong> 7.5 Exploiting complementary slackness</a></li><li class="chapter-item expanded "><a href="07-full-problem/7.6-implied-integer-detection.html"><strong aria-hidden="true">60.</strong> 7.6 Implied integer detection</a></li><li class="chapter-item expanded "><a href="08-node-presolve/8.1-node-bound-strengthening.html"><strong aria-hidden="true">61.</strong> 8.1 Bound strengthening at nodes</a></li><li class="chapter-item expanded "><a href="08-node-presolve/8.2-orbital-fixing.html"><strong aria-hidden="true">62.</strong> 8.2 Orbital fixing</a></li><li class="chapter-item expanded "><a href="08-node-presolve/8.3-conflict-propagation.html"><strong aria-hidden="true">63.</strong> 8.3 Conflict propagation</a></li><li class="chapter-item expanded "><a href="08-node-presolve/8.4-global-probing.html"><strong aria-hidden="true">64.</strong> 8.4 Global probing</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
