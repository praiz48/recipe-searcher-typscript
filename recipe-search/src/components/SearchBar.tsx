import React, { useRef } from "react";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      margin: "20px",
      fontFamily: "'Pacifico', cursive",
      color: "#6B4226",
    },
    form: {
      display: "flex",
      flexDirection: "row" as const,
      alignItems: "center",
      gap: "10px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #D4A373",
      width: "250px",
      backgroundColor: "#FFF8E1",
      color: "#6B4226",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#D4A373",
      color: "#FFF8E1",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Search for recipes..."
          ref={inputRef}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
