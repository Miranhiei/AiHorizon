export type Task = {
  id: number;
  title: string;
  description: string;
  status: "pending" | "done";
  aiSuggestion: string;
};

export const tasks: Task[] = [
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
  {
    id: 4,
    title: "Integrar ESP32 com servo de rejeição",
    description:
      "Programar atuação do servo motor para remover fardos defeituosos da esteira.",
    status: "pending",
    aiSuggestion:
      "A IA sugere testar primeiro o servo isolado para evitar sobrecarga na fonte durante calibrações.",
  },
  {
    id: 5,
    title: "Testar leitura da câmera no módulo AIHorizon",
    description:
      "Capturar imagem do produto, processar visão computacional e enviar classificação para o backend.",
    status: "pending",
    aiSuggestion:
      "A IA recomenda capturar imagens com boa iluminação e aplicar pré-processamento para melhorar a acurácia.",
  }
];
