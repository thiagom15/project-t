import { ProductsPage } from "../products/ProductsPage";
import { ListProductsSearched } from "../../components"

export function HomePage() {
  return (
    <main>
      <ListProductsSearched />
      <ProductsPage />
    </main>
  )
}