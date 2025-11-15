const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const tasks = [
  {
    id: 1,
    title: "Montar estrutura da esteira AGV",
    description:
      "Realizar montagem mecânica da esteira, incluindo roletes, suportes laterais e base de chapa metálica reforçada.",
    status: "pending",
    aiSuggestion:
      "A IA recomenda verificar o torque dos parafusos a cada 30 minutos e lubrificar os mancais antes da montagem final.",
  },
  {
    id: 2,
    title: "Configurar ESP32 da célula mecatrônica",
    description:
      "Conectar o ESP32 à rede Wi-Fi de testes e sincronizar logs dos sensores via protocolo HTTP.",
    status: "pending",
    aiSuggestion:
      "A IA sugere validar primeiro uma leitura com 1 sensor ultrassônico antes de ativar todos os sensores.",
  },
  {
    id: 3,
    title: "Calibrar sensor ultrassônico da esteira",
    description:
      "Efetuar leituras de distância em diferentes alturas de fardos e registrar curva de calibração.",
    status: "done",
    aiSuggestion:
      "Recomenda-se registrar pelo menos 10 pontos diferentes para melhorar a precisão da interpolação linear.",
  },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  return res.json(task);
});

app.post("/tasks/:id/decision", (req, res) => {
  const id = Number(req.params.id);
  const { approved } = req.body;

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  console.log(
    `Decisão recebida para a tarefa ${id}: ${approved ? "ACEITA" : "REJEITADA"}`
  );

  return res.status(200).json({ ok: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API AIHorizon rodando em http://localhost:${PORT}`);
});
