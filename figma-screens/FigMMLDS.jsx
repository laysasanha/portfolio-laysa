// MML SOLUÇÕES — Design System
// Cores, tipografia, componentes e tokens do projeto de infraestrutura B2B

const colors = {
  primary: [
    { name: "Primary", hex: "#0B4CAD", label: "Ações, links, CTAs" },
    { name: "Primary Dark", hex: "#082E6B", label: "Hover, foco" },
    { name: "Primary Light", hex: "rgba(11,76,173,0.06)", label: "Fundo de ícones" },
  ],
  status: [
    { name: "Saudável", hex: "#1BA520", label: "Status OK" },
    { name: "Alerta", hex: "#DEA000", label: "Atenção necessária" },
    { name: "Crítico", hex: "#D10000", label: "Falha crítica" },
  ],
  neutral: [
    { name: "Title", hex: "#252525", label: "Títulos e texto principal" },
    { name: "Body", hex: "#4D4D4D", label: "Texto secundário" },
    { name: "Placeholder", hex: "#D4D4D4", label: "Bordas e placeholders" },
    { name: "Surface", hex: "#FDFDFD", label: "Fundo de cards e páginas" },
  ],
};

const typeScale = [
  { label: "Display", size: "26px", weight: "700", sample: "Servidor Bon Ton.inc", note: "Page title" },
  { label: "Heading", size: "40px", weight: "600", sample: "Criar uma conta", note: "Section heading" },
  { label: "Subheading", size: "24px", weight: "700", sample: "MML SOLUÇÕES", note: "Brand / nav" },
  { label: "Body", size: "16px", weight: "400", sample: "Lorem ipsum dolor sit amet consectetur.", note: "Paragraph text" },
  { label: "Label", size: "14px", weight: "400", sample: "Razão Social", note: "Form labels" },
  { label: "Caption", size: "12px", weight: "400", sample: "Última atualização: 3 minutos atrás", note: "Meta info" },
];

const statusBadges = [
  { label: "Saudável", bg: "#1BA520", text: "#fff" },
  { label: "Alerta", bg: "#DEA000", text: "#fff" },
  { label: "Crítico", bg: "#D10000", text: "#fff" },
  { label: "Ligado", bg: "transparent", border: "#1BA520", text: "#1BA520" },
];

const tempColors = [
  { label: "Normal", range: "< 40°C", bg: "#0B4CAD", text: "#fff" },
  { label: "Atenção", range: "40–60°C", bg: "#DEA000", text: "#fff" },
  { label: "Crítico", range: "> 60°C", bg: "#D10000", text: "#fff" },
];

