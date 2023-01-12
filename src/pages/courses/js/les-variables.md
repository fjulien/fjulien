---
layout: ../../../layouts/article.astro
title: Les variables
client: Self
publishDate: 2020-03-04 00:00:00
img: https://images.unsplash.com/photo-1548391350-1a529f6ea42d?fit=crop&w=1400&h=700&q=75
description: Base de Javascript
tags:
  - js
  - dev
  # <a
#     href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics#variables"
#     target="_blank">Mozilla variables</a
#   >
---

## Les variables
  
  Les variables sont des symboles qui associent un nom (l'identifiant) à une valeur. Les variables peuvent changer de valeur au cours du temps (dynamique) ou au contraire être figées (constante).

Plusieurs élements caratérise une variable:
- Son nom
- Son type
- Sa valeure
- Sa protée
- Sa visibilitée
- Sa durée de vie

  ### Les bases
  #### VAR
La déclaration <bold><abbr title="pour variable">var</abbr></bold> permet de
    déclarer une variable et éventuellement d'initialiser sa valeur.
  #### LET

    La déclaration <bold>let</bold> permet de déclarer une variable dont la portée
    est celle du bloc courant.

  #### CONST

    La déclaration <bold>const</bold> permet de créer une constante accessible uniquement
    en lecture. La valeur d'une constante ne peut pas être modifiée par des réaffectations
    ultérieuresou ou être re-déclarée. Par contre ça valeur reste mutable indirectement.

  ### Examples
  #### Déclaration

    <Code
      content="var newVar; let newLet; const newConst = '' // Must be init;"
    />
 
#### Assignation

    <Code content="newVar = 'hello world var!'; newLet = 'Hello world let';" />

### Typage

En javascript le typage est dynamique, ça veut dire qui ne peut changer à chaque réafectation

  ### Convention de nommage
    Elle doit débuter avec une lettre, un tiret du bas, un symbole dollar et
    peut contenir des caractères numériques, alphabétiques et des tirets bas
    voire des caractères Unicode.
  ### Les pointeurs
Dans tous les langages qui permettent la création dynamique d'adresses (new en C++ ou Java), la notion de variable est complétée par la notion de pointeur (type de donnée associé à une variable, dont les valeurs sont des adresses). L'adresse contenue dans une variable de type pointeur peut être inaccessible au programmeur (PHP, Java,Python), ou directement accessible (C++)[Comment ?].
  ### Copie