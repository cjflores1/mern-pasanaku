const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// const DB_HOST = process.env.DB_HOST || "mongodb+srv://charlesflorescalle:gkicdK2VPIDZ0Q0h@cluster0.saz6nxn.mongodb.net/";
const DB_HOST = process.env.DB_HOST || "mongodb://127.0.0.1/";
const DB_DATABASE = process.env.DB_DATABASE || "pasanaku";
const DB_USER = process.env.DB_USER || "charlesflorescalle";
const DB_PASSWORD = process.env.DB_PASSWORD || "gkicdK2VPIDZ0Q0h";

const PORT = process.env.PORT || 3000;

module.exports = {
    FRONTEND_URL,
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    PORT
}