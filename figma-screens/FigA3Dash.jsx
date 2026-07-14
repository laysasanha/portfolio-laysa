const __svgDefault = {
p2567efc0: "M1 1V1.6875C1 2.41685 1.28973 3.11632 1.80546 3.63204C2.32118 4.14777 3.02065 4.4375 3.75 4.4375C4.47935 4.4375 5.17882 4.14777 5.69454 3.63204C6.21027 3.11632 6.5 2.41685 6.5 1.6875V1",
p7894c00: "M2.30383 7.1876C2.30268 6.37255 2.4628 5.56532 2.77496 4.81242C3.08712 4.05952 3.54515 3.37581 4.12268 2.80069C4.7002 2.22556 5.3858 1.77037 6.14 1.46135C6.89419 1.15232 7.70207 0.995561 8.51711 1.0001C11.9202 1.02588 14.6445 3.85322 14.6445 7.26494V7.8751C14.6445 10.9517 15.289 12.7392 15.8562 13.7188C15.9164 13.8232 15.9482 13.9415 15.9483 14.062C15.9484 14.1825 15.9168 14.3009 15.8568 14.4053C15.7967 14.5097 15.7103 14.5966 15.6061 14.6571C15.5019 14.7176 15.3837 14.7497 15.2632 14.7501H1.68508C1.5646 14.7497 1.44635 14.7176 1.34218 14.6571C1.238 14.5966 1.15156 14.5097 1.0915 14.4053C1.03145 14.3009 0.999894 14.1825 1 14.062C1.00011 13.9415 1.03187 13.8232 1.09211 13.7188C1.6593 12.7392 2.30383 10.9517 2.30383 7.8751V7.1876Z",
}

const svgPaths = __svgDefault;
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#252525] text-[26px] text-center whitespace-nowrap">
        <span className="leading-[normal]">{`Servidor `}</span>
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

function Bell({ className }) {
  return (
    <div className={className || "relative shrink-0 size-[22px]"} data-name="Bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
      <div className="absolute bottom-1/4 left-[16.03%] right-[16.03%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.27%_-6.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9483 15.7501">
            <path d={svgPaths.p7894c00} id="Vector" stroke="var(--stroke-0, #0B4CAD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[9.38%] left-[37.5%] right-[37.5%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-29.09%_-18.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 5.4375">
            <path d={svgPaths.p2567efc0} id="Vector" stroke="var(--stroke-0, #0B4CAD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <IconCard />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[14px] items-center leading-[0] relative shrink-0">
      <a className="[word-break:break-word] block cursor-pointer font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[#0b4cad] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Personalizar plano</p>
      </a>
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

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[148px] items-start leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] w-full">
      <p className="relative shrink-0 text-center w-[48px]">Status</p>
      <p className="relative shrink-0 text-center w-[48px]">ID</p>
      <p className="flex-[1_0_0] min-w-px relative">Temperatura</p>
      <p className="relative shrink-0 w-[358px]">Nome</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#1ba520] relative rounded-[35px] shrink-0 size-[14px]">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[48px]">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="bg-[#1ba520] flex-[1_0_0] h-full min-w-px relative rounded-[5px]">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[12px] text-center whitespace-nowrap">Saudável</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[148px] items-center relative shrink-0 w-full">
      <Frame12 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] text-center w-[48px]">01</p>
      <Frame14 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] w-[358px]">Lorem ipsum dolor sit amet consectetur. Ut porta eu.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#1ba520] relative rounded-[35px] shrink-0 size-[14px]">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[48px]">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#d10000] flex-[1_0_0] min-w-px relative rounded-[5px] self-stretch">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[12px] text-center whitespace-nowrap">Crítico</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame16 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] text-center w-[48px]">02</p>
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] w-[358px]">Lorem ipsum dolor sit amet consectetur. Venenatis.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#1ba520] relative rounded-[35px] shrink-0 size-[14px]">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[48px]">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#1ba520] flex-[1_0_0] min-w-px relative rounded-[5px] self-stretch">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[12px] text-center whitespace-nowrap">Saudável</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame20 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] text-center w-[48px]">03</p>
      <Frame22 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] w-[358px]">Lorem ipsum dolor sit amet consectetur. Aenean eu.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#1ba520] relative rounded-[35px] shrink-0 size-[14px]">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[48px]">
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#d10000] flex-[1_0_0] min-w-px relative rounded-[5px] self-stretch">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[12px] text-center whitespace-nowrap">Crítico</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame24 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] text-center w-[48px]">04</p>
      <Frame26 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] w-[358px]">Lorem ipsum dolor sit amet consectetur. Amet nibh.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#1ba520] relative rounded-[35px] shrink-0 size-[14px]">
      <div className="flex flex-row items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[48px]">
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#dea000] flex-[1_0_0] min-w-px relative rounded-[5px] self-stretch">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[4px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[12px] text-center whitespace-nowrap">Alerta</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame28 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] text-center w-[48px]">05</p>
      <Frame30 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0b4cad] text-[14px] w-[358px]">Lorem ipsum dolor sit amet consectetur. Nibh fringilla.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[5px]">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
        <Frame10 />
        <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
        <Frame11 />
        <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
        <Frame15 />
        <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
        <Frame19 />
        <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
        <Frame23 />
        <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
        <Frame27 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-[277px] items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Topo1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] h-[545px] items-start px-[60px] py-[20px] relative shrink-0 w-[1280px]" data-name="Topo">
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

function Frame31() {
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
      <Frame31 />
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
window.FigA3Dash = ProjetoA;
