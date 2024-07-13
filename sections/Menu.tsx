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
      class="bg-base-100 border-b border-accent h-14 w-full flex items-center justify-between px-4 gap-4"
      id="menu"
      data-theme="black"
    >
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

      <div className="flex gap-0 h-full">
        <button class="h-14 border-b hover:border-accent !border-white text-white btn-accent flex items-center justify-center text-center px-4 text-sm">
          Create
        </button>
        {/* <button class="h-14 border-b hover:border-accent border-transparent btn-primary flex items-center justify-center text-center px-4 text-sm">
          Preview
        </button> */}
        <button class="h-14 border-b hover:border-accent border-transparent btn-primary flex items-center justify-center text-center px-4 text-sm">
          Page Speed
        </button>
      </div>
    </div>
  );
}
