import DataTable from "./DataTable";

type BlogPageLayoutProps = {
  children?: React.ReactNode; // Made children optional
};

export default function BlogPageLayout({ children }: BlogPageLayoutProps) {
  return (
    <>
      <DataTable />
      {children}
    </>
  );
}
