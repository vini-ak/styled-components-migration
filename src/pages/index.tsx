// src/layout/layout.tsx
import { Footer } from "../components/header/footer/footer.component";
import { Header } from "../components/header/header/header.component";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
