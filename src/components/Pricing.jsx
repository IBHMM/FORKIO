import {PriceBlock} from './Prices.jsx'

const data = [
    {
        who: 'STUDENT',
        price: '29',
        duration: 'PER MONTH',
        description: 'Personal License'
    },
    {
        who: 'PROFESSIONAL',
        price: '59',
        duration: 'PER MONTH',
        description: 'Professional License Email Support'
    },
    {
        who: 'AGENSY',
        price: '99',
        duration: 'PER MONTH',
        description: '1-12 Team Members Phone Support '
    },
    {
        who: 'ENTERPRISE',
        price: '159',
        duration: 'PER MONTH',
        description: 'Unlimited Team Members 24/ 7 Phone Support '
    },
]

export function Pricing() {
    return (
        <section className="pr mt-0 p-10 gap-20 flex w-full flex-col items-center justify-between">

            <section className="w-full text-center text-[#fff]" >
                <p className="text-[350%] max-[500px]:text-[200%] ">Fork Subscription Pricing</p>
            </section>

            <section className='flex flex-row w-full gap-10 mt-10 flex-wrap items-center justify-center'>
                {
                    data.map((element,i) => {
                        return (
                            <PriceBlock element={element} />
                        )
                    })
                }
            </section>

        </section>
    )
}