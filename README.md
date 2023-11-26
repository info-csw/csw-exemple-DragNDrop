# Projet : Drag N Drop

## Introduction
Le Drag N Drop, c'est tout simple.

Il faut donner à l'élément que l'on veut déplacer la propriété `draggable`.
Ensuite, on définit ce qui va se produire lorsque l'élément est draggé avec l'événement `dragstart` et la méthode `setData()`.

On définit ensuite ce qui va se produire lorsque l'élément est déposé avec les événements `dragover` et  `drop`, et la méthode `getData()`.

## Objectifs
On va définir deux zones délimitées par des bordures, une zone de départ et une zone d'arrivée.  
On va pouvoir déplacer des éléments de la zone de départ vers la zone d'arrivée, et vice-versa.