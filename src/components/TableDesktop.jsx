import { useEffect, useState } from "react";
import "../App.css";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import parsePhoneNumberFromString from "libphonenumber-js";

const TableDesktop = ({ items }) => {
  const formatPhone = (phone) => {
    const parsed = parsePhoneNumberFromString(phone, "BR");
    return parsed ? parsed.formatNational() : phone;
  };

  return (
    <>
      {items.length === 0 ? (
        <p>Nenhum usuário encontrado</p>
      ) : (
        <div className="table-container">
          <table>
            <thead className="thead">
              <tr className="tr">
                <th className="th">Foto</th>
                <th className="th">Nome</th>
                <th className="th">Cargo</th>
                <th className="th">Data de admissão</th>
                <th className="th">Telefone</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {items.map((item) => (
                <>
                  <tr key={item.id}>
                    <td data-title="Foto">
                      <img
                        src={item.image}
                        alt=""
                        width="34"
                        height="34"
                        style={{ borderRadius: "50px" }}
                      />
                    </td>
                    <td data-title="Nome" data-role="collapsible">
                      {item.name}
                    </td>
                    <td data-title="Cargo" className="td">
                      {item.job}
                    </td>
                    <td data-title="Data" className="td">
                      {format(new Date(item.admission_date), "dd/MM/yyyy", {
                        locale: ptBR,
                      })}
                    </td>
                    <td data-title="Telefone" className="td">
                      {formatPhone(item.phone)}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableDesktop;
