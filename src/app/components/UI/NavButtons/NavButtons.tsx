"use client";
import Link from "next/link";
import { useAuth } from "@/app/context/authContext";
import styles from "./NavButtons.module.css";

export default function NavButtons() {
  const { isAuthenticated,setAuthenticated,logout,user} = useAuth();
  // const logout = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3003/api/v1/users/logout", {
  //       method: "POST",
  //       credentials: "include",
  //     });

  //     if (res.ok) {
  //       setAuthenticated(false);
  //       window.location.reload();
  //     } else {
  //       console.error("Error logging out");
  //     }
  //   }
  //   catch (error) {
  //     console.error("Error logging out", error);
  //   }
  // };
  return (
    <section className={styles.container}>
      {!isAuthenticated ? (
        <>
          <Link href="/login">
            <button className={styles.loginButton}>Login</button>
          </Link>
          <Link href="/sign-up">
            <button className={styles.registerButton}>Register</button>
          </Link>
        </>
      ) : (<>
      <p>{user?.email}</p>
        <button className={styles.logoutButton} onClick={logout}>
          Logout
        </button>
      </>
      )}
    </section>
  );
}
