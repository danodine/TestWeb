"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="tech-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>

          <div className="text-center mb-4">
            <h2
              className="service-modal-title-future"
              style={{ fontSize: "2.5rem" }}
            >
              Escríbanos
            </h2>
            <p className="site-footer-description">
              Escribanos sus inquietudes
            </p>
          </div>

          <form className="form-container">
            <input
              type="text"
              placeholder="Nombre completo"
              className="tech-input"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="tech-input"
              required
            />
            <textarea
              placeholder="¿En qué podemos ayudarle?"
              className="tech-input"
              style={{ height: "120px" }}
              required
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="future-link"
              style={{ width: "100%", border: "none", cursor: "pointer" }}
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
