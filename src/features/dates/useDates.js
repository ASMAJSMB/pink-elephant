// src/features/dates/useDates.js
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase.js';  // Assure-toi que ce chemin est correct

export function useDates() {
  const [dates, setDates]   = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const q = collection(db, 'dates');
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setDates(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

  return { dates, loading };
}
