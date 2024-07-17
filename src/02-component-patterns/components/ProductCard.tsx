import styles from '../styles/styles.module.css'
import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces'

export interface Props {
  product: Product,
  children?: JSX.Element | JSX.Element[],
  className?: string,
  style?: React.CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;


export const ProductCard = ({children, product, className, style}:Props) => {

    const {counter, increaseBy} = useProduct()


  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div 
          className={ `${styles.productCard} ${className}` }
          style={style}
        >

            {children}

        </div>
    </Provider>
  )
}
