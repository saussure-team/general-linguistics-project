import "./styles.css";

function appScholar() {
  this.extra = {
    note: "ok!"
  };
  this.data = {
    test: `test ${this.extra.note}`,
    sources: [
      {
        source: "BGE MS fr. 3951/15 f. 16v",
        image: "imgs/ms_fr_03951_15_f016v.jpg",
        transcription:
          "Item. Dans la comparaison du / jeu d’échecs, il y a ceci de juste que / la fonction (valeur) est conventionnelle ; / mais, pour ce qui est de la structure, cette / comparaison n’offre pas de base, attendu / que chaque pièce est indémontable, / ne contient pas comme l’unité du / mot des parties diverses, avec fonctions diverses. <input id='simtext' type='button' onclick='simtext()' value='show similar texts' style='margin: 10px 20px;'/>",
        diplomatic:
          "<span class='line'>1</span> Item. &lt;suite au recto&gt;. – Dans la comparaison du<br/><span class='line'>2</span> jeu d’échecs, il y a ceci de juste que<br/><span class='line'>3</span> la fonction (valeur) est conventionnelle ;<br/><span class='line'>4</span> mais, pour ce qui est de la <u>structure</u>, cette<br/><span class='line'>5</span> comparaison n’offre pas de base, attendu<br/><span class='line'>6</span> que chaque pièce est indémontable,<br/><span class='line'>7</span> ne contient <u>pas</u> comme l’unité du<br/><span class='line'>8</span> mot des parties diverses, avec fonctions diverses."
      }
    ]
  };
  this.terms = {
    LANGUE: `<b>LANGUE</b> 
    <div style="line-height:1.5em;">
    <b>CLASS</b>: LINGUISTIC SYSTEM<br />
    <b>Data property:</b> MENTAL ABSTRACT <br />
    <b>Object property:</b> <u>isa</u>: <em>système</em> <u>hasPart</u>: <em>signe1</em> <u>hasPart</u>: <em>valeur1</em> <u>hasAbstractLocation</u>: <em>cerveau</em> <u>usedBy</u>: <em>communauté</em> <u>usedBy</u>: <em>sujet parlant</em> <u>usedBy</u>: <em>masse parlante</em> <u>hasPreviousDenomination</u>: <em>langage</em> <u>duality</u>: <em>parole</em> <u>quasiSynonymy</u>: <em>état de langue</em> <u>EnglishTranslation</u>: <em>language</em><br />
    <hr />
    <b>Cfr.</b> <i>entité</i>, <i>identité</i>, <i>langage</i>, <i>signe</i>, <i>valeur</i>, <i>système</i>, <i>signification</i>, <i>différence</i>, <i>sémiologie</i>
  </div>`,
    INTERNE: `<b>INTERNE</b>`,
    PANCHRONIQUE: `<b>PANCHRONIQUE</b>`,
    VALEUR: `<b>VALEUR</b>`
  };
  this.fillSource = () => {
    let sourceElem = document.getElementById("source");
    console.log("fillSource", sourceElem);
    let facsDiv = sourceElem.querySelector("#facs");
    let diplDiv = sourceElem.querySelector("#dipl");
    let tranDiv = sourceElem.querySelector("#tran");
    console.log("facs", facsDiv);
    console.log("dipl", diplDiv);
    console.log("tran", tranDiv);
    let img = document.createElement("img");
    img.src = this.data.sources[0].image;
    facsDiv.appendChild(img);
    diplDiv.innerHTML = this.data.sources[0].diplomatic;
    tranDiv.innerHTML = this.data.sources[0].transcription;
  };
  this.showinfobox = function (n) {
    console.log("in js show info box", n);
    var infobox = document.getElementById("infobox");
    // var content = document.createTextNode("[" + n + `]: ${this.terms[n]} `); //document.createElement("span");
    //content.innerText = "CONTENT FOR " + n;
    //infobox.children[1].children[1].textContent = content.textContent;
    infobox.children[1].children[1].innerHTML = `${this.terms[n]}`;

    infobox.style.display = "block";
  };
}

(function () {
  console.log("app scholar");
})();

let scholar = new appScholar();
window.scholar = scholar;
