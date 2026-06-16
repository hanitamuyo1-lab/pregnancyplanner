"use client";
import { useState, useEffect, useRef } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "./firebase";
import { useAuth } from "./AuthContext";

function readLocal<T>(key: string, initial: T): T {
  if (typeof window === "undefined") return initial;
  try {
    const s = localStorage.getItem(key);
    if (s) return JSON.parse(s) as T;
  } catch {}
  return initial;
}

export function useFirestoreStore<T>(key: string, initial: T): [T, (v: T) => void] {
  const { user } = useAuth();
  const [value, setValue] = useState<T>(() => readLocal(key, initial));
  const loadedUidRef = useRef<string | null>(null);

  useEffect(() => {
    const db = getFirebaseDb();
    if (!user || !db) {
      loadedUidRef.current = null;
      return;
    }
    if (loadedUidRef.current === user.uid) return;
    loadedUidRef.current = user.uid;

    const docRef = doc(db, "users", user.uid, "data", key);
    getDoc(docRef).then((snap) => {
      if (snap.exists()) {
        const data = snap.data().value as T;
        setValue(data);
        try { localStorage.setItem(key, JSON.stringify(data)); } catch {}
      } else {
        // First sign-in: push existing localStorage data up to Firestore
        const local = readLocal(key, initial);
        setDoc(docRef, { value: local }).catch(() => {});
      }
    }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, key]);

  const set = (v: T) => {
    setValue(v);
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
    const db = getFirebaseDb();
    if (user && db) {
      const docRef = doc(db, "users", user.uid, "data", key);
      setDoc(docRef, { value: v }).catch(() => {});
    }
  };

  return [value, set];
}
