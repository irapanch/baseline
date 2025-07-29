// "use client";

// import { useParams } from "next/navigation";
// import { useApartments } from "@/context/ApartmentContext";

// export default function UserCabinet() {
//   const { apartments } = useApartments();
//   const params = useParams();

//   const userNumber = Number(params.id);
//   const apartment = apartments.find((a) => Number(a._id) == userNumber);

//   if (!apartment) {
//     return <div>Квартиру не знайдено.</div>;
//   }

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>Квартира №{apartment._id}</h2>

//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           marginTop: "1rem",
//           border: "1px solid #ccc",
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>Ім'я</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px" }}>
//               Власник
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {apartment.residents.map((resident, index) => (
//             <tr key={index}>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                 {resident.name}
//               </td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                 {resident.owner ? "✅ Так" : "Мешканець"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
//         Баланс квартири: {apartment.balance.toFixed(2)} грн
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import userThunk from "@/store/user/operations";
import userSelectors from "@/store/user/selectors";
import apartmentSelectors from "@/store/apartments/selectors";
import apartmentThunk from "@/store/apartments/operations";

export default function UserCabinet() {
  const dispatch = useAppDispatch();
  const params = useParams();

  // Витягуємо userId з params
  const userId = Array.isArray(params.id) ? params.id[0] : params.id;

  const user = useAppSelector(userSelectors.userProfileSelect);
  const apartments = useAppSelector(apartmentSelectors.selectApartments);

  useEffect(() => {
    if (userId) {
      dispatch(apartmentThunk.getAllApartmentsThunk());
    }
  }, [dispatch]);

  // if (!user) return <div>Завантаження користувача...</div>;
  if (!apartments.length) return <div>Завантаження квартир...</div>;

  // Шукаємо квартиру, де _id (string) === user.number (number)
  const apartment = apartments.find((a) => Number(a._id) === Number(userId));

  if (!apartment) return <div>Квартиру не знайдено.</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Квартира №{apartment._id}</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Ім'я</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Власник
            </th>
          </tr>
        </thead>
        <tbody>
          {apartment.residents.map((resident, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {resident.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {resident.owner ? "✅ Так" : "Мешканець"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Баланс квартири: {apartment.balance.toFixed(2)} грн
      </div>
    </div>
  );
}
