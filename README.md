# Projet DevOps – Objectifs mensuels en Java

## 📌 Description

Ce projet est une application simple développée en **Java** dans le cadre d’un projet DevOps.  
Elle permet d’afficher un objectif mensuel fixe, selon le mois sélectionné en paramètre dans Jenkins.  
Le pipeline Jenkins interagit avec l’utilisateur pour lui demander s’il a atteint cet objectif.

Le projet illustre l’intégration continue (CI) avec Jenkins, l’automatisation du déploiement (CD), et l’interaction directe grâce à la directive `input {}`.

---

## 🎯 Objectifs mensuels

| Mois        | Objectif |
|-------------|----------|
| **Janvier**   | Rédiger un journal intime. |
| **Février**   | Redécorer la maison pour se sentir bien. |
| **Mars**      | Prendre soin de soi. |
| **Avril**     | Soyez gentil. |
| **Mai**       | Faites quelque chose que vous n’avez jamais fait auparavant. |
| **Juin**      | Passez du temps avec le vôtre. |
| **Juillet**   | Aller à un concert et danser. |
| **Août**      | Dormir une nuit sur la plage. |
| **Septembre** | Découvrez le monde. |
| **Octobre**   | Étudiez. |
| **Novembre**  | Apprendre à jouer d'un instrument. |
| **Décembre**  | Respirez consciencieusement. |

---

## ⚙️ Exécution via Jenkins

Le pipeline Jenkins :
- Demande à l’utilisateur de sélectionner un mois (**paramètre `MOIS`**)
- Affiche l’objectif correspondant
- Pose la question suivante via une fenêtre pop-up :
  > _“As-tu réalisé l’objectif suivant : Prendre soin de soi ?”_
- Affiche un message de motivation ou de félicitations selon la réponse

---

## 🖥️ Commandes pour exécuter le projet localement

### 1. Compiler le programme :
```bash
javac src/Main.java -d bin
