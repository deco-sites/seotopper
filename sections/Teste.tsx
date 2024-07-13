import Test from "../islands/Test.tsx";

export default function Section() {
  return (
    <div className="w-full flex">
      <div
        style="width: 50%"
        class="resize-x flex-grow w-full mx-auto flex flex-col h-[calc(100vh-56px)] overflow-x-hidden overflow-y-scroll border-r border-zinc-800"
      >
        <Test formName="TITULO" formNamePlaceholder="TITULO PLCEHOLDER"></Test>
        <Test formName="DESCRICAO" formNamePlaceholder="DESCRICAO PLCEHOLDER"></Test>
      </div>
      <div
        style="width: 50%"
        class="flex-grow w-full mx-auto flex flex-col h-[calc(100vh-56px)] overflow-x-hidden overflow-y-scroll border-r border-zinc-800"
      >
        2
      </div>
    </div>
  );
}
