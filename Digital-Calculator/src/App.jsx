/*
*  2. Calculadora Digital
 Descripción: Calculadora científica con funcionalidad de historial
 Tareas Principales:
 * Operaciones aritméticas básicas,
 *  funciones de limpiar/resetear,
 *  soporte decimal
 Tareas Bonus: Funciones científicas (sin, cos, tan),
 *  historial de cálculos,
 *  soporte de teclado
 *  Stack Tecnológico: React + Vite, Styled
 Components APIs: Ninguna requerida
 Advertencia: Maneja casos edge como división por cero y
 precisión de punto flotante
* */
import './App.css'
import WindowCalculator from "./components/WindowCalculator.jsx";

function DigitalCalculator() {
  return(
      <div>
        <h1>Digital-calculator</h1>
        <WindowCalculator/>
      </div>
  )
}

export default DigitalCalculator
