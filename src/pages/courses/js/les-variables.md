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
  
  Les varibles servent à garder en mémoire une valeur (de tout type), la reutiliser,
  la modifier et finalement être suprimer.
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

  ### Convention de nommage
    Elle doit débuter avec une lettre, un tiret du bas, un symbole dollar et
    peut contenir des caractères numériques, alphabétiques et des tirets bas
    voire des caractères Unicode.
  ### Pointer
  ### Copie