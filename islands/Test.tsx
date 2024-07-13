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
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm">{formName}</label>
      <input
        type="text"
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
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
