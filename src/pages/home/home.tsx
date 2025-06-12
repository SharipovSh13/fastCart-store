import AsideCategory from "@/widgets/categoryAsideBar/categoryAside";

export default function Home(){
    return <>
    <section aria-label="Главная меню и слайдер карусел">
        <div className=" flex">
            <div className=" bg-red-500">
                <AsideCategory/>
            </div>
            <div className="">

            </div>
        </div>
    </section>
    </>
}