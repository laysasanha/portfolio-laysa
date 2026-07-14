const imgFrame5 = "assets/figma/ae8869f2a38e68dbe8bcac0b21aa2d7be9150cca.png";

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#252525] text-[12px] whitespace-nowrap">
        <span className="leading-[normal]">Ultima atualização:</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[normal]">{` 3 minutos atrás`}</span>
      </p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Links">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#252525] text-[24px] whitespace-nowrap">MML SOLUÇÕES</p>
      <Frame />
    </div>
  );
}

function Outline() {
  return (
    <div className="content-stretch flex h-[34px] items-center justify-center px-[24px] py-[6px] relative rounded-[4px] shrink-0" data-name="outline">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] whitespace-nowrap">Fale conosco</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <a className="cursor-pointer h-full relative rounded-[20px] shrink-0 w-[34px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame5} />
        <div aria-hidden className="absolute border border-[#0b4cad] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </a>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Btns">
      <Outline />
      <Frame3 />
    </div>
  );
}

function Topo() {
  return (
    <div className="content-stretch flex items-center justify-between px-[60px] py-[20px] relative shrink-0 w-[1280px]" data-name="Topo">
      <div aria-hidden className="absolute border-[#d4d4d4] border-b border-solid inset-0 pointer-events-none" />
      <Links />
      <Btns />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[35px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1ba520] text-[14px] text-center whitespace-nowrap">Ligado</p>
      </div>
      <div aria-hidden className="absolute border border-[#1ba520] border-solid inset-0 pointer-events-none rounded-[35px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <a className="block cursor-pointer relative shrink-0 size-[16px]" data-name="ArrowLeft">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute bottom-1/2 left-[15.63%] right-[15.63%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-1px_-9.09%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 2">
              <path d="M12 1H1" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[21.88%_56.25%_21.88%_15.63%]" data-name="Vector">
          <div className="absolute inset-[-11.11%_-22.22%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 11">
              <path d="M5.5 1L1 5.5L5.5 10" id="Vector" stroke="var(--stroke-0, #252525)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </a>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#252525] text-[26px] text-center whitespace-nowrap">
        <span className="leading-[normal]">{`Detalhes do servidor `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">Bon Ton.inc</span>
      </p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] whitespace-nowrap">
        <span className="leading-[normal]">C: link/link/link/</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal]">link</span>
      </p>
    </div>
  );
}

function Bell() {
  return <div className="relative shrink-0 size-[22px]" data-name="Bell" />;
}

function IconCard() {
  return (
    <div className="bg-[rgba(11,76,173,0.06)] col-1 content-stretch flex items-center justify-center ml-0 mt-0 p-[10px] relative rounded-[128px] row-1 size-[42px]" data-name="icon_card">
      <Bell />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <IconCard />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] whitespace-nowrap">Atualizar plano</p>
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#4d4d4d] text-[14px]">Status de saúde</p>
      <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center">Ver detalhes</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#1ba520] relative rounded-[5px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic px-[14px] py-[12px] relative size-full text-[#fdfdfd] text-center whitespace-nowrap">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[18px]">Saudável</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">20%</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="relative shrink-0 text-[#4d4d4d] text-[14px]">Temperatura</p>
      <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center">Ver detalhes</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#0b4cad] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">10°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#0b4cad] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">34°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#dea000] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">52°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#d10000] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">73°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#dea000] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">68°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#0b4cad] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">43°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#dea000] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">54°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#0b4cad] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">45°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#0b4cad] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">42°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#0b4cad] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">49°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#dea000] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">57°C</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-start min-h-px relative w-full">
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] text-center w-full">
      <p className="relative shrink-0 w-[48px]">12:00</p>
      <p className="relative shrink-0 w-[48px]">13:00</p>
      <p className="relative shrink-0 w-[48px]">14:00</p>
      <p className="relative shrink-0 w-[48px]">15:00</p>
      <p className="relative shrink-0 w-[48px]">16:00</p>
      <p className="relative shrink-0 w-[48px]">17:00</p>
      <p className="relative shrink-0 w-[48px]">18:00</p>
      <p className="relative shrink-0 w-[48px]">19:00</p>
      <p className="relative shrink-0 w-[48px]">20:00</p>
      <p className="relative shrink-0 w-[48px]">21:00</p>
      <p className="relative shrink-0 w-[48px]">22:00</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px relative w-[588px]">
      <Frame14 />
      <Frame15 />
      <Frame27 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0">
      <Frame10 />
      <Frame13 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] whitespace-nowrap">Dados do servidor</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px] w-[120px]">Fireware</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center whitespace-nowrap">AM48PF</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px] w-[120px]">Número serial</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center whitespace-nowrap">65</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic p-[10px] relative size-full">
          <p className="leading-[normal] relative shrink-0 text-[#4d4d4d] text-[14px] w-[120px]">Unidade</p>
          <p className="leading-[0] relative shrink-0 text-[#0b4cad] text-[12px] text-center whitespace-nowrap">
            <span className="leading-[normal]">C: link/link/link/</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">link</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px]">Interface</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center">Serial ATA</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px]">Modo de transferência</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center">SATA/500 | SATA/600</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px]">Tamanho do Buffer</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center">36.000 kb</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full whitespace-nowrap">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px]">Tempo ligado</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center">14 horas</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[normal] not-italic p-[10px] relative size-full">
          <p className="relative shrink-0 text-[#4d4d4d] text-[14px] w-[120px]">Tempo desligado</p>
          <p className="relative shrink-0 text-[#0b4cad] text-[12px] text-center whitespace-nowrap">34 minutos</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[494px]">
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame9 />
      <Frame28 />
    </div>
  );
}

function Topo1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start px-[60px] py-[20px] relative shrink-0 w-[1280px]" data-name="Topo">
      <Frame2 />
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[14px]">
      <p className="relative shrink-0">Privacidade</p>
      <p className="relative shrink-0">Termos do site</p>
      <p className="relative shrink-0">Termos MML SOLUÇÕES</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[24px] items-center leading-[normal] not-italic relative shrink-0 text-[#252525] whitespace-nowrap" data-name="Links">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[12px]">MML SOLUÇÕES</p>
      <Frame1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Links1 />
    </div>
  );
}

function Topo2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] pt-[40px] px-[30px] relative shrink-0 w-[1280px]" data-name="Topo">
      <div aria-hidden className="absolute border-[#d4d4d4] border-solid border-t inset-0 pointer-events-none" />
      <Frame38 />
    </div>
  );
}

function ProjetoA() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col items-start justify-between pb-[20px] relative size-full" data-name="Projeto a3">
      <Topo />
      <Topo1 />
      <Topo2 />
    </div>
  );
}
window.FigA3Detalhe = ProjetoA;
