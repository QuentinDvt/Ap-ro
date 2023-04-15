var myVariable = "";

// Obtenir la référence de la balise HTML
var myParagraph = document.getElementsByClassName("replace")[0];



const tokyoTime = moment.tz('Asia/Tokyo');
console.log(`Il est actuellement ${tokyoTime.format('HH:mm')} à Tokyo`);
var heureDebut = moment('17:00:00', 'HH:mm:ss');
var heureFin = moment('22:00:00', 'HH:mm:ss');
var tab = [ 
	{"pays": "Asia/Tokyo", "nom": "Theo",}, 
	{"pays": "Asia/Seoul", "nom": "Eva",}, 
	{"pays": "America/Toronto", "nom": "Quentin",},
	{"pays": "Europe/Paris", "nom": "INSA/Europe",}
	];

for( let i of tab ){
	const heureActuelle = moment.tz(i.pays);
	console.log(heureActuelle.format("HH"));
	console.log(i.nom);
	if (heureActuelle.format("HH") >= 17 && heureActuelle.format("HH") < 22) {
		if(myVariable === ""){
			myVariable += "C'est l'apéro chez : " 
		};
		console.log("ok")
		myVariable += i.nom + "\n";
	};
};
if(myVariable === ""){
	myVariable += "Il n'y a pas d'apéro actuellement 😭" 
};
// Écrire le contenu de la variable dans la balise HTML
myParagraph.innerHTML = myVariable;