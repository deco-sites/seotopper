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
    <div class="grid grid-cols-2 gap-4 p-4">
      <div>
        <label
          className="input input-bordered flex items-center gap-2"
          data-theme="black"
        >
          <span className="font-bold">{formName}</span>
          <input
            type="text"
            value={value}
            onInput={(e: InputEvent) => setValue && setValue((e.target as HTMLInputElement).value)}
            placeholder={formNamePlaceholder}
            className="grow"
            data-theme="black"
          />
        </label>
      </div>
      {/* <div>
        <p class="text-xl">{formName}: {name}</p>
      </div> */}
    </div>
  );
}
