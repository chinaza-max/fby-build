"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class ServerConfig {
    constructor() {
        this.NODE_ENV = "development";
        this.PORT = 3000;
        this.ALLOWED_ORIGINS = "*";
        this.SALT_ROUNDS = 10;
        this.TOKEN_SECRET = "77E85EE9786D449A813C5D5BC08CAEDE71E71FCA3FB3B9300DDC9B831CC73085";
        this.TOKEN_EXPIRES_IN = "3h";
        this.TOKEN_ISSUER = "YNET";
        this.DB_USERNAME = "fbyteamschedule_site";
        this.DB_PASSWORD = "St57@#Tg";
        this.DB_HOST = "localhost";
        this.DB_PORT = process.env.DB_PORT;
        this.DB_NAME = "fbyteamschedule_fby1";
        this.DB_URI = '';
        this.FIREBASE_TYPE ="service_account";
        this.FIREBASE_PROJECT_ID = "fyb-security";
        this.FIREBASE_PRIVATE_KEY_ID ="c835ac84107bba9057ad53ddb5dd43cd70edb494";
        this.FIREBASE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDhicFc+QU+iR/8\nEeZJ9oKRP1y7vJUSOSof+KUDapKWIHScswMbtYuxHr/6c0PVHLCOQEXSz1q7bJkL\nZB5EjgzLY05TLRJn+5CTc5O/MEj85rEO9h7F8/x5fsEUXvjqRUYSJ7MglkzrKbLD\nMdN+ph0O8tfJC2gdr7GF+SI1Vj18MnCmtsToY9nC9dLMYA36BM9IGNg3F0DpLhJF\nevExmXNtBHKrCFVpVkM8XqB7MXzBSZd/d3UpWljEsA5ELGRriEAoRtR19ibyf/0N\nD2pmiwML/0aNGUAq5B2Z/VGZ+95KrJLEkZN6euJSw/ehi1Eoha1JH+4r2QWehCRO\nZuY3zuvHAgMBAAECggEATuYggVRSG9bfnBBs9fnpIkO+vqRRp/7ceDPFEkVhg2hW\nMw1CrJpdhHhD46sYE0EGmLTuWDmWvZNXlM8Q8Z2Z5zrVxy4wzrSIFrUrfgo3tlVD\non7CNDDO5XfMtsIkpNvYD/jYZrF9thSvxy4ylQ8qgjS8/UVixmPUoBAQAgWp27yn\nI4+VGbor5PhmnIHwWZeEm/8XLdu2SLn7iCH16tX4bdmOZb8r88Aszbp0uX6U8F0c\nuJQsTJAFoWTj1AeP/7W3CORAFbiJzOWVmm8jlLh/qWeBv2mRhYqDuyxU83C3Yp0j\nQFA+cZFYT0CTYHPoyMwUmksw/AcZYy9ldNFEuM49WQKBgQD9ofqb1B+AScwZj2Jm\nhKWLe6qp9/H4pG4Qyxzm1PCeFsSSPbj/HwoCYayjuH6ub6wsaD6yaYVYSo2PA/xb\nSZ2gknc6XcZDaJW2Qi2qH951RP5tBSHEtXrE6nhUGM2ee5+x9QVhgjy5HG9xPLWy\nD3BGu+FhoAKhT79DQG0H5oyzTwKBgQDjpKXpASiiQ31fp0wb3tlHxJhaZeeJpCrH\nZWoJtJaeUs4QMTf7HTly8OP+zfNTEsnGV/sWB3nRM1/1X1Y07EcU6XhLWIOBjRq3\nFCr+vD2/h3GjEbyA6X0NNMZ2HjPLkNlkiEqGPhP86NmKN8xeIZaN+w9QL3K1DtFJ\n5uz1v6oCCQKBgAz2+K56e1m9a/dqgucmpKeqnKCvkejZzt6A42tROzN5inbHPOud\nlI9mmsKLrb4Q60Yh1gKcrjpDJVVIKOAptSr+EaYkIPxVHkIAxADMPDzWWAMOnhlG\nBY6HRbtWwTv2qcUY9ztywtPbhj7NkaQWcfDLrculuDyyrN4tLuWWfV61AoGAfKLn\nG73Aq6bb/AUzDIdk24BuEgB9VsUFjwqdlhbD6IdZv0/TYK/NhnsRua61LKS6yNfe\n517MeZfxT/0UzAEZof96F3as+b9yAw8Nw075V+Ymd6v8U3CDQTnF92Ht5eS2we5F\nL17Jvs0WXjDSui8VqULuTW7NFQi52gaPcrWvtVECgYBBpNZaBt4vm19PAxEVsdyb\nGjDKmlai9TUJ1bZ2G2i3oLxnw7ID+m/JEvVBgk5mK+yUH1LpAl10mRr1OQ4c5Mpu\nCn8jvxWTPKVo7dqRmIagvUHZWPxAqU+Mu+G2YY4xzUVHViqlFHrYOtb/k2HGsC8W\nV4eLhTDrbbtoRi4F+9DfPA==\n-----END PRIVATE KEY-----\n";
        this.FIREBASE_CLIENT_EMAIL ="firebase-adminsdk-h6p49@fyb-security.iam.gserviceaccount.com";
        this.FIREBASE_CLIENT_ID = "108037013149848109698";
        this.FIREBASE_AUTH_URI ="https://accounts.google.com/o/oauth2/auth";
        this.FIREBASE_TOKEN_URI = "https://oauth2.googleapis.com/token";
        this.FIREBASE_AUTH_PROVIDER_X509_CERT_URL = "https://www.googleapis.com/oauth2/v1/certs";
        this.FIREBASE_CLIENT_X509_CERT_URL ="https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h6p49%40fyb-security.iam.gserviceaccount.com";
        this.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
        this.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
        this.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
        this.CLOUDINARY_FOLDER_NAME = process.env.CLOUDINARY_FOLDER_NAME;
        this.EMAIL_HOST ="smtp-relay.sendinblue.com";
        this.EMAIL_PORT = 465;
        this.EMAIL_USER ="fby.platform@gmail.com";
        this.EMAIL_PASS = "18K2VdyTLQ0NRMW3";
        this.EMAIL_SENDER = "fby.platform@gmail.com";
        this.STRIPE_PUBLIC_KEY = String(process.env.STRIPE_PUBLIC_KEY);
        this.STRIPE_SECRET_KEY = String(process.env.STRIPE_SECRET_KEY);
        this.STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
        this.GOOGLE_KEY = "AIzaSyAqoyaPtHf5BcoTX_iNvCzXjVj6BpGl2do";
        this.DOMAIN = "http://fbyteamschedule.com:3000";
    }
}
exports.default = new ServerConfig();
//# sourceMappingURL=server.config.js.map