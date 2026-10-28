"use strict";
(() => {
  const recipe = window.lasagneRecipe;
  const find = selector => document.querySelector(selector);
  const dialog = find("#cooking");
  const storageKey = "kleine-koks-lasagne-ingredients-v1";
  let saved = [];
  try { const value = JSON.parse(localStorage.getItem(storageKey) || "[]"); if (Array.isArray(value)) saved = value; } catch { /* Opslag is optioneel. */ }
  function persist() { try { localStorage.setItem(storageKey, JSON.stringify([...document.querySelectorAll("#ingredients input:checked")].map(input => Number(input.value)))); } catch { /* Blijf bruikbaar zonder opslag. */ } }
  recipe.ingredients.forEach((ingredient, index) => {
    const li = document.createElement("li"); const label = document.createElement("label");
    const input = document.createElement("input"); input.type = "checkbox"; input.value = index; input.checked = saved.includes(index); input.addEventListener("change", persist);
    const text = document.createElement("span"); text.textContent = ingredient;
    label.append(input, text); li.append(label); find("#ingredients").append(li);
  });
  function content(step) {
    const body = document.createElement("div"); const p = document.createElement("p"); p.textContent = step.text; body.append(p);
    if (step.layers) { const ol = document.createElement("ol"); step.layers.forEach(layer => { const li = document.createElement("li"); li.textContent = layer; ol.append(li); }); body.append(ol); }
    if (step.after) { const after = document.createElement("p"); after.textContent = step.after; body.append(after); }
    return body;
  }
  find("#preparations").append(content(recipe.steps[0]));
  find("#progress").max = recipe.steps.length;
  recipe.steps.forEach((step, index) => {
    const li = document.createElement("li"); const number = document.createElement("span"); number.className = "number"; number.textContent = index + 1; number.setAttribute("aria-hidden", "true");
    const body = document.createElement("div"); const title = document.createElement("h4"); title.textContent = step.title;
    body.append(title, content(step)); li.append(number, body); find("#steps").append(li);
  });
  function route() {
    const isRecipe = location.hash === "#lasagne"; find("#lasagne").hidden = !isRecipe;
    document.querySelectorAll(".home").forEach(section => { section.hidden = isRecipe; });
    document.title = isRecipe ? "Makkelijke lasagne · Kleine koks" : "Kleine koks · Vandaag ben jij de chef";
    if (isRecipe) { find("#lasagne").scrollIntoView(); find("#lasagne").focus({ preventScroll: true }); }
    else if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route); route();
  find("#reset").addEventListener("click", () => { document.querySelectorAll("#ingredients input").forEach(input => { input.checked = false; }); persist(); });
  find("#print").addEventListener("click", () => window.print());
  let activeStep = 0;
  function render() {
    const step = recipe.steps[activeStep]; find("#progress-label").textContent = `Stap ${activeStep + 1} van ${recipe.steps.length}`;
    find("#progress").value = activeStep + 1; find("#cooking-title").textContent = step.title; find("#cooking-body").replaceChildren(content(step));
    find("#previous").disabled = activeStep === 0; find("#next").textContent = activeStep === recipe.steps.length - 1 ? "Klaar, eet smakelijk! ✓" : "Volgende →";
    if (dialog.open) find("#cooking-title").focus();
  }
  find("#start").addEventListener("click", () => { activeStep = 0; render(); dialog.showModal(); });
  find("#close").addEventListener("click", () => dialog.close());
  find("#previous").addEventListener("click", () => { if (activeStep > 0) { activeStep--; render(); } });
  find("#next").addEventListener("click", () => { if (activeStep === recipe.steps.length - 1) dialog.close(); else { activeStep++; render(); } });
})();
