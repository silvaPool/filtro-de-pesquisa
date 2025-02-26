import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchItem = e.target.value;
    setSearchItem(searchItem);
  };

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
    </div>
  );
}

export default App;
