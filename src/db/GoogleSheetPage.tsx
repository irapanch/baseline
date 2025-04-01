// import getDataFromGoogleSheet from "../api/sheets-api";
// import { GetServerSideProps } from "next";

// interface GoogleSheetPageProps {
//   data: any;
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await getDataFromGoogleSheet();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// const GoogleSheetPage: React.FC<GoogleSheetPageProps> = ({ data }) => {
//   return (
//     <div className="container">
//       <h1>Данные из Google Sheets</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default GoogleSheetPage;

// export default function GoogleSheetPage() {
//   const osbb27SheetUrl = process.env.OSBB27_SHEET_URL;
//   return (
//     <div className="container">
//       <iframe src={osbb27SheetUrl} width="100%" height="1000px"></iframe>
//     </div>
//   );
// }
