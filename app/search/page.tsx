import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions"
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";


interface SearchPageProps {
    searchParams: {
        categoryId: string;
        name: string;
    };
};

const SearchPage = async ({
    searchParams
}: SearchPageProps) => {
    const data = await prismadb.companion.findMany({
        where: {
            categoryId: searchParams.categoryId,
            name: {
                search: searchParams.name,
            },
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            _count: {
                select: {
                    messages: true,
                }
            }
        },
    });

    const categories = await prismadb.category.findMany();

    return (
        // className={`h-full pb-4 pr-4 pl-4 space-y-2`}
        <div>
            <SearchInput />
            <Categories data={categories} />
            <Companions data={data} />
        </div>
    )
}

export default SearchPage;