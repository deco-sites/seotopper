import { useState } from "preact/compat";

interface Props {
  formName?: string;
  formNamePlaceholder?: string;

  /**
   * @format text-input
   */
  value?: string;
  setValue?: Function;
}

export default function Input(
  { formName = "", formNamePlaceholder = "", value = "", setValue }: Props,
) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm">{formName}</label>
      <input
        type="text"
        value={value}
        onInput={(e: InputEvent) => setValue && setValue((e.target as HTMLInputElement).value)}
        placeholder={formNamePlaceholder}
        className="input input-sm input-bordered rounded w-full"
        data-theme="black"
      />
    </div>
    /* <div>
        <p class="text-xl">{formName}: {name}</p>
      </div> */
  );
}
