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
        <div className="w-5 h-5 min-w-5 bg-accent rounded-full overflow-hidden absolute bottom-1.5 right-1.5">
          <img
            src={value}
            alt=""
            class="w-5 h-5 min-w-5 object-cover object-center"
          />
        </div>
        <input
          type={formType}
          value={value}
          onInput={(e: InputEvent) =>
            setValue && setValue((e.target as HTMLInputElement).value)}
          placeholder={formNamePlaceholder}
          className="input input-sm text-xs input-bordered rounded w-full"
          data-theme="black"
        />
      </div>
      <div className="w-full text-xs text-zinc-400">{formDescription}</div>
    </div>
  );
}
