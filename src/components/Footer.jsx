import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <a className="btn-link" href="https://json-api.uz">
              json-api.uz
            </a>
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
