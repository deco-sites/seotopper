import { useState } from 'preact/hooks'

import Input from "../components/Input.tsx";

export default function Section() {
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  return (
    <div className="w-full flex">
      <div
        style="width: 50%"
        class="resize-x flex-grow w-full mx-auto flex flex-col h-[calc(100vh-56px)] overflow-x-hidden overflow-y-scroll border-r border-zinc-800"
      >
        <Input formName="TITULO" formNamePlaceholder="TITULO PLCEHOLDER" value={title} setValue={setTitle}></Input>
        <Input formName="DESCRICAO" formNamePlaceholder="DESCRICAO PLCEHOLDER" value={description} setValue={setDescription}></Input>
      </div>
      <div
        style="width: 50%"
        class="flex-grow w-full mx-auto flex flex-col h-[calc(100vh-56px)] overflow-x-hidden overflow-y-scroll border-r border-zinc-800"
      >
        { title } { description }
      </div>
    </div>
  );
}
