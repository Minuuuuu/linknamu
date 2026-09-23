export type PaperItem = {
  day: number;
  conference: string;
  title: string;
  file: string;
};

// Day % 3 == 1 → NeurIPS, == 2 → ICML, == 0 → ICLR (CLAUDE.md 로테이션 규칙)
// 새 회차 추가 시 이 배열 맨 뒤에 이어서 추가할 것.
export const papers: PaperItem[] = [
  {
    day: 1,
    conference: "NeurIPS",
    title: "Attention Is All You Need",
    file: "/papers/day1-attention.html",
  },
  {
    day: 2,
    conference: "ICML",
    title: "CollabLLM: 능동적으로 되묻는 AI",
    file: "/papers/day2-collabllm.html",
  },
  {
    day: 3,
    conference: "ICLR",
    title: "Adam: A Method for Stochastic Optimization",
    file: "/papers/day3-adam.html",
  },
  {
    day: 4,
    conference: "NeurIPS",
    title: "Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free",
    file: "/papers/day4-gated-attention.html",
  },
  {
    day: 5,
    conference: "ICML",
    title: "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
    file: "/papers/day5-batchnorm.html",
  },
  {
    day: 6,
    conference: "ICLR",
    title: "LLMs Get Lost In Multi-Turn Conversation",
    file: "/papers/day6-multiturn.html",
  },
  {
    day: 7,
    conference: "NeurIPS",
    title: "Generative Adversarial Networks",
    file: "/papers/day7-gan.html",
  },
  {
    day: 8,
    conference: "ICML",
    title: "The Flexibility Trap: Rethinking the Value of Arbitrary Order in Diffusion Language Models",
    file: "/papers/day8-flexibility-trap.html",
  },
];
