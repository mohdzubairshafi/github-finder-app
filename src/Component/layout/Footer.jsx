import React from "react";

export default function Footer() {
  const footeryear = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center '>
      <div>
        <p>Copyright &copy; {footeryear} All right reserved</p>
      </div>
    </footer>
  );
}
