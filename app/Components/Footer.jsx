import React from "react";

function Footer() {
  return (
    <footer className="container-fluid seccionfooter">
      <div>
        <div className="redes-sociales mb-3">
          <a
            href="https://www.facebook.com/share/14cspxpymXu/"
            className="icono"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/sebas_navaxx.p?igsh=MXZ0M215dHg4NjNyZA=="
            className="icono"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/snpnavarro90?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            className="icono"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <hr className="linea-footer" />
        <p>© 2026 Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;