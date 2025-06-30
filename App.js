import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editando, setEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");
  const [prioridade, setPrioridade] = useState("Média");
  const [filtro, setFiltro] = useState("todas");
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, { texto: novaTarefa, concluida: false, prioridade, data: new Date().toLocaleString() }]);
    setNovaTarefa("");
    setPrioridade("Média");
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const marcarConcluida = (index) => {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };

  const iniciarEdicao = (index, texto) => {
    setEditando(index);
    setTextoEditado(texto);
  };

  const salvarEdicao = (index) => {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, texto: textoEditado } : tarefa
    );
    setTarefas(novasTarefas);
    setEditando(null);
    setTextoEditado("");
  };

  const limparTarefas = () => {
    setTarefas([]);
  };

  const totalPendentes = tarefas.filter(t => !t.conclida).length;
  const totalConcluidas = tarefas.filter(t => t.concluida).length;

  // Antes do map, ordene as tarefas:
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });
  const tarefasOrdenadas = [...tarefasFiltradas].sort((a, b) => a.conclida - b.concluida);

  return (
    <div className={`app-container${temaEscuro ? " dark" : ""}`} style={{ maxWidth: 400, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Lista de Tarefas</h2>
      <p>
        Pendentes: {totalPendentes} | Concluídas: {totalConcluidas}
      </p>
      <div className="input-row">
        <input
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicionar nova tarefa"
        />
        <select value={prioridade} onChange={e => setPrioridade(e.target.value)}>
          <option>Baixa</option>
          <option>Média</option>
          <option>Alta</option>
        </select>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefas} style={{background:'#f44336', color:'#fff'}}>Limpar Tudo</button>
      </div>
      <div style={{ marginTop: 20, marginBottom: 12 }}>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
      </div>
      <div>
        <button
          onClick={() => setTemaEscuro(!temaEscuro)}
          style={{
            marginBottom: 18,
            background: temaEscuro ? "#222" : "#eee",
            color: temaEscuro ? "#fff" : "#222",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          {temaEscuro ? "🌞 Tema Claro" : "🌙 Tema Escuro"}
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {tarefasOrdenadas.map((tarefa, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
              background: "#f9f9f9",
              borderRadius: 4,
              padding: 8,
            }}
          >
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => marcarConcluida(index)}
            />
            <div className="li-main">
              <span
                className="li-texto"
                style={{
                  textDecoration: tarefa.concluida ? "line-through" : "none"
                }}
              >
                {tarefa.texto}
              </span>
              <span
                className="li-prioridade"
                data-prioridade={tarefa.prioridade}
              >
                [{tarefa.prioridade}]
              </span>
              <span className="li-data">{tarefa.data}</span>
            </div>
            <div className="li-actions">
              {editando === index ? (
                <>
                  <input
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    style={{ flex: 1, marginLeft: 8 }}
                  />
                  <button onClick={() => salvarEdicao(index)}>Salvar</button>
                </>
              ) : (
                <button onClick={() => iniciarEdicao(index, tarefa.texto)}>Editar</button>
              )}
              <button onClick={() => removerTarefa(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
      <style>
        {`
          li span {
            font-size: 1.08rem;
            color: #333;
            transition: color 0.2s;
            font-weight: 500;
            letter-spacing: 0.2px;
            word-break: break-word;
            white-space: normal;   /* <-- aqui está o segredo! */
            margin-bottom: 2px;
            display: block;
          }
        `}
      </style>
    </div>
  );
}

export default App;
