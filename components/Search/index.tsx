import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import SearchView from "./View";

function Search() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const keyword = formData.get("keyword") as string;
    router.push(`/search/${keyword}`);
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <SearchView
      onSubmit={handleSubmit}
      onChange={handleChange}
      onCancel={handleCancel}
      keyword={keyword}
    />
  );
}

export default Search;
