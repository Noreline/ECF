// Il faut cliquer 2 fois afin d'initialiser la fonction
// Cacher le bouton "ajouter" et déclarer le formulaire
var a;
function afficherCacher()
{
    if(a==1)
        {
            document.getElementById("form").style.display="inline";
            return a=0
        }

        else
        {
            document.getElementById("form").style.display="none";
            return a=1;
        }
}
// tableau
var films = [
["Deadpool",2016,"Tim Miller","<button>Supprimer"],
["Spiderman",2002,"Sam Raimi","<button>Supprimer"],
["Scream",1996,"Wes Craven","<button>Supprimer"],
["It: Chapter 1",2019,"Andy Muschietti","<button>Supprimer"],],

table = document.getElementById("table");
        
for(var i = 1; i < table.rows.length; i++)
{    for(var j = 0; j < table.rows[i].cells.length; j++){ 
    table.rows[i].cells[j].innerHTML = films[i - 1][j];
    }
  }   
                
// Verifie que la saisie n'est pas vide
        function checkEmptyInput()
        {
            var estVide = false,
                titre = document.getElementById("titre").value,
                annee = document.getElementById("annee").value,
                real = document.getElementById("real").value;
        
            if(titre === ""){
                alert("Le titre du film doit être renseigné");
                estVide = true;
            }
            else if(annee === ""){
                alert("L'année du film doit être renseignée");
                estVide = true;
            }
            else if(real === ""){
                alert("Le nom et prénom du réalisateur doivent être renseignés");
                estVide = true;
            }
            return estVide;
        }
        
        //ajouter une ligne
        function ajouterUneLigne()
        {
          
            if(!checkEmptyInput()){

            var newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.inserCell (3),
                
                titre = document.getElementById("titre").value,
                annee = document.getElementById("annee").value,
                real = document.getElementById("real").value;
                bouton = document.getElementsById ("bouton").value
                
        
            cell1.innerHTML = titre;
            cell2.innerHTML = annee;
            cell3.innerHTML = real;
            cell4.innerHTML = bouton;
           
            selectedRowToInput();
        }
        }

var buttonSuppr1 = document.createElement('button')
buttonSuppr1.innerHTML ='Supprimer'

var body = document.getElementById("buttonSuppr1");
body.appendChild(button);
