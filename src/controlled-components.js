import { useState } from "react";
const App = () => {
  const [value, setValue] = useState({
    normal: "input placeholder",
    texto: "textarea placeholder",
    select: "",
    check: false,
    estado: "feliz",
  });
  const handleChange = ({ target }) => {
    console.log(target.type, target.checked);
    // Opcio 1:
    // setValue({ ...value, [target.name]: target.value });
    // Opcio 2 (millor, no manipules el `value` directament):
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      {value.normal.length < 5 && value.normal !== "" ? (
        <span>longitud minma de 5</span>
      ) : (
        ""
      )}
      <textarea name="texto" onChange={handleChange} value={value.texto} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Seleccione --</option>
        <option value="chanchofeliz">-- Chancho feliz --</option>
        <option value="chanchitofeliz">-- Chanchito feliz --</option>
        <option value="chanchitotriste">-- Chanchito triste --</option>
        <option value="felipe">-- Felipe --</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho</label>
        <input
          name="estado"
          onChange={handleChange}
          type="radio"
          value="feliz"
          checked={value.estado === "feliz"}
        />{" "}
        Feliz
        <input
          name="estado"
          onChange={handleChange}
          type="radio"
          value="triste"
          checked={value.estado === "triste"}
        />{" "}
        Triste
        <input
          name="estado"
          onChange={handleChange}
          type="radio"
          value="felipe"
          checked={value.estado === "felipe"}
        />{" "}
        Felipe
      </div>
    </div>
  );
};

export default App;
