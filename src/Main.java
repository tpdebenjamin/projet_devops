public class Main {

    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Veuillez spécifier un mois.");
            return;
        }

        String mois = args[0];
        System.out.println("Objectif pour le mois de " + mois + " :");
        
        switch (mois) {
            case "Janvier":
                System.out.println("Rediger un journal intime.");
                break;
            case "Février":
                System.out.println("Redecorer la maison pour se sentir bien.");
                break;
            case "Mars":
                System.out.println("Prendre soin de soi.");
                break;
            case "Avril":
                System.out.println("Soyez gentil.");
                break;
            case "Mai":
                System.out.println("Faites quelque chose que vous n’avez jamais fait auparavant.");
                break;
            case "Juin":
                System.out.println("Passez du temps avec le votre.");
                break;
            case "Juillet":
                System.out.println("Aller à un concert et danser.");
                break;
            case "Août":
                System.out.println("Dormir une nuit sur la plage.");
                break;
            case "Septembre":
                System.out.println("Decouvrez le monde.");
                break;
            case "Octobre":
                System.out.println("Etudiez.");
                break;
            case "Novembre":
                System.out.println("Apprendre à jouer d'un instrument.");
                break;
            case "Décembre":
                System.out.println("Respirez consciencieusement.");
                break;
            default:
                System.out.println("Mois non reconnu. Veuillez entrer un mois valide.");
        }
    }
}
