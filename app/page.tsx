import { getConnection } from "@/lib/db";
import ItemsClient from "./ItemsClient";

type Item = {
  id: number;
  name: string;
  description: string;
};

async function getItems(page: number) {
  const limit = 4;
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const offset = (safePage - 1) * limit;

  try {
    const db = await getConnection();

    const [rows] = await db.query(
      `SELECT id, name, description FROM items ORDER BY id ASC LIMIT ${limit} OFFSET ${offset}`
    );

    const [countRows] = await db.query("SELECT COUNT(*) as total FROM items");

    await db.end();

    const total = (countRows as { total: number }[])[0].total;

    return {
      items: rows as Item[],
      total,
      totalPages: Math.max(1, Math.ceil(total / limit)),
      error: null,
    };
  } catch (err) {
    return {
      items: [],
      total: 0,
      totalPages: 1,
      error: err instanceof Error ? err.message : "Failed to fetch data",
    };
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page || 1);

  const data = await getItems(page);

  return <ItemsClient {...data} page={page} />;
}