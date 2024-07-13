interface Props {
  formName?: string;
  formNamePlaceholder?: string;
  formDescription?: string;

  /**
   * @format select
   */
  value?: string;
  setValue?: (value: string) => void;
  options: string[];
}

export default function Select(
  {
    formName = "",
    formNamePlaceholder = "",
    formDescription = "",
    value = "",
    setValue,
    options,
  }: Props,
) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm">{formName}</label>
      <select
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setValue && setValue((e.target as HTMLInputElement).value)}
        placeholder={formNamePlaceholder}
        className="select select-sm text-xs select-bordered rounded w-full"
        data-theme="black"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="w-full text-xs text-zinc-400">{formDescription}</div>
    </div>
  );
}
