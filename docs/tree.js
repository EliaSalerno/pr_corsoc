document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');
  if (!tree) return;

  // initialize: collapse all nested lists except top-level children
  const toggles = tree.querySelectorAll('li');
  toggles.forEach(li => {
    const child = li.querySelector(':scope > ul');
    if (child) {
      // set initial collapsed for nested lists beyond top level
      if (li.parentElement.parentElement !== tree.querySelector('ul')) {
        child.hidden = true;
        const btn = li.querySelector(':scope > .toggle');
        if (btn) btn.textContent = '▸';
      }
    }
  });

  // attach handlers
  tree.querySelectorAll('li').forEach((li, idx) => {
    // roles & accessibility
    li.setAttribute('role', 'treeitem');
    const btn = li.querySelector(':scope > .toggle');
    const child = li.querySelector(':scope > ul');
    if (btn) {
      const labelText = (li.querySelector(':scope > strong')?.textContent || li.querySelector(':scope > a')?.textContent || 'sezione').trim();
      btn.setAttribute('aria-expanded', child ? (!child.hidden).toString() : 'false');
      btn.setAttribute('aria-controls', 'node-' + idx);
      btn.setAttribute('tabindex', '0');
      btn.setAttribute('aria-label', (child ? 'Espandi o comprimi ' : 'Apri ') + labelText);
    }
    if (child) {
      child.setAttribute('role', 'group');
      child.id = 'node-' + idx;
    }
  });

  tree.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const li = btn.parentElement;
      const child = li.querySelector(':scope > ul');
      if (!child) return;
      const collapsed = !child.hidden;
      child.hidden = collapsed;
      btn.textContent = collapsed ? '▸' : '▾';
      btn.setAttribute('aria-expanded', (!collapsed).toString());
    });
  });

  // keyboard accessibility: toggle on Enter/Space
  tree.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const target = e.target;
      if (target.classList && target.classList.contains('toggle')) {
        target.click();
        e.preventDefault();
      }
    }
  });

  // Search functionality
  const searchBox = document.getElementById('searchBox');
  const clearBtn = document.getElementById('clearSearch');
  if (searchBox) {
    const entries = Array.from(tree.querySelectorAll('a'));

    function normalize(s) { return s.trim().toLowerCase(); }

    function expandTo(el) {
      // expand all parent uls
      let parent = el.parentElement;
      while (parent && parent !== tree) {
        if (parent.tagName === 'UL') parent.hidden = false;
        const pbtn = parent.parentElement && parent.parentElement.querySelector(':scope > .toggle');
        if (pbtn) { pbtn.textContent = '▾'; pbtn.setAttribute('aria-expanded', 'true'); }
        parent = parent.parentElement;
      }
    }

    function doSearch(q) {
      const term = normalize(q);
      if (!term) {
        // reset
        entries.forEach(a => { a.parentElement.style.display = ''; });
        return;
      }
      entries.forEach(a => {
        const match = normalize(a.textContent).includes(term);
        a.parentElement.style.display = match ? '' : 'none';
        if (match) expandTo(a);
      });
    }

    searchBox.addEventListener('input', (e) => doSearch(e.target.value));
    clearBtn && clearBtn.addEventListener('click', () => { searchBox.value = ''; doSearch(''); searchBox.focus(); });
  }

});