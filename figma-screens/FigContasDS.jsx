// Sistema de Contas — Design System
// Baseado no Icones-4: paleta de azuis, botões, inputs e tipografia Inter

const blueScale = [
  { hex: "#b7d6ff", label: "#b7d6ff" },
  { hex: "#7eaeee", label: "#7eaeee" },
  { hex: "#5389d1", label: "#5389d1" },
  { hex: "#3a6fb6", label: "#3a6fb6" },
  { hex: "#20569e", label: "#20569e" },
  { hex: "#013274", label: "#013274" },
  { hex: "#808080", label: "#808080" },
  { hex: "#202020", label: "#202020" },
  { hex: "#0b0b0b", label: "#0b0b0b" },
];

const typeScale = [
  { size: "42px", weight: "700", label: "42 · Bold" },
  { size: "32px", weight: "700", label: "32 · Bold" },
  { size: "24px", weight: "700", label: "24 · Bold" },
  { size: "24px", weight: "500", label: "24 · Medium" },
  { size: "18px", weight: "700", label: "18 · Bold" },
  { size: "18px", weight: "500", label: "18 · Medium" },
  { size: "16px", weight: "500", label: "16 · Medium" },
  { size: "16px", weight: "400", label: "16 · Regular" },
  { size: "14px", weight: "500", label: "14 · Medium" },
  { size: "14px", weight: "400", label: "14 · Regular" },
  { size: "14px", weight: "300", label: "14 · Light" },
  { size: "13px", weight: "700", label: "13 · Bold" },
];

const buttonsFilled = [
  { bg: "#3a6fb6", label: "Default" },
  { bg: "#20569e", label: "Hover" },
  { bg: "#013274", label: "Pressing" },
  { bg: "#808080", label: "Disable" },
];

const buttonsOutline = [
  { bg: "#ecf1f8", border: "#3a6fb6", text: "#3a6fb6", label: "Default" },
  { bg: "#ecf1f8", border: "#20569e", text: "#20569e", label: "Hover" },
  { bg: "rgba(1,50,116,0.1)", border: "#013274", text: "#013274", label: "Pressing" },
];

const inputStates = [
  {
    label: "Placeholder",
    border: "rgba(173,173,173,0.6)",
    text: "#808080",
    value: "Placeholder",
    icon: null,
  },
  {
    label: "Normal",
    border: "rgba(173,173,173,0.6)",
    text: "#202020",
    value: "Text",
    icon: "user",
  },
  {
    label: "Focus",
    border: "#3a6fb6",
    text: "#202020",
    value: "Texto|",
    icon: null,
  },
  {
    label: "Senha",
    border: "#3a6fb6",
    text: "#202020",
    value: "••••••••••",
    icon: "eye",
  },
  {
    label: "Erro",
    border: "#ff0000",
    text: "#ff0000",
    value: "Text",
    icon: "user-error",
    error: "Informação",
  },
];

function UserIcon({ error = false }) {
  const c = error ? "#FF0000" : "#202020";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="6" stroke="#202020" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" stroke="#202020" strokeWidth="1.5" />
    </svg>
  );
}

