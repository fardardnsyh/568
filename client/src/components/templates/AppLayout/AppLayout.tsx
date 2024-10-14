import Header from "@mols/Header";
import Footer from "@mols/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  hasHeader = true,
  hasFooter = true,
}) => {
  return (
    <div className="flex flex-col">
      {hasHeader && <Header />}
      <main className="flex-grow">{children}</main>
      {hasFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
