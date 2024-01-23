const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: 'Celebrity' },
                { name: 'Black' },
                { name: 'White' },
                { name: 'Asian' },
                { name: 'Latino' },
                { name: 'Mature' },
            ],
        });
    } catch (error) {
        console.error('Error seeding default categories:', error);
    } finally {
        await db.$disconnect();
    }
}

main();