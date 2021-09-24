import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center">
      <p>
        <em>&copy; {year} William McCarty</em>
      </p>
    </footer>
  );
}
