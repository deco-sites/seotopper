import { useState } from "preact/compat";

interface Props {
  formName?: string;
  formNamePlaceholder?: string;

  /**
   * @format text-input
   */
  pageTitle?: string;
}

export default function NameDisplay(
  { pageTitle = "", formName = "", formNamePlaceholder = "" }: Props,
) {
  const [name, setName] = useState(pageTitle);

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
            value={name}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
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
