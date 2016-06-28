/*
1. Liste des opérations supportées par le système (incluant les trois opérations à programmer) :
 - Création d'une nouvelle transaction (initiateur)
 - Ajout d'un café à la liste (commandeur/initiateur)
 - Retrait d'un café à la liste (commandeur/initiateur)
 - Lecture et suppression de la première entrée de la liste (initiateur)

2. Classer chaque opération par acteur :
 - L'initiateur
 		- Commander les cafés
 		- Ajout d'un café 
 		- Retrait d'un café 
		- Lecture et suppression de la première entrée de la liste

 - Le commandeur
 		- Ajout d'un café 
 		- Retrait d'un café 
 		
 - Le vendeur
 		- Prendre la commande

3. Lister les problèmatiques remarquées lors de l'analyse, les fonctinnalités qui semblent manquantes
ansi que les scénarios qui semblent non couverts ou incomplets.
- Il manque les formats de cafés, les ajouts de sucre, de lait et de crème
- Design d'interface 
- Type d'application mobile (Nuagique, en ligne, application installée sur le mobile)
- Dans l'application, est-ce qu'il y a des profils utilisateurs?
- Peut-on visualiser les anciennes commandes ou s'effacent-elles automatiquement?
*/

// Code ici...
//La correction du TP (Utiliser un tableau)
var liste = []; //Global scope 

//Création d'une nouvelle transaction
function newTransaction (){
	liste = [];
}

//Ajout d'un café par le commandeur
function addCoffee (nom){
	liste.push(nom);
}

/*
//Retrait d'un café
function addCoffee (nom){
	liste.pop(nom);
}
*/

//Lire la première entrée de la liste
function lecturePremierCafe(){
	var firstCoffee = list.shift();
	return premierCafe;
}

/*
//Supprimer la première entrée de la liste
function lecturePremierCafe(){
	var firstCoffee = list.pop();
	return premierCafe;
}
*/