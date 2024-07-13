interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "Seotopper" }: Props) {
  return (
    // data-theme="dark"
    <div
      class="bg-base-100 border-b border-zinc-800 h-14 w-full flex items-center justify-between px-4 gap-4"
      id="menu"
      data-theme="black"
    >
      <div class="flex items-center h-full gap-4 w-full">
        <div class="flex items-center gap-3">
          <img
            src="https://seotopper.netlify.app/assets/top.svg"
            class="max-w-full w-5"
            alt="Logo SeoTopper"
          />
          <span class="hidden md:block text-sm md:text-base font-medium">
            {name}
          </span>
        </div>

        <div className="flex gap-0">
          <input
            type="text"
            placeholder="https://deco.cx"
            className="input input-sm rounded input-bordered w-full max-w-sm"
            data-theme="black"
          />
          <button class="btn btn-sm btn-accent -ml-2" style="border-top-left-radius: 0; border-bottom-left-radius: 0">Fetch URL</button>
        </div>
      </div>

      <div className="flex gap-2">
        <button class="btn btn-sm btn-primary">Create</button>
        <button class="btn btn-sm btn-secondary">Preview</button>
      </div>
    </div>
  );
}
