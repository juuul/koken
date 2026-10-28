"use strict";
// Het aangeleverde familierecept. Geen hoeveelheden of porties verzinnen.
window.lasagneRecipe = {
  ingredients: ["Gehakt", "Zak gesneden groenten", "Lasagnebladen", "Tomatensaus (rode fles)", "Geraspte kaas", "Mozzarella", "Heinz tomatenblokjes", "Beetje olie, peper en zout"],
  steps: [
    { title: "Gehakt bakken", text: "Doe een beetje olie in een grote pan. Bak het gehakt ongeveer 5 minuten op middelhoog vuur. Roer regelmatig tot het helemaal bruin is." },
    { title: "Groenten toevoegen", text: "Doe de zak groenten erbij. Bak alles nog 5 minuten. Voeg wat peper en zout toe." },
    { title: "Saus maken", text: "Giet de rode fles tomatensaus erbij. Laat 5 minuten zachtjes pruttelen. Is de saus erg dik? Voeg een klein scheutje water toe." },
    { title: "Lasagne bouwen", text: "Pak de ovenschaal en maak laagjes:", layers: ["Dun laagje saus", "Lasagnebladen", "Saus met gehakt en groenten", "Beetje geraspte kaas"], after: "Herhaal totdat alles op is. Eindig met een laag saus." },
    { title: "Mozzarella en Heinz blokjes!", text: "Verdeel de mozzarella over de bovenkant. Strooi daar de Heinz tomatenblokjes overheen en maak het af met geraspte kaas." },
    { title: "In de oven", text: "Verwarm de oven voor op 180 °C hetelucht of 200 °C boven- en onderwarmte. Bak de lasagne ongeveer 30–35 minuten, volgens de aanwijzingen op de verpakking van de lasagnebladen.", after: "Laat daarna 5 minuten staan voordat je gaat eten. Vraag een volwassene om te helpen met de hete oven en ovenschaal." }
  ]
};
