interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function action({ name = "Hello" }: Props) {
  return name
}