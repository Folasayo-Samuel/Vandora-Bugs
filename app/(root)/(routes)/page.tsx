// import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions"
// import Image from 'next/image';
// import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";
;

import styles from '@/styles/home.module.css';


interface RootPageProps {
    searchParams: {
        categoryId: string;
        name: string;
    };
};

const RootPage = async ({
    searchParams
}: RootPageProps) => {
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

    // const categories = await prismadb.category.findMany();

    return (
        // TODO: Coming back to take the image designed here to companion's component.
        <>
        <div className={`h-full ${styles.home}`}>
            {/* <SearchInput /> */}
        <p className={styles.heading}>Unleash the potential of AI</p>
        <p className={styles['heading-2']}>
          Discover the Future Now, Experience the Power of the Smartest AI
        </p>
        {/* <div className="container">
          <div className="row">
            <div className={styles['general-card']}>
              <div className={`card ${styles['card-1']}`}>
                <Image
                  className={`${styles['card-img-top']} ${styles['card-img']} ${styles['card-width']}`}
                  src={FirstImage}
                  alt="Card Image"
                />
                <div className="card-body">
                  <h4 className={`${styles['card-title']}`}>Sally Field</h4>
                  <p className={`${styles['card-text']}`}>
                    Communication Student at Boston College
                  </p>
                  <div className={styles.tags}>
                    <p>@obayi</p>
                    <div className={styles.comment}>
                      <Image
                        className={styles['comment-icon-1']}
                        src={FirstComment}
                        alt="Comment Image"
                      />
                      <h6>22</h6>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div> */}
            {/* <Categories data={categories} /> */}
        </div>
            <Companions data={data} />
        </>
    )
}

export default RootPage;