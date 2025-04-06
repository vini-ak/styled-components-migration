import { Footer } from "../components/header/footer/footer.component";
import { Header } from "../components/header/header/header.component"
import * as Styles from "./styles"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Styles.Layout>
            <Header />
            <Styles.Content>
                { children }
            </Styles.Content>
            <Footer />
        </Styles.Layout>
    );
}