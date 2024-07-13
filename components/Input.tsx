interface Props {
  formName?: string;
  formNamePlaceholder?: string;
  formDescription?: string;

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
    value = "",
    setValue,
  }: Props,
) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm">{formName}</label>
      <input
        type="text"
        value={value}
        onInput={(e: InputEvent) =>
          setValue && setValue((e.target as HTMLInputElement).value)}
        placeholder={formNamePlaceholder}
        className="input input-sm text-xs input-bordered rounded w-full"
        data-theme="black"
      />
      <div className="w-full text-xs text-zinc-400">{formDescription}</div>
    </div>
  );
}
