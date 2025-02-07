// Importation des modules nécessaires
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Initialisation de Firebase pour les notifications push
const serviceAccount = require('./chemin/vers/votre/firebase-service-account.json'); // Remplacez par votre fichier de clé Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Configuration de Nodemailer pour les emails
const transporter = nodemailer.createTransport({
    service: 'gmail', // Vous pouvez utiliser un autre service (ex : SendGrid)
    auth: {
        user: 'votre-email@gmail.com', // Remplacez par votre email
        pass: 'votre-mot-de-passe', // Remplacez par votre mot de passe
    },
});

// Fonction pour envoyer une notification push via FCM
const sendPushNotification = (userToken, message) => {
    const payload = {
        notification: {
            title: 'Rappel d'objectif',
            body: message,
        },
        token: userToken,
    };

    admin.messaging().send(payload)
        .then((response) => {
            console.log('Notification push envoyée avec succès:', response);
        })
        .catch((error) => {
            console.error('Erreur lors de l'envoi de la notification push:', error);
        });
};

// Fonction pour envoyer un email via Nodemailer
const sendEmailNotification = (userEmail, message) => {
    const mailOptions = {
        from: 'votre-email@gmail.com', // Remplacez par votre email
        to: userEmail,
        subject: 'Rappel d'objectif',
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l'envoi de l'email:', error);
        } else {
            console.log('Email envoyé avec succès:', info.response);
        }
    });
};

// Fonction pour récupérer les objectifs de l'utilisateur (simulée ici)
const getUserGoals = (userId) => {
    // Simule une base de données d'objectifs
    const goals = {
        'user1': ['Faire 10 000 pas', 'Lire un livre'],
        'user2': ['Méditer 10 minutes', 'Boire 2 litres d'eau'],
    };
    return goals[userId] || [];
};

// Fonction pour envoyer des rappels aux utilisateurs
const sendReminders = () => {
    // Simule une base de données d'utilisateurs
    const users = [
        { id: 'user1', email: 'user1@example.com', fcmToken: 'token-user-1', notificationPreference: 'push' },
        { id: 'user2', email: 'user2@example.com', fcmToken: 'token-user-2', notificationPreference: 'email' },
    ];

    users.forEach((user) => {
        const goals = getUserGoals(user.id);
        if (goals.length > 0) {
            const message = N\'oubliez pas vos objectifs : ${goals.join(', ')};

            if (user.notificationPreference === 'push' && user.fcmToken) {
                // Envoyer une notification push
                sendPushNotification(user.fcmToken, message);
            } else if (user.notificationPreference === 'email' && user.email) {
                // Envoyer un email
                sendEmailNotification(user.email, message);
            }
        }
    });
};

// Planification des rappels avec node-cron
// Rappel quotidien à 8h du matin
cron.schedule('0 8 * * ', () => {
    console.log('Envoi des rappels quotidiens...');
    sendReminders();
});

// Rappel hebdomadaire le lundi à 8h
cron.schedule('0 8 * 1', () => {
    console.log('Envoi des rappels hebdomadaires...');
    sendReminders();
});

// Démarrage du serveur (simulé ici)
console.log('Serveur de notifications démarré. En attente des rappels...');
