import React from 'react'
import './style.css'

const comandos = [
  "📩 Analisar E-mails",
  "🗓️ Lembrete de Agenda",
  "👥 Analisar CEO",
  "🌍 Analisar OMS",
  "🇺🇸 Praticar Inglês",
  "⚙️ Automatizar Tarefas",
  "🧠 Aprender Nova Tarefa"
]

export default function App() {
  const handleClick = (cmd) => {
    alert(`Oi Natália! Vou começar agora ${cmd.toLowerCase().replace(/^\W+/, '')}...`)
  }

  return (
    <div className="container">
      <div className="naf-box">
        <img src="/naf.png" alt="NAF personagem" className="naf-img" />
        <div className="text-zone">
          <h1>Sou a <span className="naf-text">NAF</span>, sua assistente virtual</h1>
          <p>Selecione uma ação e deixe comigo 💜</p>
          <div className="buttons">
            {comandos.map((cmd, index) => (
              <button key={index} onClick={() => handleClick(cmd)}>{cmd}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