function MMLDesignSystem() {
  return (
    <div className="bg-[#fdfdfd] font-['Inter',sans-serif] text-[#252525] p-10 flex flex-col gap-12">

      {/* Header */}
      <div className="flex flex-col gap-1 pb-8 border-b border-[#e9e9e9]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#4d4d4d]">Design System</p>
        <h2 className="text-[32px] font-bold leading-none">
          <span className="text-[#0B4CAD]">MML</span>
          {" SOLUÇÕES"}
        </h2>
        <p className="text-[14px] text-[#4d4d4d] mt-1">Plataforma de monitoramento de infraestrutura B2B · Inter · Blue #0B4CAD</p>
      </div>

      {/* Colors */}
      <section className="flex flex-col gap-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4d4d4d]">Cores</p>

        <div className="flex flex-col gap-4">
          {/* Primary */}
          <div>
            <p className="text-[11px] text-[#4d4d4d] mb-2">Principal</p>
            <div className="flex gap-3 flex-wrap">
              {colors.primary.map(c => (
                <div key={c.hex} className="flex flex-col gap-2 w-[160px]">
                  <div className="h-[52px] rounded-[5px] border border-[#e9e9e9]" style={{ background: c.hex }} />
                  <div>
                    <p className="text-[12px] font-semibold">{c.name}</p>
                    <p className="text-[11px] text-[#4d4d4d] font-mono">{c.hex}</p>
                    <p className="text-[11px] text-[#4d4d4d]">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="text-[11px] text-[#4d4d4d] mb-2">Status de saúde</p>
            <div className="flex gap-3 flex-wrap">
              {colors.status.map(c => (
                <div key={c.hex} className="flex flex-col gap-2 w-[160px]">
                  <div className="h-[52px] rounded-[5px]" style={{ background: c.hex }} />
                  <div>
                    <p className="text-[12px] font-semibold">{c.name}</p>
                    <p className="text-[11px] text-[#4d4d4d] font-mono">{c.hex}</p>
                    <p className="text-[11px] text-[#4d4d4d]">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral */}
          <div>
            <p className="text-[11px] text-[#4d4d4d] mb-2">Neutros</p>
            <div className="flex gap-3 flex-wrap">
              {colors.neutral.map(c => (
                <div key={c.hex} className="flex flex-col gap-2 w-[160px]">
                  <div className="h-[52px] rounded-[5px] border border-[#e9e9e9]" style={{ background: c.hex }} />
                  <div>
                    <p className="text-[12px] font-semibold">{c.name}</p>
                    <p className="text-[11px] text-[#4d4d4d] font-mono">{c.hex}</p>
                    <p className="text-[11px] text-[#4d4d4d]">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#e9e9e9]" />

      {/* Typography */}
      <section className="flex flex-col gap-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4d4d4d]">Tipografia — Inter</p>
        <div className="flex flex-col gap-4">
          {typeScale.map(t => (
            <div key={t.label} className="flex items-baseline gap-6 border-b border-[#f0f0f0] pb-4">
              <div className="w-[100px] shrink-0">
                <p className="text-[11px] font-semibold text-[#0B4CAD]">{t.label}</p>
                <p className="text-[10px] text-[#4d4d4d] font-mono">{t.size} / {t.weight}w</p>
              </div>
              <p
                className="flex-1 text-[#252525] leading-tight truncate"
                style={{ fontSize: Math.min(parseInt(t.size), 24) + "px", fontWeight: t.weight }}
              >
                {t.sample}
              </p>
              <p className="text-[10px] text-[#4d4d4d] shrink-0 hidden md:block">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#e9e9e9]" />

      {/* Components */}
      <section className="flex flex-col gap-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4d4d4d]">Componentes</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] text-[#4d4d4d]">Botões</p>
          <div className="flex gap-3 flex-wrap items-center">
            <button className="bg-[#0B4CAD] text-[#fdfdfd] text-[14px] font-medium rounded-[4px] px-6 py-3">
              Acessar
            </button>
            <button className="border border-[#d4d4d4] text-[#0B4CAD] text-[14px] font-medium rounded-[4px] px-6 py-3 bg-white">
              Fale conosco
            </button>
            <button className="bg-[#0B4CAD] text-[#fdfdfd] text-[14px] font-medium rounded-[4px] px-6 py-3 opacity-40 cursor-not-allowed">
              Desabilitado
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] text-[#4d4d4d]">Inputs</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col gap-2 w-[220px]">
              <p className="text-[14px] text-[#4d4d4d]">E-mail</p>
              <div className="h-[45px] border border-[rgba(212,212,212,0.5)] rounded-[5px] px-[10px] flex items-center">
                <p className="text-[14px] text-[#d4d4d4]">exemplo@empresa.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[220px]">
              <p className="text-[14px] text-[#4d4d4d]">CPF</p>
              <div className="h-[45px] border border-[#e9e9e9] rounded-[5px] px-[10px] flex items-center bg-white">
                <p className="text-[14px] text-[#252525]">000.000.000-00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] text-[#4d4d4d]">Status badges</p>
          <div className="flex gap-3 flex-wrap items-center">
            {statusBadges.map(b => (
              <div
                key={b.label}
                className="px-3 py-1 rounded-full text-[14px] font-medium"
                style={{
                  background: b.bg,
                  color: b.text,
                  border: b.border ? `1px solid ${b.border}` : undefined,
                }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Temperature scale */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] text-[#4d4d4d]">Escala de temperatura</p>
          <div className="flex gap-2 flex-wrap">
            {tempColors.map(t => (
              <div key={t.label} className="flex flex-col gap-1.5 w-[120px]">
                <div
                  className="rounded-[5px] px-3 py-3 text-center"
                  style={{ background: t.bg, color: t.text }}
                >
                  <p className="text-[16px] font-semibold">48°C</p>
                </div>
                <p className="text-[11px] font-semibold text-[#252525]">{t.label}</p>
                <p className="text-[10px] text-[#4d4d4d]">{t.range}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] text-[#4d4d4d]">Step indicator (onboarding)</p>
          <div className="bg-[rgba(77,77,77,0.1)] h-[65px] rounded-[5px] flex">
            {[
              { n: "1", label: "Dados\npessoais", active: false },
              { n: "2", label: "Dados\nEmpresa", active: true },
              { n: "3", label: "Senha de\nacesso", active: false },
            ].map((step, i) => (
              <div key={i} className="flex-1 flex items-center px-3 gap-2 border-r border-[rgba(37,37,37,0.2)] last:border-r-0">
                <p className="text-[40px] font-semibold leading-none" style={{ color: step.active ? "#0B4CAD" : "#252525" }}>
                  {step.n}
                </p>
                <p className="text-[12px] whitespace-pre-line leading-tight" style={{ color: step.active ? "rgba(11,76,173,0.7)" : "rgba(77,77,77,0.7)" }}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Icon card */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] text-[#4d4d4d]">Icon card (notificação)</p>
          <div className="flex gap-3">
            <div className="bg-[rgba(11,76,173,0.06)] rounded-full p-3 w-[42px] h-[42px] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C11 4 7 8 7 13v5l-2 3v1h22v-1l-2-3v-5c0-5-4-9-9-9z" stroke="#0B4CAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 25c0 1.66 1.34 3 3 3s3-1.34 3-3" stroke="#0B4CAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="bg-[rgba(11,76,173,0.06)] rounded-full p-3 w-[42px] h-[42px] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <rect x="3" y="3" width="11" height="11" rx="1" stroke="#0B4CAD" strokeWidth="2"/>
                <rect x="18" y="3" width="11" height="11" rx="1" stroke="#0B4CAD" strokeWidth="2"/>
                <rect x="3" y="18" width="11" height="11" rx="1" stroke="#0B4CAD" strokeWidth="2"/>
                <rect x="18" y="18" width="11" height="11" rx="1" stroke="#0B4CAD" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-[#e9e9e9]">
        <p className="text-[12px] font-bold text-[#252525]">
          <span className="text-[#0B4CAD]">MML</span>{" SOLUÇÕES"}
        </p>
        <p className="text-[11px] text-[#4d4d4d]">Design system criado por Laysa Santiago Alfredo · 2023</p>
      </div>

    </div>
  );
}

window.FigMMLDS = MMLDesignSystem;
