// ========================================
// DIGITAL L&S — CONEXIÓN CON FIREBASE
// ========================================

// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// Configuración de nuestro proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCctCNDtCb3ZF-dT9O-PDEcQTpFdZsNKqI",
  authDomain: "digital-ls.firebaseapp.com",
  projectId: "digital-ls",
  storageBucket: "digital-ls.firebasestorage.app",
  messagingSenderId: "69513625085",
  appId: "1:69513625085:web:dfb1971d524464408a6d94"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Autenticación del administrador
const auth = getAuth(app);

// Base de datos de películas
const db = getFirestore(app);

// Exportar conexiones
export { app, auth, db };