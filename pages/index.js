import Wrapper from '@/components/Wrapper';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import {fetchDataFromApi} from '../utils/api';

export default function Home({products}) {

    return (
        <main>
            <HeroBanner />
            <Wrapper>
            {/* Heading and paragraph Start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A ligthweight Nike ZoomX midsole is combined with increased stack to help provide cushioning during extended strectches of running.
                    </div>
                </div>
            {/* Heading and paragraph End */}

            {/* Products grid Start */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
                {products?.data?.map((product) => <ProductCard key={product?.id} data={product} />)}
            </div>
            {/* Products grid End */}

            </Wrapper>
        </main>
    )
}

export async function getStaticProps(){
    const products = await fetchDataFromApi('/api/products?populate=*');
    return { props:{products}}
}