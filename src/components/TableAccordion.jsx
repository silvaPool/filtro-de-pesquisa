import { useEffect, useState } from "react";
import "../App.css";
import parsePhoneNumberFromString from "libphonenumber-js";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

const TableAccordion = ({ items = [], index }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const formatPhone = (phone) => {
    const parsed = parsePhoneNumberFromString(phone, "BR");
    return parsed ? parsed.formatNational() : phone;
  };

  useEffect(() => {
    if (!Array.isArray(items) || items.length === 0) return;

    const accordions = document.getElementsByClassName("accordion");

    const handleClick = function () {
      this.classList.toggle("active");

      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    };

    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", handleClick);
    }

    return () => {
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].removeEventListener("click", handleClick);
      }
    };
  }, [items]);

  return (
    <>
      <div className="header-accordion">
        <div>
          <span className="span-1">Foto</span>{" "}
          <span className="span-2">Nome</span>
        </div>
        <div className="circle"></div>
      </div>
      {items.length === 0 ? (
        <p>Nenhum usuário encontrado</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <button className="accordion">
              <span className="accordion-content">
                <img
                  src={item.image}
                  alt="Perfil"
                  width="34"
                  height="34"
                  style={{ borderRadius: "50px" }}
                />
                {item.name}
              </span>
            </button>
            <div className="panel">
              <p className="panel-text">Cargo: {item.job}</p>
              <p className="panel-text">
                Data de admissão:{" "}
                {format(new Date(item.admission_date), "dd/MM/yyyy", {
                  locale: ptBR,
                })}
              </p>
              <p className="panel-text">Telefone: {formatPhone(item.phone)}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default TableAccordion;
