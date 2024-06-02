import toast, { Toaster } from "react-hot-toast";
import { FormEvent, useRef } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const queryInput = form.querySelector<HTMLInputElement>(
      'input[name="query"]'
    );
    if (!queryInput || queryInput.value.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSearch(queryInput.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
