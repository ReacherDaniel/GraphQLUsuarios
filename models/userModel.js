const { usersCollection } = require("../firebaseConfig");

// Validación básica de formato de correo electrónico
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getAll = async () => {
  const snapshot = await usersCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getById = async (id) => {
  const doc = await usersCollection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

const create = async (name, email) => {
  if (!isValidEmail(email)) throw new Error("Invalid email format.");
  const docRef = await usersCollection.add({ name, email });
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() };
};

const update = async (id, name, email) => {
  const docRef = usersCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;

  const updates = {};
  if (name !== undefined) updates.name = name;
  if (email !== undefined) {
    if (!isValidEmail(email)) throw new Error("Invalid email format.");
    updates.email = email;
  }

  await docRef.update(updates);
  const updatedDoc = await docRef.get();
  return { id: updatedDoc.id, ...updatedDoc.data() };
};

const remove = async (id) => {
  const docRef = usersCollection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) return null;

  await docRef.delete();
  return { id: doc.id, ...doc.data() };
};

module.exports = { getAll, getById, create, update, remove };
