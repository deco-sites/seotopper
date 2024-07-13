interface Props {
  formName?: string;
  formNamePlaceholder?: string;
  formDescription?: string;
  formType?: string;

  /**
   * @format text-input
   */
  value?: string;
  setValue?: Function;
}

export default function Input(
  {
    formName = "",
    formNamePlaceholder = "",
    formDescription = "",
    formType = "",
    value = "",
    setValue,
  }: Props,
) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm">{formName}</label>
      <div className="relative w-full">
        <input
          type="color"
          value={value}
          onInput={(e: InputEvent) =>
            setValue && setValue((e.target as HTMLInputElement).value)}
          placeholder={formNamePlaceholder}
          className="appearance-none w-6 min-w-6 h-6 rounded overflow-hidden absolute bottom-1 right-1"
          data-theme="black"
        />
        <input
          type="text"
          value={value}
          onInput={(e: InputEvent) =>
            setValue && setValue((e.target as HTMLInputElement).value)}
          placeholder={formNamePlaceholder}
          className="input input-sm text-xs input-bordered rounded w-full pl-8"
          data-theme="black"
        />
      </div>
      <div className="w-full text-xs text-zinc-400">{formDescription}</div>
    </div>
  );
}
