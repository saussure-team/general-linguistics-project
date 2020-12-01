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
          "Item. Dans la comparaison du / jeu d’échecs, il y a ceci de juste que / la fonction (valeur) est conventionnelle ; / mais, pour ce qui est de la <u>structure</u>, cette / comparaison n’offre pas de base, attendu / que chaque pièce est indémontable, / ne contient <u>pas</u> comme l’unité du / mot des parties diverses, avec fonctions diverses. <input id='simtext' type='button' onclick='simtext()' value='show similar texts' style='margin: 10px 20px;'/>",
        diplomatic:
          "<span class='line'>1</span> Item. &lt;suite au recto&gt;. – Dans la comparaison du<br/><span class='line'>2</span> jeu d’échecs, il y a ceci de juste que<br/><span class='line'>3</span> la fonction (valeur) est conventionnelle ;<br/><span class='line'>4</span> mais, pour ce qui est de la <u>structure</u>, cette<br/><span class='line'>5</span> comparaison n’offre pas de base, attendu<br/><span class='line'>6</span> que chaque pièce est indémontable,<br/><span class='line'>7</span> ne contient <u>pas</u> comme l’unité du<br/><span class='line'>8</span> mot des parties diverses, avec fonctions diverses."
      },
      {
        source: "BGE AdS 372/4, f. 135",
        image: "imgs/arch_saussure_372_04_f135.jpg",
        transcription:
          "– De la même façon que dans le jeu d'échecs / il serait absurde de demander / ce que serait une dame, un pion, un / fou, ou un cavalier, / si on le considérait / hors du jeu d'échecs; de la même façon, il n'y  a pas de sens, si l'on considère vrai / ment <u>la langue</u>, à cher /cher ce qu'est chaque élément par / lui-même. Il n'est rien d'autre / qu'une pièce valant par son / opposition avec d'autres selon / certaines conventions.<input id='simtext' type='button' onclick='simtext()' value='show similar texts' style='margin: 10px 20px;'/>",
        diplomatic:
          "<span class='line'>1</span> – De la même façon <ins>que dans le jeu d'échecs</ins> <del>qu’il serait</del> <br /> <span class='line'>2</span> <del>profondément inutile de le demander,</del> <br /> <span class='line'>3</span> <del>ce que vaut devant le jeu d’échecs,</del> <br /><span class='line'>4</span> <ins>il serait</ins> <del>n’y a pas de sens à</del> <ins><del>il est</del> absurde de</ins> demander <br /><span class='line'>5</span> <ins>ce que serait,</ins> <del>ce qu’est</del> <ins><del>dans le jeu d’échecs</del></ins> une <del>reine</del> <ins>dame</ins>, un pion, un <br /><span class='line'>6</span> fou, ou un cavalier, <del>hors du jeu</del> <br /><span class='line'>7</span> <del>d’échecs quand</del> <ins>si</ins> on <ins>le</ins> considérait <del>le jeu</del><br /><span class='line'>8</span> <ins>hors du jeu</ins> D'échecs; de la même façon, il n'y <br /> <span class='line'>9</span> a pas de sens, si l'on considère vrai= <br /> <span class='line'>10</span> ment <u>la langue</u>, à <del>demander</del> cher= <br /><span class='line'>11</span> cher ce qu'est chaque élément par <br /><span class='line'>12</span> lui-même. Il n'est rien d'autre <br /><span class='line'>13</span> qu'une pièce valant par son <br /><span class='line'>14</span> opposition avec d'autres selon <br /><span class='line'>15</span> certaines conventions. <br />"
      },
      {
        source: "BGE MS fr. 3951/12 f. 1v",
        image: "imgs/ms_fr_03951_12_f001v.jpg",
        transcription:
          "D’où vient cette tendance, c’est facile à voir. L’événement est la cause de l’état et ce qui / l’explique (dans un certain sens). Un équilibre, une position réciproque des / termes; n’est jamais donnée. Mais fût-elle donnée par le catalogue des / événements, cette position est essentiellement / autre chose que ces événements et mérite / peut- . Comparaison de partie d’échecs. <input id='simtext' type='button' onclick='simtext()' value='show similar texts' style='margin: 10px 20px;'/>",
        diplomatic:
          "<span class='line'>6</span> D’où vient cette tendance, c’est facile à voir.<br /> <span class='line'>7</span> L’événement est la cause de l’état et ce qui<br /> <span class='line'>8</span> l’explique (dans un certain sens).<br /> <span class='line'>9</span><br /> <span class='line'>16</span><br /> <span class='line'>17</span> Un équilibre, une position réciproque des <br /> <span class='line'>18</span> termes; n’est jamais donnée. <br /> <span class='line'>19</span><br /> <span class='line'>20</span> Mais fût-elle donnée par le catalogue des <br /> <span class='line'>21</span> événements, cette position est essentiellement <br /> <span class='line'>22</span> autre chose que ces événements et mérite <br /> <span class='line'>23</span> peut- .<br /> <span class='line'>24</span><br /> <span class='line'>25</span> Comparaison de partie d’échecs. <br />"
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
  this.fillSource = (n) => {
    let sourceElem = document.getElementById("source");
    console.log("fillSource", sourceElem);
    let facsDiv = sourceElem.querySelector("#facs");
    let diplDiv = sourceElem.querySelector("#dipl");
    let tranDiv = sourceElem.querySelector("#tran");
    console.log("facs", facsDiv);
    console.log("dipl", diplDiv);
    console.log("tran", tranDiv);
    let img = document.createElement("img");
    img.src = this.data.sources[n].image;

    diplDiv.innerHTML = this.data.sources[n].diplomatic;
    tranDiv.innerHTML = this.data.sources[n].transcription;
    facsDiv.appendChild(img);
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
