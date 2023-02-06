// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//     MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
//     MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card / schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Ecco i dati dei membri dei team:
// Wayne Barnett		Founder & CEO			wayne - barnett - founder - ceo.jpg
// Angela Caroll		Chief Editor			angela - caroll - chief - editor.jpg
// Walter Gordon		Office Manager			walter - gordon - office - manager.jpg
// Angela Lopez		Social Media Manager	angela - lopez - social - media - manager.jpg
// Scott Estrada		Developer				scott - estrada - developer.jpg
// Barbara Ramos		Graphic Designer		barbara - ramos - graphic - designer.jpg


// ARRAY DI OGGETTI 

const membri = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
        getNome() {
            return this.nome + ' ' + this.cognome;
        }
    },

    {
        nome: "Angela",
        cognome: "Caroll",
        ruolo: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
        getNome() {
            return this.nome + ' ' + this.cognome;
        }
    },

    {
        nome: "Walter",
        cognome: "Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
        getNome() {
            return this.nome + ' ' + this.cognome;
        }
    },

    {
        nome: "Angela",
        cognome: "Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
        getNome() {
            return this.nome + ' ' + this.cognome;
        }
    },

    {
        nome: "Scott",
        cognome: "Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg",
        getNome() {
            return this.nome + ' ' + this.cognome;
        }
    },

    {
        nome: "Barbara",
        cognome: "Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
        getNome() {
            return this.nome + ' ' + this.cognome;
        }
    },

]

// ELEMENTI HTML 
const cardListEl = document.getElementById('card-list');

// CICLO CON PRINT DELLA CARD 
for (const membro of membri) {

    cardListEl.innerHTML += `
    				<div class="card m-2 p-0 col-3">
					<img src="./img/${membro.img}" class="card-img-top" alt="${membro.nome}">
					<div class="card-body">
						<p class="card-text">${membro.getNome()} <br> ${membro.ruolo}</p>
					</div>
				</div>
    `
}