const imgRectangle8 = "assets/figma/8351a6a3b5765eab254b57ae0dd8a9f8012ceb78.png";

function Frame1() {
  return (
    <div className="[word-break:break-word] col-1 content-stretch flex flex-col gap-[10px] h-[168px] items-start justify-center ml-[84.83px] mt-[540px] relative row-1 w-[450px]">
      <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[46px] relative shrink-0 text-[40px] text-white w-[541.942px]">Mantenha uma boa manutenção</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-[min-content]">Ao usar uma imagem de máquina virtual, deve-se garantir que os funcionários de TI possam manter a infraestrutura subjacente.</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-full inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[768px] ml-0 mt-0 relative row-1 w-[610px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-20.97%] max-w-none top-0 w-[185.73%]" src={imgRectangle8} />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b col-1 from-[rgba(0,0,0,0)] h-[332px] ml-0 mt-[436px] relative row-1 to-[84.661%] to-[rgba(0,0,0,0.8)] w-[610px]" />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 w-[400px] whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#252525] text-[40px]">Login</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(77,77,77,0.7)]">Bem-vindo de volta! Por favor, digite seus dados.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[45px] relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[10px] py-[13px] relative size-full" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[400px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] w-[120px]">CPF</p>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[45px] relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(212,212,212,0.5)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[10px] py-[13px] relative size-full" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[400px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4d4d4d] text-[14px] w-[120px]">Senha</p>
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[400px]">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Default() {
  return (
    <div className="bg-[#0b4cad] content-stretch flex h-[52px] items-center justify-center px-[24px] py-[13px] relative rounded-[4px] shrink-0 w-[400px]" data-name="default">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#fdfdfd] text-[14px] whitespace-nowrap">Acessar</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#252525] text-[18px] w-[196px]">
        <span className="leading-[normal] text-[#0b4cad]">MML</span>
        <span className="leading-[normal]">{` SOLUÇÕES`}</span>
      </p>
      <Frame2 />
      <Frame3 />
      <Default />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(77,77,77,0.7)] text-center w-[min-content]">
        <span className="leading-[normal]">{`Ainda não possui conta? `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] text-[#0b4cad] underline">Cadastrar-se</span>
      </p>
    </div>
  );
}

function ProjetoA() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex items-center justify-between pr-[120px] relative size-full" data-name="Projeto a3">
      <Group />
      <Frame />
    </div>
  );
}
window.FigA3Login = ProjetoA;
