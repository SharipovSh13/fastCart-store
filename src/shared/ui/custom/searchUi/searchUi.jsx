import { Search } from "lucide-react";
export default function SearchUi({ inpClassName, divClassName }) {
  return (
    <div className={` ${divClassName}`}>
      <input
        type="search"
        name="inputSearch"
        id=""
        placeholder="What are you looking for?"
        className={inpClassName}
      />
      <Search />
    </div>
  );
}
