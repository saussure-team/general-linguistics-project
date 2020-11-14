import "./styles.css";

//document.getElementById("app").innerHTML = ``;

function APPsaussure() {
  this.test = "YES!";
  this.run = function (mask) {
    let m = parseInt(+mask / 1, 10);
    console.log("in app saussure", m);
    var div_res = doc.getElementById("search-result");
    var html_res = ``;
    doc.getElementById("timeline").style.display = "none";
    html_res = `<div id="corpus-tabs" class="tabs"><ul>`;

    if (parseInt(+mask / 1, 10) % 2 === 1) {
      console.log("clg checked");
      html_res += `<li id="clg" class="deactive"><a href="#contexts_top_clg">CLG <i>(11 items)</i></a></li>`;
    }
    if (parseInt(+mask / 10, 10) % 2 === 1) {
      console.log("lectures checked");
      html_res += ` <li id="lectures" class="deactive"><a href="#contexts_top_lectures">LECTURES <i>(10 items)</i></a></li>`;
    }
    if (parseInt(+mask / 100, 10) % 2 === 1) {
      console.log("attempts checked");
      html_res += `<li id="attempts" class="deactive"><a href="#contaxts_top_attempts">ATTEMPTS <i>(15 items)</i></a></li>`;
    }
    html_res += `</ul></div> <div id="reset"><input type="button" value="reset search" onclick="reset()"/></div>`;

    if (parseInt(+mask / 1, 10) % 2 === 1) {
      html_res += this.concordances.clg;
    }
    if (parseInt(+mask / 10, 10) % 2 === 1) {
      html_res += this.concordances.lectures;
    }
    if (parseInt(+mask / 100, 10) % 2 === 1) {
      html_res += this.concordances.attempts;
    }
    div_res.innerHTML = html_res;
    console.log("result", div_res);
  };

  this.showinfobox = function (n) {
    console.log("in js show info box", n);
    var infobox = doc.getElementById("infobox");
    var content = document.createTextNode("[" + n + `]: ${this.terms[n]} `); //document.createElement("span");
    //content.innerText = "CONTENT FOR " + n;
    infobox.children[1].children[1].textContent = content.textContent;

    infobox.style.display = "block";
  };

  this.terms = {
    langue:
      "instrument sémiologique permettant au langage de se manifester dans la parole ; code social organisant le langage et formant l’outil nécessaire à l’exercice de la faculté du langage, (Engler, 31) ; ensemble des conventions nécessaires adoptées par le corps social pour permettre l'usage de la faculté du langage chez les individus. Institution unique en son genre, par les caractères qui font qu'elle est solidaire du passé. La langue est un système de signaux, de signes. Système de signes reposant sur des images acoustiques, où les deux parties du signe sont psychiques. Sommes des signes évocables. Système de valeurs. (Godel, 266)",
    interne:
      "(intérieur 424) opposé à externe, v. linguistique, classement, syntaxe (Engler, 29). Est interne ce qui est susceptible de changer les valeurs à un degré quelconque (Godel, 265)",
    panchronique:
      "1. Qui se vérifie partout et toujours (opposé à (idio)synchronique, opposé à diachronique. Ce qui est panchronique n'est pas linguistique ; en panchronie il ne s'agit que de généralisations (Engler, 38) S'il ne s'agit que de généralisations, elles peuvent être panchroniques. Mais si on parle de faits concrets, il n'y a pas de point de vue panchronique. C'est même un critère de ce qui n'est pas linguistique (Godel, 271) 2. Permanent (ainsi du triconsonantisme des racines sémitiques considéré faussement comme caractère panchronique, embrassant tous les temps) (Engler, 38) (Godel, 271)"
  };

  this.texts = {
    pp: [
      {
        rif: "available as soon as possible",
        re: "available as soon as possible",
        p: "...",
        e: "..."
      }
    ],
    pp1617g: [
      {
        rif: "Godel cfs 15 pp. 16-17",
        re: "not available",
        p:
          "Nous retrouvons tous ces caractères dans la langue: <br /> 1) Le mot Apfel est tout aussi capable de désigner le fruit connu que pomme. Dans l’association du signe à l’idée, il n’y a rien qui lie en soi ce signe à cette idée. C’est une des raisons qui font qu’on doit éviter le terme de symbole, qui est en soi justement le contraire (ainsi la balance, symbole de la justice : il y a un rapport entre le signe et l’idée). 2) La valeur négative du mot est évidente. Tout consiste en différences. 3) La valeur devient positive grâce à l’opposition, par le voisinage, par le contraste :",
        e: "not available"
      },
      {
        rif: "Godel cfs 15 pp. 16-17",
        re: "not available",
        p:
          "Exemple (aussi bien pour 2), et 3), bien que proprement il se rapporte à 3)): ἔφην est imparfait, ἔστην est aoriste, quoique formés semblablement, parce que φημι est dans le voisinage de ἔφην, et parce que, dans le voisinage de ἔστην, il n'y a pas *στη̃μι. Ces signes agissent donc, non par leur valeur intrinsèque, mais par leur position relative, comme dans un jeu d'<b><u>échecs</u></b>.",
        e: "not available"
      },
      {
        rif: "Godel cfs 15 pp. 16-17",
        re: "...",
        p: "...",
        e: "..."
      },
      { rif: "Godel cfs 15 pp. 16-17", re: "...", p: "...", e: "..." }
    ],
    pp3233g: [
      {
        rif: "Godel cfs 15 pp. 32-33",
        re: "not available",
        p:
          "Le langage, par contre, 1) a fondamentalement le caractère d’un système qui est fondé sur des oppositions (comme un jeu d’<b><u>échecs</u></b> avec les différentes combinaisons de forces attribuées aux différentes pièces). La langue étant tout entière dans l’opposition de certaines unités et n’ayant pas d’autres substrat (la langue ne consiste qu’en ces unités!",
        e: "not available"
      },
      {
        rif: "Godel cfs 15 pp. 32-33",
        re: "not available",
        p:
          "Il n’y a dans la langue que le jeu de ces unités les unes par rapport aux autres), on ne peut pas se passer de connaître ces unités; nous ne pouvons faire un pas sans y faire appel, quelles qu’elles soient. 2) Tombent-elles sous le sens? N’y a-t-il qu’à les saisir, ces unités dans lesquelles consiste tout le phénomène du langage?",
        e: "not available"
      },
      {
        rif: "Godel cfs 15 pp. 32-33",
        re: "not available",
        p:
          "La réponse sera très souvent: oui; ces unités, ce sont les mots. La langue, semble-t-il, ne consiste qu’en des mots. Il s’agit de s’assurer si ces unités sont données comme les individus dans une espèce zoologique. Mais tout de suite nous sommes mis en méfiance en voyant qu’on s’est extrêmement disputé pour définir le mot.",
        e: "not available"
      },
      {
        rif: "Godel cfs 15 pp. 32-33",
        re: "not available",
        p:
          "Faisons l’expérience sur le mot (puisque c’est l’unité qu’on nous propose). Prenons mois (admettons tout de suite que moi et mois sont différents pour nous, bien qu’on puisse en dire long là-dessus et que pour les distinguer il y ait déjà une combinaison de son et d’idée [dans cette distinction] – c’est-à-dire que moi et mois ne nous sont pas donnés directement comme unités distinctes). Est-ce que mois, singulier et mois, pluriel, sont le même mot? Sans doute, c’est le même mot.",
        e: "not available"
      }
    ],
    pp47g: [
      {
        rif: "Godel cfs 15 pp. 47",
        re: "not available",
        p:
          "Ce qui est linguistique interne, c’est tout ce qui a trait à son système. La comparaison du jeu d’<b><u>échecs</u></b> n’est pas sans intérêt : la valeur de chaque pièce ressort d’un système (ensemble) complexe de conditions, plutôt que de la valeur propre à chaque pièce. On verra assez clairement ce qui est interne ou externe dans ce qui a pu marquer l’histoire du jeu d’<b><u>échecs</u></b> : ainsi son passage de Perse en Europe est externe ; idem, si les termes qui désignent quelque chose sont de telle ou telle origine.",
        e: "not available"
      }
    ],
    pp48g: [
      {
        rif: "Godel cfs 15 pp. 48",
        re: "not available",
        p:
          "Pour ne pas sembler prendre des choses extraordinaires, prenons ce cavalier du jeu d’<b><u>échecs</u></b> : est-ce un élément concret du jeu d’<b><u>échecs</u></b>? Assurément non, puisque, pris dans sa matérialité seule, hors de sa case et d’autres circonstances, il représente quelque chose pour la matière universelle, mais totalement rien pour le jeu d’<b><u>échecs</u></b>.",
        e: "not available "
      },
      {
        rif: "Godel cfs 15 pp. 48",
        re: "not available",
        p:
          "Ce qui sera concret, ce sera le cavalier revêtu de sa valeur, faisant un avec elle. A-t-il une identité? Totalement, dans la mesure où il aura une valeur. On constate que non seulement tout autre cavalier, mais même des figures qui n’auraient aucune ressemblance avec ce cavalier, pourvu qu’elles diffèrent de toutes autres, seront déclarées identiques pour le jeu d’<b><u>échecs</u></b>, pourvu qu’elles aient même valeur. D’où l’on voit que la mesure de l’identité, dans les systèmes dont nous parlons, n’est pas la même qu’ailleurs : on voit le lien entre l’identité et l’unité, l’une étant la base de l’autre.",
        e: "not available"
      },
      {
        rif: "Godel cfs 15 pp. 48",
        re: "not available",
        p: "... ",
        e: "... "
      },
      {
        rif: "Godel cfs 15 pp. 48",
        re: "not available",
        p: "...",
        e: "... "
      }
    ],
    pp92g: [
      {
        rif: "Godel cfs 15 pp. 92",
        re: "not available",
        p:
          "Conclusion provisoire.<br /> Tout ce qui est dans le synchronique d’une langue, y compris l’analogie (qui est une conséquence de notre activité), se résume très bien dans le terme de grammaire, dans une acception très voisine de l’ordinaire. On voit intituler un traité du jeu d’<b><u>échecs</u></b> : grammaire du jeu d’<b><u>échecs</u></b>; de même, la grammaire de la Bourse. Très juste, parce que cela implique un objet complexe et systématique, s’applique à un système qui met en jeu des valeurs. Il n’y a pas proprement pour nous de grammaire historique : les termes jurent ensemble ; il n’y a pas de système qui puisse être à cheval sur une suite d’époques. Ce qui est synchroniquement dans une langue est un équilibre qui se réalise de moment en moment, ce qui exclut la successivité.",
        e: "not available"
      }
    ],
    ff135: [
      {
        rif:
          "Essence double. BGE AdS 372/4 ff. 135 ≈ ELG 67 ≈ Amacker 2011 p. 125",
        re: "Essence double",
        p:
          "De la même façon que dans le jeu d'<b><u>échecs</u></b> il serait absurde de demander ce que serait une dame, un pion, un fou, ou un cavalier, si on le considérait hors du jeu d'<b><u>échecs</u></b>; de la même façon, il n'y a pas de sens, si l'on considère vraiment la langue, à chercher ce qu'est chaque élément par lui-même. Il n'est rien d'autre qu'une pièce valant par son opposition avec d'autres selon certaines conventions.",
        e:
          "Just as in chess it would be absurd to ask what a queen, a pawn, a bishop or a knight would be, if considered outside the game of chess, so there is no sense, if language is really what is being considered, in seeking what each element is in itself. It is nothing other than a piece whose value depends on its opposition to others within certain conventions."
      }
    ],
    f1v: [
      {
        rif: "Status et motus. BGE MS fr. 3951/12 f. 1v ≈ ELG 225 ≈ CLG/E 3299",
        re: "Status et motus.",
        p:
          "D’où vient cette tendance, c’est facile à voir. L’événement est la cause de l’état et ce qui l’explique (dans un certain sens).<br/> Un équilibre, une position réciproque des termes; n’est jamais donnée.<br/> Mais fût-elle donnée par le catalogue des événements, cette position est essentiellement autre chose que ces événements et mérite peut-être [ ].<br/> Comparaison de partie d’<b><u>échecs</u></b>.",
        e:
          "It is easy to see where this tendency comes from. The event is the cause of the state and is what explains it (in a certain sense).<br /> An equilibrium, a reciprocal position of terms, is never given.<br /> But even if it were given by the sequence of events, such a position is in essence unlike these events and may deserve …<br /> Chess game comparison."
      }
    ],
    ff0911: [
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 9-11 ≈ ELG 206-208 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p:
          "Car, en partant du contrat fondamental entre l'esprit et le signe à un moment quelconque, l'accident historique, alors même qu'il ne serait pas une variable connue, n'est capable d'avance que de produire tel et tel déplacement d'avance concevable, d'avance classable, si la théorie des signes est parfaite. Nous voguons en plein a priori dans la science qui a en horreur le [ ], c'est-à-dire que la diversité successive des combinaisons linguistiques (dites états de langue) qui sont amenées par l'accident sont éminemment comparables à la diversité des situations d'une partie d'<b><u>échecs</u></b>. Or chacune de ces situations ou ne comporte rien, ou comporte une description et une appréciation mathématique, mais elle ne comporte pas de dissertations flottantes partant de l'extérieur sous prétexte que c'est une force extérieure (le joueur) ou que c'est un événement historique (le coup précédent), qui a changé la position des pièces, et que précédemment la situation du roi ou l'état du mot x ne serait pas tout à fait la même qu'elle est.",
        e:
          "This is because if we start from the fundamental contract between mind and sign at any moment, historical accident, even if it is an unknown variable, could only produce a given shift in advance, conceivable in advance, classifiable in advance, if the theory of signs is perfect. we are adrift in a sea of a priori statements in a science which abhors…, or to put it another way the various successive linguistic combinations (or états de langue) randomly thrown up are highly comparable to the various situations in a game of chess. Each situation either contains nothing, or contains a mathematical description and explanation, but it does not contain loose explanations originating outside the game and justified by the fact that an external force (the player) or a historical event (the previous move) changed the position of the pieces, and that previously the position of the king or the state of the word x would not have been quite the same as what it is."
      },
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 9-11 ≈ ELG 206-208 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p:
          "Les théoriciens du langage avant la fondation et les praticiens de la linguistique après Bopp n'ont cessé de considérer la langue comme UNE POSITION d'<b><u>échecs</u></b> (qui n'aurait ni antécédent ni suite), se demandant quelle était, dans cette position, la valeur, puissance, respective des pièces.",
        e:
          "Theorists of language before the foundation of the discipline and adepts of linguistics since Bopp always considered the language system to be ONE chess POSITION with nothing before or after it, and have wondered about the respective value, power of the pieces, in this position."
      },
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 9-11 ≈ ELG 206-208 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p:
          "La grammaire historique, ayant découvert qu'il y avait DES COUPS d'<b><u>échecs</u></b>, s'est moquée de ses devanciers. Elle ne connaît pour sa part que la suite des coups et prétend, paraît il, avoir par là une vue parfaite de la partie, les positions ne l'inquiètent pas, ne sont plus dignes depuis longtemps d'attirer son attention. Or ce n'est aucune de ces deux erreurs, dont il serait difficile de dire laquelle est la plus profonde ou la plus immense par ses conséquences, qui nous retiendra un seul instant, mais, étant bien certain qu'une langue n'est comparable qu'à la complète idée de la partie d'<b><u>échecs</u></b>, comportant à la fois les positions et les coups, à la fois des changements et des états dans la succession (rien n'empêche, pour introduire dans la comparaison un trait assez essentiel, de supposer le joueur tout à fait absurde et inintelligent comme l'est le hasard des événements phonétiques et autres dans) [ ] : nous nous demandons alors si la nature de cette chose, en tout cas double, de son essence, est plus foncièrement historique - ou plus foncièrement d'une nature abstraite, échappant aux forces historiques en vertu d'une donnée fondamentale incoercible, qui est dans le jeu d'<b><u>échecs</u></b> la convention initiale reparaissant après chaque coup et dans la langue l'action totalement inéluctable des signes vis-à-vis de l'esprit qui s'établira de soi-même après chaque événement, chaque coup. Simple exemple : fōt : fōti ; le signe du pluriel est i. Coup d'<b><u>échec</u></b>, donc nouvelle position des termes : fot : foet ; le signe du pluriel est maintenant l'opposition ô : oe (qu'on le veuille ou non). Mais ces deux genres de positions ne sont en eux-mêmes et dans leur principe aucunement liés à l'événement qui les a produits, pas plus que si j'ai par hasard en kamtchadale [ ], et pas plus que si j'obtiens à la suite dans deux parties entièrement différentes la même position d'<b><u>échecs</u></b> à un moment donné.",
        e:
          "Historical grammar, having discovered that there were chess MOVES, ridiculed its predecessors. this is because historical grammarians are concerned only with the sequence of moves, from which they claim, apparently, to draw a perfect view of the game, without the need to worry about the positions, long considered unworthy of their attention. Neither of these two errors - it is hard to say which has deeper or greater consequences - will detain us for even a moment, but we are convinced that a language can only be compared to the idea of the game of chess taken as a whole, including both positions and moves, both changes and states in succession… (It is of course possible, in order to add an essential ingredient to the comparison, to postulate a player to be quite as blindly absurd as phonetic and other events are random …) We then wonder if the nature of this thing, which in any case has a double essence, is more fundamentally historical - or more fundamentally abstract in nature, avoiding historical forces by dint of a fundamental immovable fact, which in a game of chess is the initial convention which reappears after each move, and in language the completely inescapable action of signs vis-à-vis the mind, which will automatically occur after each event or move. A simple example: fōt : fōti; the sign of the plural is i. Chess move, hence new position of the terms: fot : foet; the sign of the plural is now the contrast: ō : oe (whether we like it or not)."
      },
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 9-11 ≈ ELG 206-208 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p:
          "Reprise : nous hésiterons par cela même sur la nature de la langue, ou à croire que quelqu'un puisse dire sa nature, puisqu'elle est foncièrement double : là étant la vérité centrale.<br /> Il n'y a aucune analogie en effet pour l'esprit entre ce qu'est une position d'<b><u>échecs</u></b> et ce qu'est un coup d'<b><u>échecs</u></b> (supposé inepte) comme ou même si on le suppose guidé par une [ ] ; de plus, il est impossible de dire laquelle de ces deux choses, totalement dissemblables, constitue plutôt que l'autre le côté décisif de l'ensemble, de manière à permettre de le classer quelque part.",
        e:
          "te racap: this very fact leads us to hesitate over the nature of language, or to see how anyone can sum up its nature, since it is fundamentally double: this is the heart of the matter.<br /> There is after all no mental analogy between the nature of a chess position and that of a (poor) chess move as or even if one reckons it to be guided by a …; moreover, it is impossible to say which of these two totally dissimilar things constitutes the more essential side of the whole, in order to be able to classify it somewhere."
      }
    ],
    ff3233: [
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 32-33 ≈ ELG 216-217 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p:
          "Dans une partie d'<b><u>échecs</u></b>, n'importe quelle position donnée a pour caractère singulier d'être affranchie des antécédents, c'est-à-dire qu'il n'est pas « plus ou moins » indifférent, mais totalement indifférent, qu'on en soit arrivé à telle position par une voie ou par une autre ; ou que celui qui a suivi toute la partie n'a pas le plus léger avantage sur le curieux qui vient inspecter cette partie au moment critique. Ou encore que personne ne songera à décrire la position en mêlant tantôt ce qui est, tantôt ce qui a été, fut-ce seulement dix secondes auparavant.",
        e:
          "In a game of chess, any given position has the peculiar characteristic of being totally free of antecedents; to put it another way it is not ‘more or less’ indifferent, but completely indifferent to the way that the position was arrived at; hence a person who has watched the game from the very start has not the slightest advantage over someone who, yielding to curiosity, peruses the game at a critical moment. Further, no one would dream of describing a position with a mixture of what is and what has been, even ten seconds previously."
      },
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 32-33 ≈ ELG 216-217 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p:
          "Tel est exactement le point de départ pour la langue. Si on l'admet, il reste à se demander par quel côté un tri objet peut être historique. De son essence, il paraît en effet rebelle à toute considération historique, bien plutôt voué à une spéculation abstraite, telle que celle que peut comporter la position d'<b><u>échecs</u></b> dont nous parlions. Mais nous allons maintenir la comparaison, bien persuadé qu'il n'y en aurait pas beaucoup qui nous permissent d'entrevoir aussi bien la si complexe nature de la sémiologie particulière dite langage pour définir une bonne fois cette sémiologie particulière qui est le langage non dans un de ses côtés, mais dans cette irritante duplicité qui fait qu'on ne le saisira jamais.",
        e:
          "This is precisely the starting point for the language system. If we accept this, we must then consider in which way such an object can be historical. In its essence, it certainly appears to rule out any historical approach, and seems much better suited to abstract speculation, like the chess position we mentioned. But we shall hold onto this comparison, convinced as we are that few others would give such a good insight into the complex nature of the particular semiological system not in terms of one of its aspects, but in this annoying duality which always prevents it from being grasped."
      },
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 32-33 ≈ ELG 216-217 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p: "...",
        e: "..."
      },
      {
        rif:
          "Notes Whitney. BGE MS fr. 3951/10 ff. 32-33 ≈ ELG 216-217 ≈ CLG/E 3297",
        re: "Notes Whitney.",
        p: "...",
        e: "..."
      }
    ],
    f16v: [
      {
        rif:
          "Quelques vérités. BGE MS fr. 3951/15 f. 16v ≈ ELG 114 ≈ CLG/E 3319.3",
        re: "Quelques vérités.",
        p:
          "Item. Dans la comparaison du jeu d’<b><u>échecs</u></b>, il y a ceci de juste que la fonction (valeur) est conventionnelle mais, pour ce qui est de la structure, cette comparaison n’offre pas de base, attendu que chaque pièce est indémontable, ne contient pas comme l’unité du mot des parties diverses, avec fonctions diverses.",
        e:
          "Misc. What the chess comparison correctly reflects is the conventionality of the function (value) but, as far as structure is concerned, this comparison is unfounded, since individual pieces cannot be taken apart, and do not, unlike the word unit, contain different parts, with different functions."
      }
    ],

    pp43: [
      {
        rif: "CLG page 43 = CLG/E 417-420",
        re: "W. Baskin pp.22-23 = CLG p.43",
        p:
          "Pour la linguistique <span class='term'>interne</span>, il en va tout autrement : elle n’admet pas une disposition quelconque ; la <span class='term'>langue</span> est un système qui ne connait que son ordre propre. Une comparaison avec le jeu d’<b><u>échecs</u></b> le fera mieux sentir. Là, il est relativement facile de distinguer ce qui est externe de ce qui est <span class='term'>interne</span>: le fait qu’il a passé de Perse en Europe est d’ordre externe ; <span class='term'>interne</span>, au contraire, tout ce qui concerne le système et les règles. Si je remplace des pièces de bois par des pièces d’ivoire, le changement est indifférent pour le système : mais si je diminue ou augmente le nombre des pièces, ce changement-là atteint profondément la « grammaire » du jeu. Il n’en est pas moins vrai qu’une certaine attention est nécessaire pour faire des distinctions de ce genre. Ainsi dans chaque cas on posera la question de la nature du phénomène, et pour la résoudre on observera cette règle : est <span class='term'>interne</span> tout ce qui change le système à un degré quelconque.",
        e:
          'In internal linguistics the picture differs completely. Just any arrangement will not do. Language is a system that has its own arrangement- Comparison with chess will bring out the point. In chess, what is external can be separated relatively easily from what is internal. The fact that the game passed from Persia to Europe is external; against that, everything having to do with its system and rules is internal. If I use ivory chessmen instead of wooden ones, the change has no effect on the system, but if I decrease or <i style="color:gray">[p. 23]</i> increase the number of chessmen, this change has a profound effect on the "grammar" of the game. One must always distinguish between what is internal and what is external. In each instance one can determine the nature of the phenomenon by applying this rule: everything that changes the system in any way is internal.'
      }
    ],
    pp125127: [
      {
        rif: "CLG pages 125-127 = CLG/E 1461-1492",
        re: "W. Baskin pp.88-89 = CLG pp.125-127",
        p:
          "Mais de toutes les comparaisons qu’on pourrait imaginer, la plus démonstrative est celle qu’on établirait entre le jeu de la <span class='term'>langue</span> et une partie d’<b><u>échecs</u></b>. De part et d’autre, on est en présence d’un système de valeurs et on assiste à leurs modifications. Une partie d’<b><u>échecs</u></b> est comme une réalisation artificielle de ce que la <span class='term'>langue</span> nous présente sous une forme naturelle.",
        e:
          "But of all comparisons that might be imagined, the most friutful is the one that might be drawn between the functioning of language and a game of chess. In both instances we are confronted with a system of values and their observable modifications. A game of chess is like an artificial realization of what language offers in a natural form. "
      },
      {
        rif: "CLG pages 125-127 = CLG/E 1461-1492",
        re: "W. Baskin pp.88-89 = CLG pp.125-127",
        p:
          "Voyons la chose de plus près.<br /> D’abord un état du jeu correspond bien à un état de la langue. La valeur respective des pièces dépend de leur position sur l’échiquier, de même que dans la langue chaque terme a sa valeur par son opposition avec tous les autres termes.",
        e:
          "Let us examine the matter more carefully.<br /> First, a state of the set of chessmen corresponds closely to a state of language. The respective value of the pieces depends on their position on the chessboard just as each linguistic term derives its value from its opposition to all the other terms."
      },
      {
        rif: "CLG pages 125-127 = CLG/E 1461-1492",
        re: "W. Baskin pp.88-89 = CLG pp.125-127",
        p:
          "En second lieu, le système n’est jamais que momentané ; il varie d’une position à l’autre. Il est vrai que les valeurs dépendent aussi et surtout d’une convention immuable, la règle du jeu, qui existe avant le début de la partie et persiste après chaque coup. Cette règle admise une fois pour toutes existe aussi en matière de langue ; ce sont les principes constants de la sémiologie.",
        e:
          "In the second place, the system is always momentary; it varies from one position to the next. It is also true that values depend above all else on an unchangeable convention, the set of rules that exists before a game begins and persists after each move. Rules that are agreed upon once and for all exist in language too; they are the constant principles of semiology."
      },
      {
        rif: "CLG pages 125-127 = CLG/E 1461-1492",
        re: "W. Baskin pp.88-89 = CLG pp.125-127",
        p:
          "Enfin, pour passer d’un équilibre à l’autre, ou – selon notre terminologie – d’une synchronie à l’autre, le déplacement d’un pièce suffit ; il n’y a pas de remue-ménage général. Nous avons là le pendant du fait diachronique avec toutes ses particularités. En effet : <br />a) Chaque coup d’<b><u>échecs</u></b> ne met en mouvement qu’une seule pièce ; de même dans la langue les changements ne portent que sur des éléments isolés.<br /> b) Malgré cela le coup a un retentissement sur tout le système ; il est impossible au joueur de prévoir exactement les limites de cet effet. Les changements de valeurs qui en résulteront seront, selon l’occurrence, ou nuls, ou très graves, ou d’importante moyenne. Tel coup peut révolutionner l’ensemble de la partie et avoir des conséquences même pour les pièces momentanément hors de cause. Nous venons de voir qu’il en est exactement de même pour la langue. <br />c) Le déplacement d’une pièce est un fait absolument distinct de l’équilibre précédent et de l’équilibre subséquent. Le changement opéré n’appartient à aucun de ces deux états: or les états sont seuls importants.",
        e:
          "Finally, to pass from one state of equilibrium to the next, or— according to our terminology—from one synchrony to the next, only one chesspiece has to be moved; there is no general rummage. Here we have the counterpart of the diachronic phenomenon with all its peculiarities. In fact: <br /> (a) In each play only one chesspiece is moved; in the same way in language, changes affect only isolated elements. <br /> <i style='color:gray'>[p. 89]</i> (b) In spite of that, the move has a repercussion on the whole system; it is impossible for the player to foresee exactly the extent of the effect. Resulting changes of value will be, according to the circumstances, either nil, very serious, or of average importance. A certain move can revolutionize the whole game and even affect pieces that are not immediately involved. We have just seen that exactly the same holds for language. <br /> (c) In chess, each move is absolutely distinct from the preceding and the subsequent equilibrium. The change effected belongs to neither state: only states matter."
      },
      {
        rif: "CLG pages 125-127 = CLG/E 1461-1492",
        re: "W. Baskin pp.88-89 = CLG pp.125-127",
        p:
          "Dans une partie d’<b><u>échecs</u></b>, n’importe quelle position donnée a pour caractère singulier d’être affranchie de ses antécédents ; il est totalement indifférent qu’on y soit arrivé par une voie ou par une autre ; celui qui a suivi toute la partie n’a pas le plus léger avantage sur le curieux qui vient inspecter l’état du jeu au moment critique ; pour décrire cette position, il est parfaitement inutile de rappeler ce qui vient de se passer dix secondes auparavant. Tout ceci s’applique également à la langue et consacre la distinction radicale du diachronique et du synchronique. La parole n’opère jamais que sur un état de langue, et les changements qui interviennent entre les états n’y ont eux-mêmes aucune place.",
        e:
          "In a game of chess any particular position has the unique char¬acteristic of being freed from all antecedent positions; the route used in arriving there makes absolutely no difference; one who has followed the entire match has no advantage over the curious party who comes up at a critical moment to inspect the state of the game; to describe this arrangement, it is perfectly useless to recall what had just happened ten seconds previously. All this is equally applicable to language and sharpens the radical distinction between diachrony and synchrony. Speaking operates only on a language-state, and the changes that intervene between states have no place in either state. "
      },
      {
        rif: "CLG pages 125-127 = CLG/E 1461-1492",
        re: "W. Baskin pp.88-89 = CLG pp.125-127",
        p:
          "Il n’y a qu’un point où la comparaison soit en défaut ; le joueur d’<b></u>échecs</u></b> a l’intention d’opérer le déplacement et d’exercer une action sur le système ; tandis que la langue ne prémédite rien ; c’est spontanément et fortuitement que ses pièces à elle se déplacent – ou plutôt se modifient ; l’umlaut de Hunde pour hanti, de Gäste pour gasti <i style='colro:gray'>[voir p. 120]</i>, a produit une nouvelle formation de pluriel, mais a fait surgir aussi une forme verbale comme trägt pour tragit, etc. Pour que la partie d’<b><u>échecs</u></b> ressemblât en tout point au jeu de la langue, il faudrait supposer un joueur inconscient ou inintelligent. D’ailleurs cette unique différence rend la comparaison encore plus instructive, en montrant l’absolue nécessité de distinguer en linguistique les deux ordres de phénomènes. Car, si des faits diachroniques sont irréductibles au système synchronique qu’ils conditionnent, lorsque la volonté préside à un changement de ce genre, à plus forte raison le seront-ils lorsqu’ils mettent une force aveugle aux prises avec l’organisation d’un système de signes.",
        e:
          "At only one point is the comparison weak: the chessplayer intends to bring about a shift and thereby to exert an action on the system, whereas language premeditates nothing. The pieces of language are shifted—or rather modified—spontaneously and fortuitously. The umlaut of Hdnde for hanti and Gdste for gasti (see p. 83) produced a new system for forming the plural but also gave rise to verbal forms like tragt from tragit, etc. In order to make the game of chess seem at every point like the functioning of language, we would have to imagine an unconscious or unintelligent player. This sole difference, however, makes the comparison even more instructive by showing the absolute necessity of making a distinction between the two classes of phenomena in linguistics. For if diachronic facts cannot be reduced to the synchronic system which they condition when the change is intentional, all the more will they resist when they set a blind force against the organization of a system of signs."
      }
    ],
    pp135: [
      {
        rif: "CLG page 135 = CLG/E 1589",
        re: "W. Baskin p.95 = CLG p.135",
        p:
          "En linguistique comme dans le jeu d’échecs <i style='color:gray'><a href='testi.html?rif=pp125127' style='color:gray'>[voir p. 125 sv.]</a></i>, il y a des règles qui survivent à tous les événements. Mais ce sont là des principes généraux existants indépendamment des faits concrets; des qu’on parle de faits particuliers et tangibles, il n'y a pas de point de vue <span class='term'>panchronique</span>.",
        e:
          "In linguistics as in chess <i style='color:gray'>[see pp. 88 ff.]</i> there are rules that outlive all events- But they are general principles existing independently of concrete facts. When we speak of particular, tangible facts, there is no panchronic viewpoint."
      }
    ],
    pp149: [
      {
        rif: "CLG page 149 = CLG/E 1750",
        re: "W. Baskin p.107 = CLG p.149",
        p:
          "Mais de même que le jeu d’<b><u>échecs</u></b> est tout entier dans la combinaison des différentes pièces, de même la <span class='term'>langue</span> a le caractère d’un système basé complètement sur l’opposition de ses unités concrètes. On ne peut ni se dispenser de les connaitre, ni faire un pas sans recourir à elles ; et pourtant leur délimitation est un problème si délicat qu’on se demande si elles sont réellement données.",
        e:
          "But just as the game of chess is entirely in the combination of the different chess pieces, language is characterized as a system based entirely on the opposition of its concrete units. We can neither dispense with becoming acquainted with them nor take a single step without coming back to them; and still, delimiting them is such a delicate problem that we may wonder at first whether they really exist."
      }
    ],
    pp153154: [
      {
        rif: "CLG pages 153-154 = CLG/E 1803-1816",
        re: "W. Baskin pp.110-111 = CLG pp.153-154",
        p:
          "C. Enfin, toutes les notions touchées dans ce paragraphe ne différent pas essentiellement de ce que nous avons appelé ailleurs des valeurs. Une nouvelle comparaison avec le jeu d’<b><u>échecs</u></b> nous le fera comprendre <i style='color:gray'><a href='testi.html?rif=pp125127' style='color:gray'>[voir p. 125 sv.]</a></i>. Prenons un cavalier : est-il à lui seul un élément du jeu ? Assurément non, puisque dans sa matérialité pure, hors de sa case et des autres conditions du jeu, il ne représente rien pour le joueur et ne devient élément réel et concret qu’une fois revêtu de sa valeur et faisant corps avec elle. Supposons qu’au cours d’une partie cette pièce vienne à être détruite ou égarée : peut-on la remplacer par une <i style='color:gray'>[p.154]</i> autre équivalente ? Certainement : non seulement un autre cavalier, mais même une figure dépourvue de toute ressemblance avec celle-ci sera déclarée identique, pourvu qu’on lui attribue la même valeur. On voit donc que dans les systèmes sémiologiques, comme la <span class='term'>langue</span>, où les éléments se tiennent réciproquement en équilibre selon des règles déterminées, la notion d’identité se confond avec celle de valeur et réciproquement.",
        e:
          "C. Finally, not every idea touched upon in this chapter differs basically from what we have elsewhere called values. A new comparison with the set of chessmen will bring out this point (see pp. 88 ff.). Take a knight, for instance. By itself is it an element in the game? Certainly not, for by its material make-up—outside its square and the other conditions of the game—it means nothing to the player; it becomes a real, concrete element only when endowed with value and wedded to it. Suppose that the piece happens to be destroyed or lost during a game. Can it be replaced by an equivalent piece? Certainly. Not only another knight but even a figure shorn of any resemblance to a knight can be declared identical provided the same value is attributed to it. We see then that in semiological systems like language, where elements hold each other in equilibrium in accordance with fixed rules, the notion of identity blends with that of value and vice versa."
      },
      {
        rif: "CLG pages 153-154 = CLG/E 1803-1816",
        re: "W. Baskin pp.110-111 = CLG pp.153-154",
        p:
          "Voilà pourquoi en définitive la notion de valeur recouvre celles d’unité, d’entité concrète et de réalité. Mais s’il n’existe aucune différence fondamentale entre ces divers aspects, il s’ensuit que le problème peut être pose successivement sous plusieurs formes. Que l’on cherche à déterminer l’unité, la réalité, l’entité concrète ou la valeur, cela reviendra toujours à poser la même question centrale qui domine toute la linguistique statique.",
        e:
          "In a word, that is why the notion of value envelopes the notions of unit, concrete entity, and reality. But if there is no fundamental difference between these diverse notions, it follows that the problem can be stated successively in several ways. Whether we try to define the unit, reality, concrete entity, or value, we always come back to the central question that dominates all of static linguistics."
      },
      {
        rif: "CLG pages 153-154 = CLG/E 1803-1816",
        re: "W. Baskin pp.110-111 = CLG pp.153-154",
        p:
          "Au point de vue pratique, il serait intéressant de commencer par les unités, de les déterminer et de rendre compte de leur diversité en les classant. Il faudrait chercher sur quoi se fonde la division en mots - car le mot, malgré la difficulté qu’on a à le définir, est une unité qui s’impose à l’esprit, quelque chose de central dans le mécanisme de la langue; - mais c’est là un sujet qui remplirait à lui seul un volume. Ensuite on aurait à classer les sous-unités, puis les unités plus larges, etc. En déterminant ainsi les éléments qu’elle manie, notre science remplirait sa tache tout entière, car elle aurait ramené tous les phénomènes de son ordre a leur premier principe. On ne peut pas dire qu’on se soit jamais placé devant ce problème central, ni qu’on en ait compris la portée et la difficulté ; en matière de langue on s’est toujours contenté d’opérer sur des unités mal définies.",
        e:
          "It would be interesting from a practical viewpoint to begin with units, to determine what they are and to account for their diversity by classifying them. It would be necessary to search for the reason for dividing language into words—for in spite of the difficulty of defining it, the word is a unit that strikes the mind, something central in the mechanism of language—but that is a subject which by itself would fill a volume. Next we would have to classify the subunits, then the larger units, etc. By determining in this way the elements that it manipulates, synchronic linguistics would completely fulfill its task, for it would relate all synchronic phenomena to their fundamental principle. It cannot be said that this basic problem has ever been faced squarely or that its scope and difficulty have been understood; in the matter of language, people have always been satisfied with ill-defined units."
      },
      {
        rif: "CLG pages 153-154 = CLG/E 1803-1816",
        re: "W. Baskin pp.110-111 = CLG pp.153-154",
        p:
          "Cependant, malgré l’importance capitale des unités, il est préférable d’aborder le problème par le côté de la valeur, parce que c’est, selon nous, son aspect primordial.",
        e:
          "Still, in spite of their capital importance, it is better to approach the problem of units through the study of value, for in my opinion value is of prime importance."
      }
    ],
    pp185: [
      {
        rif: "CLG page 185 = CLG/E 2127",
        re: "W. Baskin",
        p:
          "La linguistique statique ou description d’un état de <span class='term'>langue</span> peut être appelée grammaire. dans le sens très précis, et d’ailleurs usuel, qu’on trouve dans les expressions «grammaire du jeu d’<b><u>échec</u></b>», «grammaire de la Bourse», etc., où il s’agit d’un objet complexe et systématique, mettant en jeu des valeurs coexistantes.",
        e: "<b style='color:red'>missing text</b>"
      }
    ]
  };

  this.concordances = {
    clg: `<div id="luoghi_top_clg" class="luoghi top" style="text-align: center">LOCI (<u>11 items</u>)</div><div id="contexts_top_clg" class="result-item top" onclick="" style="text-align: center; font-weight: bold">CONTEXTS (searched for <u>échec</u> in CLG)</div>
    <div class="luoghi"><a href="testi.html?rif=pp43">p. 43 = CLG/E 417-420</a></div><div class="result-item" onclick=""><a href="testi.html?rif=pp43">comparaison avec le jeu d’<b>échecs</b> le fera mieux sentir</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp125127">pp. 125-127 CLG/E 1461-1492</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp125127">la langue et une partie d’<b>échecs</b>. De part et d’autre, on</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp125127">pp. 125-127 CLG/E 1461-1492</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp125127"> Une partie d’<b>échecs</b> est comme une réalisation artificielle.</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp125127">pp. 125-127 CLG/E 1461-1492</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp125127"> a) Chaque coup d’<b>échecs</b> ne met en mouvement qu’une seule pièce ;</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp125127">pp. 125-127 CLG/E 1461-1492</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp125127">Dans une partie d’<b>échecs</b>, n’importe quelle position donnée a pour</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp125127">pp. 125-127 CLG/E 1461-1492</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp125127">soit en défaut; le joueur d’<b>échecs</b> a </a> l’intention d’opérer</div>
    <div class="luoghi"><a href="testi.html?rif=pp125127">pp. 125-127 CLG/E 1461-1492</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp125127"> Pour que la partie d’<b>échecs</b> ressemblât en tout point au jeu de la langue,</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp135">p. 135 = CLG/E 1589</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp135">linguistique comme dans le jeu d’<b>échecs</b>, il y a des règles</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp149">p. 149 = CLG/E 1750</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp149"> Mais de même que le jeu d’<b>échecs</b> est tout entier dans</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp153154">p. 153-154 = CLG/E 1803-1816</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp153154"> comparaison avec le jeu d’<b>échecs</b> nous le fera comprendre (voir p. 125 sv.)</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp185">p. 185 = CLG/E 2127</a></div> <div class="result-item" onclick=""><a href="testi.html?rif=pp185"> les expressions « grammaire du jeu d’<b>échec</b>», «grammaire de la Bourse» </a></div>
  `,
    lectures: `<div id="luoghi_top_lectures" class="luoghi top" style="text-align: center">LOCI (<u>10 items</u>)</div><div id="contexts_top_lectures" class="result-item top" onclick="" style="text-align: center; font-weight: bold">CONTEXTS (searched for <u>échec</u> in LECTURES)</div> 
    <div class="luoghi"> <a href="testi.html?rif=pp1617g">Godel cfs 15 pp. 16-17</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp1617g">mais par leur position relative, comme dans un jeu d'<b>échecs</b>.</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp3233g">Godel cfs 15 pp. 32-33</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp3233g">oppositions (comme un jeu d’<b>échecs</b> avec les différentes combinaisons</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp47g">Godel cfs 15 pp. 47</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp47g">La comparaison du jeu d’<b>échecs</b> n’est pas sans intérêt :</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp47g">Godel cfs 15 pp. 47</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp">l’histoire du jeu d’<b>échecs</b> : ainsi son passage de Perse</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp48g">Godel cfs 15 pp. 48 </a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp48g">prenons ce cavalier du jeu d’<b>échecs</b> : est-ce un élément</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp48g">Godel cfs 15 pp. 48 </a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp48g">élément concret du jeu d’<b>échecs</b>? Assurément non, puisque,</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp48g">Godel cfs 15 pp. 48 </a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp48g">totalement rien pour le jeu d’<b>échecs</b>. Ce qui sera </a></div>
    <div class="luoghi"><a href="testi.html?rif=pp48g">Godel cfs 15 pp. 48 </a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp48g"> pour le jeu d’<b>échecs</b>, pourvu qu’elles aient même </a></div>
    <div class="luoghi"><a href="testi.html?rif=pp92g">Godel cfs 15 pp. 92 </a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp92g"> intituler un traité du jeu d’<b>échecs</b> : grammaire du jeu</a></div>
    <div class="luoghi"><a href="testi.html?rif=pp92g">Godel cfs 15 pp. 92 </a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=pp92g">grammaire du jeu d’<b>échecs</b>; de même, la grammaire de la Bourse</a></div>
    `,
    attempts: `<div id="luoghi_top_attempts" class="luoghi top" style="text-align: center">LOCI (<u>15 items</u>)</div><div id="contaxts_top_attempts" class="result-item top" onclick="" style="text-align: center; font-weight: bold">CONTEXTS (searched for <u>échec</u> in ATTEMPTS)</div>
    <div class="luoghi"><a href="testi.html?rif=ff135">BGE AdS 372/4 ff. 135</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff135">façon que dans le jeu d'<b>échecs</b> il serait absurde de demander</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff135">BGE AdS 372/4 ff. 135</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff135">le considérait hors du jeu d'<b>échecs</b>; de la même façon, il n'y a pas</a></div>
    <div class="luoghi"><a href="testi.html?rif=f1v">BGE MS fr. 3951/12 f. 1v</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=f1v">Comparaison de partie d’<b>échecs</b>.</a></div>
    <div class="luoghi"> <a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">situations d'une partie d'<b>échecs</b>. Or chacune de ces situations</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">la langue comme UNE POSITION d'<b>échecs</b> (qui n'aurait ni antécédent ni suite),</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">qu'il y avait DES COUPS d'<b>échecs</b>, s'est moquée de ses devanciers</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">la complète idée de la partie d'<b>échecs</b>, comportant à la fois les positions</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">qui est dans le jeu d'<b>échecs</b> la convention initiale reparaissant</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">du pluriel est i. Coup d'<b>échec</b>, donc nouvelle position des termes</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">différentes la même position d'<b>échecs</b> à un moment donné.</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">ce qu'est une position d'<b>échecs</b> et ce qu'est un coup</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff0911">BGE MS fr. 3951/10 ff. 9-11</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff0911">et ce qu'est un coup d'<b>échecs</b> (supposé inepte) comme ou même</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff3233">BGE MS fr. 3951/10 ff. 32-33</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff3233">Dans une partie d'<b>échecs</b>, n'importe quelle position donnée a pour</a></div>
    <div class="luoghi"><a href="testi.html?rif=ff3233">BGE MS fr. 3951/10 ff. 32-33</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=ff3233">peut comporter la position d'<b>échecs</b> dont nous parlions. Mais nous</a></div>
    <div class="luoghi"><a href="testi.html?rif=f16v">BGE MS fr. 3951/15 f. 16v</a></div>
    <div class="result-item" onclick=""><a href="testi.html?rif=f16v">Dans la comparaison du jeu d’<b>échecs</b>, il y a ceci de juste que la fonction (valeur)</a></div>
    `
  };
}

(() => {
  console.log("in js");
})();

console.log("pre-costr app saussure");
var app = new APPsaussure();
window.app = app;
var doc = document;
