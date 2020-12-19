export interface Utilisateur {
  email: string;
  motdepasse: string;
  nom: string;
  prenom: string;
  telephone: string;
  profil: 'INVITE', 'OPERATEUR', 'ADMINISTRATEUR';
}
