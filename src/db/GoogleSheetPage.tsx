export default function GoogleSheetPage() {
  const osbb27SheetUrl = process.env.OSBB27_SHEET_URL;
  return (
    <div className="container">
      <iframe src={osbb27SheetUrl} width="100%" height="1000px"></iframe>
    </div>
  );
}