function ContasDesignSystem() {
  return (
    <div className="bg-white font-['Inter',sans-serif] text-[#202020] p-[30px] flex flex-col gap-10 rounded-[20px]">

      {/* Header */}
      <div className="flex flex-col gap-1 pb-8 border-b border-[#ecf1f8]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#808080]">Design System</p>
        <h2 className="text-[32px] font-bold leading-none tracking-[-0.4px]">Sistema de Contas</h2>
        <p className="text-[14px] text-[#808080] mt-1">Plataforma financeira · Inter · Blue #3a6fb6</p>
      </div>

      {/* Colors */}
      <section className="flex flex-col gap-5">
        <div className="bg-[#ecf1f8] rounded-[10px] px-4 py-3">
          <p className="text-[24px] font-medium tracking-[-0.4px]">Colors</p>
        </div>

        <div>
          <p className="text-[11px] text-[#808080] mb-3">Cor atual</p>
          {/* Gradient bar */}
          <div className="flex h-[100px] rounded-[10px] overflow-hidden mb-4">
            {blueScale.map((c, i) => (
              <div
                key={c.hex}
                className="flex-1"
                style={{
                  background: c.hex,
                  borderRadius: i === 0 ? "10px 0 0 10px" : i === blueScale.length - 1 ? "0 10px 10px 0" : undefined,
                }}
              />
            ))}
          </div>
          {/* Chips + labels */}
          <div className="flex gap-2 flex-wrap">
            {blueScale.map(c => (
              <div key={c.hex} className="flex flex-col items-center gap-1.5">
                <div
                  className="w-8 h-8 rounded-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]"
                  style={{ background: c.hex }}
                />
                <p className="text-[10px] font-mono text-[#808080]">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#ecf1f8]" />

      {/* Buttons */}
      <section className="flex flex-col gap-5">
        <div className="bg-[#ecf1f8] rounded-[10px] px-4 py-3">
          <p className="text-[24px] font-medium tracking-[-0.4px]">Buttons</p>
        </div>

        {/* Filled */}
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-bold text-[#202020]">btn</p>
          <div className="flex gap-4 flex-wrap items-end">
            {buttonsFilled.map(b => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center px-5 py-3 rounded-[10px] h-[46px]"
                  style={{ background: b.bg }}
                >
                  <p className="text-[16px] font-medium text-white tracking-[-0.4px] whitespace-nowrap">Buttom</p>
                </div>
                <p className="text-[14px] text-[#202020]">{b.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outline */}
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-bold text-[#202020]">Outline</p>
          <div className="flex gap-4 flex-wrap items-end">
            {buttonsOutline.map(b => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <div
                  className="flex items-center justify-center px-5 py-3 rounded-[10px] h-[46px]"
                  style={{ background: b.bg, border: `1px solid ${b.border}` }}
                >
                  <p className="text-[16px] font-medium tracking-[-0.4px] whitespace-nowrap" style={{ color: b.text }}>
                    Buttom
                  </p>
                </div>
                <p className="text-[14px] text-[#202020]">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#ecf1f8]" />

      {/* Input */}
      <section className="flex flex-col gap-5">
        <div className="bg-[#ecf1f8] rounded-[10px] px-4 py-3">
          <p className="text-[24px] font-medium tracking-[-0.4px]">Input</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {inputStates.map(inp => (
            <div key={inp.label} className="flex flex-col gap-2">
              <p className="text-[13px] font-bold text-[#202020]">{inp.label}</p>
              <div className="flex flex-col gap-1.5">
                <div
                  className="bg-white h-[52px] flex items-center justify-between px-3 rounded-[8px] relative"
                  style={{ border: `1px solid ${inp.border}` }}
                >
                  <p className="text-[16px] tracking-[-0.4px]" style={{ color: inp.text }}>
                    {inp.value}
                  </p>
                  {inp.icon === "user" && <UserIcon />}
                  {inp.icon === "eye" && <EyeIcon />}
                  {inp.icon === "user-error" && <UserIcon error />}
                </div>
                {inp.error && (
                  <div className="flex items-center gap-1.5 bg-[rgba(201,35,35,0.1)] rounded-[8px] px-2 py-1.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#FF0000" strokeWidth="1.5" />
                      <path d="M7 4v4M7 9.5v.5" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <p className="text-[14px] text-[red] leading-tight">{inp.error}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-[#ecf1f8]" />

      {/* Fonts */}
      <section className="flex flex-col gap-5">
        <div className="bg-[#ecf1f8] rounded-[10px] px-4 py-3">
          <p className="text-[24px] font-medium tracking-[-0.4px]">Fonts</p>
        </div>
        <div className="bg-[#ecf1f8] rounded-[10px] px-4 py-3 w-fit">
          <p className="text-[24px] font-medium tracking-[-0.4px]">Inter</p>
        </div>

        <div className="flex flex-col gap-3">
          {typeScale.map(t => (
            <div key={t.label} className="flex items-baseline gap-4 border-b border-[#ecf1f8] pb-3">
              <p className="text-[10px] text-[#808080] w-[100px] shrink-0 font-mono">{t.label}</p>
              <p
                className="text-[#202020] tracking-[-0.4px] truncate"
                style={{ fontSize: Math.min(parseInt(t.size), 22) + "px", fontWeight: t.weight }}
              >
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#ecf1f8]">
        <p className="text-[13px] font-bold tracking-[-0.4px]">Sistema de Contas</p>
        <p className="text-[11px] text-[#808080]">Design system criado por Laysa Santiago Alfredo · 2022</p>
      </div>

    </div>
  );
}

window.FigContasDS = ContasDesignSystem;
